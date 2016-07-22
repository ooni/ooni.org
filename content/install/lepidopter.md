---
date: "2015-09-15"
title: "Lepidopter Installation: Help Guides and Resources"
description: "Helpful resources and guides for getting started with the Lepidopter Raspberry Pi image"
aliases: ["/lepidopter/lepidopter"]
tags: [ "lepidopter", "image", "raspberry pi", "distribution" ]
enabletoc: true
---

# Lepidopter guide

This guide explains step-by-step how to run OONI tests from a Raspberry Pi. 

The code of the image as well as the build script can be found in the [git
repository](https://github.com/TheTorProject/lepidopter). 

Some compact documentation on how to install, build, copy to an SD card and run
Lepidopter in QEMU is described
[here](https://github.com/TheTorProject/lepidopter/blob/master/README.md).

##About Lepidopter

Lepidopter is an *ooniprobe distribution* for Raspberry Pis. 

This enables users to contribute to the collection of network measurements
consistently across time, without having to manually run ooniprobe from their
computers and regardless of their technical skills. This distribution is
configured in such a way that, when inserted into a Raspberry Pi and connected
to a network, it will by default run ooniprobe once a day and send collected
measurements directly to OONI’s measurement collector. It is also designed to
automatically get updated to the newest version of ooniprobe. 

All measurements collected by Lepidopter are published on [OONI
Explorer](https://explorer.ooni.torproject.org/world/).

By using Lepidopter, you will be running the following OONI software tests via your Raspberry Pi:

* **[Web connectivity](https://ooni.torproject.org/nettest/web-connectivity/):**
Designed to examine whether URLs are blocked or not (and if so, how)

* **[HTTP invalid request line](https://ooni.torproject.org/nettest/http-invalid-request-line/):** Designed to detect the presence of systems which could potentially be responsible for censorship, surveillance and traffic manipulation

* **[HTTP header field manipulation](https://ooni.torproject.org/nettest/http-header-field-manipulation/):** Similar to the previous test (HTTP invalid request line)

The main advantages of collecting measurements through Raspberry Pis include the following:

* Stable and continuous daily measurements across extended periods of time

* More types of data collection

* More accurate measurements

## Requirements

The following include a list of requirements to get started:

* **Raspberry Pi:** The Lepidopter Raspberry Pi image is compatible with all
types of Raspberry Pis (tested: B+, RPi 1 model B, RPi 2 model B).

* **SD Card:** We recommend a 4GB (minimum size) class 4 or higher SD card.

* **Internet access:** A standard Ethernet cable (such as a cat 5) attached to a
network router or switch that could provide internet connectivity. Typically the
"device" that enables you to access the internet!

* **Power supply:** Use a 5V micro USB power supply to power your Raspberry Pi.
Be careful that whatever power supply you use outputs at least 5V; insufficient
power will cause your Pi to behave in strange ways.

If your laptop does not have an SD card slot, then ensure you have an SD card reader.

# Downloading and verifying the Lepidopter Raspberry Pi image

## Download the Lepidopter image

* [Lepidopter image download]
(https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.zip)

Consider downloading the [xz compressed image]
(https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.xz)
for a significantly reduced file size (ca. 114M smaller) compared to the zip
archive. Note that this will require an extra program to be installed depending
on your OS.

## Verify the Lepidopter image

To verify that the Lepidopter image is the right one, you will need to compare
it with the key that has been signed by us.

### Import the Lepidopter signing key

From OONI web server:

```
gpg --fetch-keys https://get.ooni.torproject.org/lepidopter/lepidopter-signing-key.asc
```

From a keyserver:

```
gpg --keyserver pool.sks-keyservers.net --recv-keys 0xBA56AC5A53E9C7A4
```

For additional security the fingerprint of the Lepidopter Team (signing key) is
published here:

```
pub   4096R/0xBA56AC5A53E9C7A4 2016-05-22
      Key fingerprint = 6255 1196 8E24 0F24 F6CF  D0B6 BA56 AC5A 53E9 C7A4
uid   Lepidopter Team (signing key)
```

### Verify the Lepidopter image

Verify that the compressed image `lepidopter-alpha-armel.img.zip` matches its
signature `lepidopter-alpha-armel.img.zip.asc` by running:

```
gpg -v --verify lepidopter-alpha-armel.img.zip.asc
```

You should look for the message `Good signature from "Lepidopter Team (signing
key)"`:

```
gpg: assuming signed data in `lepidopter-alpha-armel.img.zip'
gpg: Signature made Sun 22 May 2016
gpg:                using RSA key 0xBA56AC5A53E9C7A4
gpg: using PGP trust model
gpg: Good signature from "Lepidopter Team (signing key)"
gpg: binary signature, digest algorithm SHA512

```

If you want to learn more about digital signatures and key verification read
the [documentation]
(https://www.qubes-os.org/doc/verifying-signatures/) from Qubes OS.

# Setting up your Raspberry Pi with Lepidopter

Depending on whether you are a Windows, Linux or Mac OS X user, please refer to
the relevant section of the guide below on how to set up your Raspberry Pi with
Lepidopter.

## Linux users

If you are using Ubuntu and hesitate to use the terminal, you can use **Disk
Image Writer** (graphical interface) to burn the Lepidopter image to an SD card.
Alternatively, you can do this through your terminal.

Below we provide steps on how to burn the Lepidopter image to an SD card via
Disk Image Writer or a terminal.

### Disk Image Writer

**Step 1.** Download the **[Lepidopter
image](https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.zip)**.

**Step 2.** Right-click on the downloaded Lepidopter image and select **[Extract
here]** to extract the image.

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-001.png)

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-002.png)

**Step 3.** Install **Disk Image Writer** from the Ubuntu Software Center.

**Step 4.** Insert your SD card into your SD card reader, and subsequently connect
your SD card reader to your laptop/desktop.

**Step 5.** Right-click on the extracted Lepidopter image and open it with Disk Image Writer.

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-003.png)

**Step 6.** Select your SD card reader within the drop-down menu. 

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-005.png)

**Important:** Ensure you're selecting your SD card reader, as (accidentally)
selecting your hard drive could result in its corruption.

**Step 7.** Click **[Start Restoring...]**. This will copy the Lepidopter image to your SD card. 

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-006.png)

**Step 8.** Click **[Restore]**. 

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-007.png)

**Step 9.** Type in your system password to authenticate this. 

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-008.png)

Wait for the Lepidopter image to burn to your SD card...

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-010.png)

**Step 10.** Eject when it's done. 

![Lepidopter-ubuntu](/lepidopter/lepidopter-lin-011.png)

Now your SD card contains OONI's software! 

**Step 11.** Insert your SD card into the **[MICRO SD CARD]** slot of your Raspberry Pi. 

**Step 12.** Connect your Raspberry Pi to power and to the internet (with an Ethernet cable). 

That's all! From now on, your Raspberry Pi will automatically **run ooniprobe
every day at 6am UTC**. The measurements will be sent directly to OONI's server,
where they will be processed and published on **[OONI
Explorer](https://explorer.ooni.torproject.org/world/)** (generally) within 24
hours.

### Terminal

Please note that the use of the "dd" tool can overwrite any partition of your
machine. If you specify the wrong device in the instructions below you could
delete your primary Linux partition. Please be careful.

**Step 1.** Download the [Lepidopter
image](https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.zip).

**Step 2.** Extract the image:

   `unzip lepidopter-alpha-armel.img.zip`

If you have downloaded the [xz compressed image]
(https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.xz):

   `xz --decompress --verbose --no-sparse lepidopter-alpha-armel.img.zip`

**Step 3.** Run ```df -h``` to see which devices are currently mounted.

**Step 4.** If your computer has a slot for SD cards, insert the card. If not,
insert the card into an SD card reader, then connect the reader to your
computer.

**Step 5.** Run ```df -h``` again. 

The device that wasn't there last time is your SD card. The left column gives
the device name of your SD card. It will be listed as something like
"/dev/mmcblk0p1" or "/dev/sdd1". The last part ("p1" or "1" respectively) is the
partition number, but you want to write to the whole SD card, not just one
partition, so you need to remove that part from the name (getting for example
"/dev/mmcblk0" or "/dev/sdd") as the device for the whole SD card.

**Note:** The SD card can show up more than once in the output of df: in fact it
will if you have previously written a Raspberry Pi image to this SD card,
because the Raspberry Pi SD images have more than one partition.

**Step 6.** Now that you've noted what the device name is, you need to unmount
it so that files can't be read or written to the SD card while you are copying
over the SD image. So run the command below, replacing "/dev/sdd1" with whatever
your SD card's device name is (including the partition number):

    ```     umount /dev/sdd1     ``` 

If your SD card shows up more than once in the output of df due to having
multiple partitions on the SD card, you should unmount all of these partitions.

**Step 7.** In the terminal write the image to the card with this command,
making sure you replace the input file if= argument with the path to your .img
file, and the "/dev/sdd" in the output file of= argument with the right device
name (this is very **important:** you will lose all data on the hard drive on
your computer if you get the wrong device name). Make sure the device name is
the name of the whole SD card as described above, not just a partition of it
(for example, sdd, not sdds1 or sddp1, or mmcblk0 not mmcblk0p1).

    ```     dd bs=4M if=~/lepidopter-alpha-armel.img of=/dev/sdd     ``` 

Please note that block size set to 4M will work most of the time. If not, please try
1M, although 1M will take considerably longer.
    
Note that if you are not logged in as root you will need to prefix this with sudo.
    
The dd command does not give any information of its progress and so may
appear to have frozen. It could take more than five minutes to finish writing
to the card. If your card reader has an LED it may blink during the write
process. To see the progress of the copy operation you can run ```pkill -USR1
-n -x``` dd in another terminal (prefixed with sudo if you are not logged in as
root). The progress will be displayed (perhaps not immediately, due to
buffering) in the original window, not the window with the pkill command.

**Step 8.** As root run the command sync or if a normal user run ```sudo sync```
(this will ensure the write cache is flushed and that it is safe to unmount
your SD card).

**Step 9.** Remove the SD card from your card reader, insert it in the Raspberry
Pi, and have fun!

## Mac OS X users

You can burn the Lepidopter image on your SD card through the following steps:

**Step 1.** Download the **[Lepidopter
image](https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.zip)**.

**Step 2.** Double-click on the downloaded Lepidopter image to extract it.

**Step 3.** Download **[ApplePi-Baker](http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)**.

![ApplePi-Baker window](/lepidopter/ApplePi-Baker.png)

ApplePi-Baker is a free utility that allows you to write an IMG file to an SD
card with only a few simple clicks.

**Step 4.** Insert your SD card into your SD card reader, and subsequently connect
your SD card reader to your laptop/desktop.

**Step 5.** Start ApplePi-Baker.

**Step 6.** Select the Lepidopter IMG file in the Restore Backup section. 

**Step 7. Select your SD card reader (in the Pi-Crust section) as a location to
burn the Lepidopter image to.

**Important:** Ensure you're selecting your SD card reader, as (accidentally)
selecting your hard drive could result in its corruption.

**Step 8.** Click **[Restore Backup]**. 

Wait for the Lepidopter image to burn to your SD card...

**Step 9.** Type in your system password to authenticate this.

**Step 10.** Eject when it's done.

**Step 11.** Insert your SD card into the **[MICRO SD CARD]** slot of your Raspberry Pi. 

**Step 12.** Connect your Raspberry Pi to power and to the internet (with an Ethernet cable). 

That's all! From now on, your Raspberry Pi will automatically **run ooniprobe
every day at 6am UTC**. The measurements will be sent directly to OONI's server,
where they will be processed and published on **[OONI
Explorer](https://explorer.ooni.torproject.org/world/)** (generally) within 24
hours.

### Optimization

In OS X each disk may have two path references in /dev:

* /dev/disk# is a buffered device, which means any data being sent undergoes
  extra processing.

* /dev/rdisk# is a raw path, which is much faster, and perfectly OK when using
  the dd program.

On a Class 4 SD card the difference was around 20 times faster using the rdisk
path.

## Windows users

You can burn the Lepidopter image on your SD card through the following steps:

**Step 1.** Download the **[Lepidopter
image](https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.zip)**.

**Step 2.** Extract the image file from the downloaded .xz file, so you now have
"lepidopter-alpha-armel.img".

**Step 3.** Download
[Win32DiskImager](http://sourceforge.net/projects/win32diskimager/) and
extract the file.

![Win32DiskImager window](/lepidopter/Win32DiskImager.png)

**Step 4.** Insert the SD card into your SD card reader and check what drive
letter it was assigned. You can easily see the drive letter (for example G:)
by looking in the left column of Windows Explorer.

**Step 5.** Run Win32DiskImager. 

You might need to run Win32DiskImager as Administrator. In this case, right-
click on the file, and select 'Run as Administrator'.

**Step 6.** Select the Lepidopter image file that you extracted above.

**Step 7.** Select the drive letter of the SD card in the device box. 

**Important:** Ensure you're selecting your SD card reader, as (accidentally)
selecting your hard drive could result in its corruption. 

**Step 8.** Click **[Write]**.

Wait for the Lepidopter image to burn to your SD card...

**Step 9.** Exit the imager and eject the SD card.

**Step 10.** Insert your SD card into the **[MICRO SD CARD]** slot of your Raspberry Pi. 

**Step 11.** Connect your Raspberry Pi to power and to the internet (with an Ethernet cable). 

That's all! From now on, your Raspberry Pi will automatically **run ooniprobe
every day at 6am UTC**. The measurements will be sent directly to OONI's server,
where they will be processed and published on **[OONI
Explorer](https://explorer.ooni.torproject.org/world/)** (generally) within 24
hours.

**Note:** In Windows, the SD card will appear to only have a fairly small size once
written - about 55 to 75 MB. This is because most of the card has a partition
that is formatted for the Linux operating system that the Raspberry Pi uses
which is not visible in Windows. If you don't see a small directory with files
such as kernel.img then the copy may not have worked correctly.

### Using flashnul (if Win32DiskImager isn't successful)

You might not be able to choose the device in Win32DiskImager on some notebooks,
so this is a different way to achieve the same thing on a Windows machine.

**Step 1.** Download the **[Lepidopter
image](https://get.ooni.torproject.org/lepidopter/lepidopter-alpha-armel.img.zip)**.

**Step 2.** Extract the image file from the downloaded .xz file, so you now have
"lepidopter-alpha-armel.img".

**Step 3.** Download [flashnul](http://shounen.ru/soft/flashnul/index.html).

The English translated version can be found [here]
(http://translate.google.com/translate?hl=en&sl=ru&tl=en&u=http%3A%2F%2Fshounen.ru%2Fsoft%2Fflashnul%2Findex.html)
with a link to instructions (also translated).

**Step 4.** Insert the SD card into your SD card reader and check what drive
letter it was assigned. You can easily see the drive letter (for example G:)
by looking in the left column of Windows Explorer.

**Step 5.** Extract the application from the archive.

**Step 6.** Click Start button > All Programs > Accessories > Command Prompt,
right click on it and Run as Administrator.

**Step 7.** Run flashnul with argument "-p":

   - ```C:\flashnul\flashnul.exe -p```

**Step 8.** Flashnul will tell you something like this (it should be different, as it
   depends on the drives on your machine):

   - Available physical drives:
   - 0       size = 250059350016 (232 Gb)
   - 1       size = 1990197248 (1898 Mb)
   - Available logical disks:
   - C:\
   - D:\
   - E:\
   - F:\
   - Press ENTER to exit.
    
**Step 9.** Use the Load option of flashnul to put the image file on the SD Card.
Make sure that you use the correct drive letter for the SD Card as that drive
will be overwritten!

   - ```C:\flashnul\flashnul.exe E: -L C:\temp\lepidopter-alpha-armel.img```

**Step 10.** Where ```C:\flashnul\flashnul.exe``` is the location of the flashnul
program; E: is the drive you want to overwrite, and C:\temp\lepidopter-alpha-
armel.img is the location of the .img file.

**Step 11.** Flashnul will give you a device summary and a caution message. Check
the information to make sure you have selected the correct device, then type
yes and press enter.

If you get an access denied error, make sure to close all explorer windows or
folders open for the device, then try re-plugging the SD card.

# Sources

* [RPi Easy SD Card Setup](http://elinux.org/RPi_Easy_SD_Card_Setup)
* [Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/)
* [On Digital Signatures and Key Verification]
(https://www.qubes-os.org/doc/verifying-signatures/)