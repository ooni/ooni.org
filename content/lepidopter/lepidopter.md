---
date: "2015-09-15"
title: "Lepidopter Installation: Help Guides and Resources"
description: "Helpful resources and guides for getting started with Lepidopter
Raspberry Pi image"
tags: [ "lepidopter", "image", "raspberry pi" ]
---

# Lepidopter quick start guide

This guide aims to provide documentation about the Lepidopter a Raspberry Image
with OONI super powers based on Debain jessie. The code of the image as well as
the build script can be found in the [git
repository](https://github.com/TheTorProject/lepidopter).
Some compact documentation on how to install, build, copy to SD card and run
Lepidopter in QEMU is described
[here](https://github.com/TheTorProject/lepidopter/blob/master/README.md).

## Download Lepidopter Raspberry Pi image
Lepidopter Raspberry Pi image is compatible with all types of Raspberry Pi
(tested: B+, RPi 1 model B, RPi 2 model B). [Lepidopter image download]()

## Verify Lepidopter Raspberry Pi image

XXX: TODO

# Requirements

- Raspberry Pi

- SD Card
We recommend a 4GB (minimum size) class 4 or higher SD card.

- Internet access
A standard Ethernet cable (such as a cat 5) attached to a network router or
switch that could provide Internet connectivity. Typically the "device" that
enables you to access the Internet!

- Power supply
Use a 5V micro USB power supply to power your Raspberry Pi. Be careful that
whatever power supply you use outputs at least 5V; insufficient power will
cause your Pi to behave in strange ways.

# Lepidopter Image to SD Card under Linux

## Using ImageWriter (graphical interface)

If you are using Ubuntu and hesitate to use the terminal, you can use the
ImageWriter tool (nice graphical user interface) to write the .img file to the
SD card.

0. Assuming that you have downloaded already Lepidopter image if not you
   should first [Download Lepidopter Raspberry Pi image]
({{<ref "#Download Lepidopter Raspberry Pi image" >}})
1. Right click the archive file and select "Extract here"
2. Insert the SD card into your computer or connect the SD card reader with the
   SD card inside
3. Install the ImageWriter tool from the Ubuntu Software Center
4. Launch the ImageWriter tool (it needs your administrative password)
5. Select the image file (example lepidopter.img) to be written to the SD card
   (note: because you started ImageWriter as administrator the starting point
when selecting the image file is the administrator's home folder so you need to
change to your own home folder to select the image file)
6. Select the target device to write the image to (your device will be
   something like "/dev/mmcblk0" or "/dev/sdc")
7. Click the "Write to device" button
8. Wait for the process to finish and then insert the SD card in the Raspberry
   Pi

## Using the command line

Please note that the use of the "dd" tool can overwrite any partition of your
machine. If you specify the wrong device in the instructions below you could
delete your primary Linux partition. Please be careful.

0. Assuming that you have downloaded already Lepidopter image if not you
   should first [Download Lepidopter Raspberry Pi image]
({{<ref "#Download Lepidopter Raspberry Pi image" >}})
1. Extract the image, with:
   ```xz --decompress ~/lepidopter.zip```
2. Run ```df -h``` to see what devices are currently mounted
3. If your computer has a slot for SD cards, insert the card. If not, insert
   the card into an SD card reader, then connect the reader to your computer.
4. Run ```df -h``` again. The device that wasn't there last time is your SD
   card. The left column gives the device name of your SD card. It will be
listed as something like "/dev/mmcblk0p1" or "/dev/sdd1". The last part ("p1"
or "1" respectively) is the partition number, but you want to write to the
whole SD card, not just one partition, so you need to remove that part from the
name (getting for example "/dev/mmcblk0" or "/dev/sdd") as the device for the
whole SD card. Note that the SD card can show up more than once in the output
of df: in fact it will if you have previously written a Raspberry Pi image to
this SD card, because the Raspberry Pi SD images have more than one partition.
5. Now that you've noted what the device name is, you need to unmount it so
   that files can't be read or written to the SD card while you are copying
over the SD image. So run the command below, replacing "/dev/sdd1" with
whatever your SD card's device name is (including the partition number)
    ```
    umount /dev/sdd1
    ```
    If your SD card shows up more than once in the output of df due to having
multiple partitions on the SD card, you should unmount all of these partitions.
6. In the terminal write the image to the card with this command, making sure
   you replace the input file if= argument with the path to your .img file, and
the
"/dev/sdd" in the output file of= argument with the right device name (this is
very important: you will lose all data on the hard drive on your computer if
you get the wrong device name). Make sure the device name is the name of the
whole SD card as described above, not just a partition of it (for example, sdd,
not sdds1 or sddp1, or mmcblk0 not mmcblk0p1)
    ```
    dd bs=4M if=~/lepidopter.img of=/dev/sdd
    ```
	Please note that block size set to 4M will work most of the time, if
not, please try 1M, although 1M will take considerably longer.
    Note that if you are not logged in as root you will need to prefix this
with sudo.
    The dd command does not give any information of its progress and so may
appear to have frozen. It could take more than five minutes to finish writing
to the card. If your card reader has an LED it may blink during the write
process. To see the progress of the copy operation you can run ```pkill -USR1
-n -x``` dd in another terminal (prefixed with sudo if you are not logged in as
root). The progress will be displayed (perhaps not immediately, due to
buffering) in the original window, not the window with the pkill command.
7. As root run the command sync or if a normal user run ```sudo sync``` (this
   will ensure the write cache is flushed and that it is safe to unmount your
SD card).
8. Remove SD card from card reader, insert it in the Raspberry Pi, and have
   fun!

# Lepidopter Image to SD Card under MacOS X
**Note**: In OS X each disk may have two path references in /dev:

* /dev/disk# is a buffered device, which means any data being sent undergoes
  extra processing.
* /dev/rdisk# is a raw path, which is much faster, and perfectly OK when using
  the dd program.

On a Class 4 SD card the difference was around 20 times faster using the rdisk
path.

## Run an App (Only with graphical interface)

### Pi Filler 
[Pi Filler](http://ivanx.com/raspberrypi) a simple tool for copying a Raspberry
Pi operating system image file to an SD card, or restoring an SD card backup
created by Pi Copier. Version 1.3 is about 5x faster than previous versions and
can write a full card in 5-7 minutes. Pi Filler automatically identfies your SD
card (and asks for confirmation to prevent any chance of the wrong disk being
written to), and shows estimated time remaining during the copy. After it's
done, if your Raspberry Pi is not connected to a display, you can use Pi Finder
to locate it on your network and log in from Terminal. These utilities are
written in AppleScript and Bash, are compatible with OS X 10.6 Snow Leopard
through 10.10 Yosemite, and include source code.

### RPi-sd card builder
The [RPi-sd
card](http://alltheware.wordpress.com/2012/12/11/easiest-way-sd-card-setup/)
builder utility is an application which will walk you through the process of
installing to SD card. Note: This is a closed source application which requires
your root password.

### ApplePi-Baker
![ApplePi-Baker window](/help/ApplePi-Baker.png)

[ApplePi-Baker]
(http://www.tweaking4all.com/hardware/raspberry-pi/macosx-apple-pi-baker/)
A free utility that allows you to create a NOOBS SD, write an IMG file to SD
card, or backup an SD card to IMG, with only a few simple clicks. This is also
a closed source application and also requires your root password to write to SD
cards. The application is written in Lazarus Pascal and supports Retina.

### PiWriter
[PiWriter](http://sourceforge.net/projects/piwriter/) a simple wizard made
using shell scripts, PlatyPus and CocoaDialog. To prevent
users from making mistakes the wizard auto-detect's the SD card you plan to use
and prevents you from selecting your system disk. Also there is no need for a
root password so even less damage can be done. The nextgen PiWriter2 introduces
a new 'drag and drop' approach and also includes a backup feature. PiWriter
1.0.4 does not work on Mac OS X Mavericks.

* Watch the 1.x quick review [video](http://vimeo.com/62083666)
* Watch full OS X HOWTO [video](http://www.youtube.com/watch?v=PIvNxprbDhQ)
  using PiWriter 1.x By: Bruce Fulton

### Using system tools (mostly graphical interface)

0. Assuming that you have downloaded already Lepidopter image if not you
   should first [Download Lepidopter Raspberry Pi image]
({{<ref "#Download Lepidopter Raspberry Pi image" >}})
1. Extract the image by double clicking on the download file.
2. Connect the SD card reader with the SD card inside; note: must be formatted
   in FAT32!
3. From the Apple menu, choose About This Mac, then click on More info...; if
   you are using Mac OS X 10.8.x Mountain Lion then click on System report.
4. Click on USB (or Card Reader if using an in-built SD card reader) then
   search for your SD card in the upper right section of the window; click it,
then search for BSD name in the lower right section: must be something like
diskn where n is a number (for example, disk4). Note this number.
5. Unmount the partition so that you will be allowed to overwrite the disk by
   opening Disk Utility and unmounting it (do not eject it, or you have to
reconnect it). Note: On Mac OS X 10.8.x Mountain Lion, "Verify Disk" (before
unmounting) will display the BSD name as "/dev/disk1s1" (or similar), allowing
you to skip the previous two steps.
6. From the Terminal run:
  - ```sudo dd if=path_of_your_image.img of=/dev/diskn bs=1M```
  - Remember to replace n with the number that you noted before!
7. Wait a LONG time! (or see the note above about using /dev/rdisk#...) To see
   the current status, send SIGINFO signal by pressing Ctrl+T.
8. You're done! Insert it in the Raspberry Pi, and have fun.

# Lepidopter Image to SD Card under Windows

## Using the Win32DiskImager program
![Win32DiskImager window](/help/Win32DiskImager.png)

0. Assuming that you have downloaded already Lepidopter image if not you
   should first [Download Lepidopter Raspberry Pi image]
({{<ref "#Download Lepidopter Raspberry Pi image" >}})
1. Extract the image file from the downloaded .xz file, so you now have
   "lepidopter.img".
2. Insert the SD card into your SD card reader and check what drive letter it
   was assigned. You can easily see the drive letter (for example G:) by
looking in the left column of Windows Explorer. You can use the SD Card slot
(if you have one) or a cheap Adapter in a USB slot.
3. Download the Win32DiskImager utility (it is also a zip file). You can run
   this from a USB drive.  Win32DiskImager screen
4. Extract the executable from the zip file and run the Win32DiskImager
   utility; you may need to run the utility as Administrator! Right-click on
the file, and select 'Run as Administrator'
5. Select the image file you extracted above.
6. Select the drive letter of the SD card in the device box. **Be careful to
   select the correct drive**; if you get the wrong one you can destroy your
data on the computer's hard disk! If you are using an SD Card slot in your
computer (if you have one) and can't see the drive in the Win32DiskImager
window, try using a cheap Adapter in a USB slot.
7. Click Write and wait for the write to complete.
8. Exit the imager and eject the SD card.
9. You are now ready to plug the card into your Raspberry Pi.

**Note**:
In Windows, the SD card will appear only to have a fairly small size once
written - about 55 to 75 MB. This is because most of the card has a partition
that is formatted for the Linux operating system that the Raspberry Pi uses
which is not visible in Windows. If you don't see this small directory with
files such as kernel.img then the copy may not have worked correctly.

## Using flashnul (if Win32DiskImager isn't successful)

You may not be able to choose the device in Win32DiskImager on some notebooks
so this is a different way to achieve the same thing on a Windows machine.

0. Assuming that you have downloaded already Lepidopter image if not you
   should first [Download Lepidopter Raspberry Pi image]
({{<ref "#Download Lepidopter Raspberry Pi image" >}})
1. Extract the image file from the downloaded .xz file, so you now have
   "lepidopter.img".
2. Insert the SD card into your SD card reader and check what drive letter it
   was assigned. You can easily see the drive letter (for example G:) by
looking in the left column of Windows Explorer. You can use an SD Card slot in
your computer (if you have one) or a cheap Adapter in a USB slot.
3. Download the flashnul [software](http://shounen.ru/soft/flashnul/index.html)
   ; here is the English [Translated version]
(http://translate.google.com/translate?hl=en&sl=ru&tl=en&u=http%3A%2F%2Fshounen.ru%2Fsoft%2Fflashnul%2Findex.html)
with a link to instructions (also translated).
4. Download the latest version. At the time of writing it was flashnul-1rc1.
5. Extract the application from the archive.
6. Click Start button > All Programs > Accessories > Command Prompt, right
   click on it and Run as Administrator.
7. Run flashnul with argument "-p":
   - ```C:\flashnul\flashnul.exe -p```

8. Flashnul will tell you something like this (it should be different, as it
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
    
9. Use the Load option of flashnul to put the image file on the SD Card. Make
   sure that you use the correct drive letter for the SD Card as that drive
will be overwritten!

   - ```C:\flashnul\flashnul.exe E: -L C:\temp\lepidopter.img```

10. Where ```C:\flashnul\flashnul.exe``` is the location of the flashnul
    program; E: is the drive you want to overwrite, and C:\temp\lepidopter.img
is the location of the .img file.

11. Flashnul will give you a device summary and a caution message. Check the
    information to make sure you have selected the correct device, then type
yes and press enter. If you get an access denied error, make sure to close all
explorer windows or folders open for the device, then try re-plugging the SD
card.

# Sources
* [RPi Easy SD Card Setup](http://elinux.org/RPi_Easy_SD_Card_Setup)
* [Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/)
