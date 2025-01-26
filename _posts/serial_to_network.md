---
title: Socat and Ser2net
date: 2025-1-23
---
# Goal

Working with two radio modules, I needed a way to send data from one to the other. These modules run linux.
I'm able to ping each other. Sending data over IP also works.

These devices each have serial interfaces, which can receive data via UART, from say a microcontroller. The goal then is to send the microcontroller data from one radio to anothe.
# Tools

- socat
    - socat binds a local port to a remote host:port
    - `socat -d -d -d tcp-listen:1234,reuseaddr,fork file:/dev/ttyUSB0`
- ser2net
    - ser2net creates a bridge between a local serial port and a network connection, enabling bi-directional communication. It can both:
        - Send data from the network to the serial port
        - Send data from the serial port to the network
    - `ser2net -c 1234:telnet:192.168.1.100:1234`


