#!/usr/bin/env python2

import nfqueue
from scapy.all import IP, TCP, send
import os
import socket
import time

def ip_ttl_eq_ssl_cn(payload, data):
    bag = []
    for i in xrange(32):
        pkt = IP(data)
        pkt[IP].ttl = i
        del pkt[IP].chksum
        pkt[TCP].payload = str(pkt[TCP].payload).replace('instagram.com', 'in{:03d}gram.rus'.format(i))
        del pkt[TCP].chksum
        bag.append(pkt)
    send(bag)
    payload.set_verdict(nfqueue.NF_DROP)

def tcp_segmentation(payload, data):
    pkt = IP(data)
    segment = str(pkt[TCP].payload)
    slices = []
    badword = 'instagram.com'
    while badword in segment:
        ndx = segment.index(badword)
        slices.append(segment[:ndx+5])
        segment = segment[ndx+5:]
    slices.append(segment)
    bag = []
    offset = 0
    for p in slices:
        pkt = IP(data)
        pkt[TCP].payload = p
        pkt[TCP].seq += offset
        del pkt[IP].len, pkt[IP].chksum, pkt[TCP].chksum
        offset += len(p)
        bag.append(pkt)
    send(bag)
    payload.set_verdict(nfqueue.NF_DROP)

def callback(wtf_42, payload):
    data = payload.get_data()
    if 'instagram.com' not in data:
        payload.set_verdict(nfqueue.NF_ACCEPT)
        return
    #ip_ttl_eq_ssl_cn(payload, data)
    tcp_segmentation(payload, data)

def main():
    q = nfqueue.queue()
    q.open()
    q.bind(socket.AF_INET)
    q.set_callback(callback)
    q.create_queue(1)
    try:
        q.try_run() # Main loop
    except KeyboardInterrupt:
        q.unbind(socket.AF_INET)
        q.close()

if __name__ == '__main__':
    main()
