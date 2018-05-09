---
layout: cheatsheet
header: Docker
title: Docker Cheatsheet
description: Docker sheet with common tasks, commands and information to help managing docker containers, images, volumes, etc.
cheats:
  - title: Docker cleanup and housekeeping
    column: 1
    snippets:
      - text: Remove dangling/unused images
        class: bash
        code: |
          # Remove all dangling images
          docker images prune
          # Remove all unused images
          docker images prune -a
      - text: Remove stopped containers
        class: bash
        code: |
          # Remove all stopped containers
          docker container prune
      - text: Remove unused volumes
        class: bash
        code: |
          # Remove all unused local volumes
          docker volume prune
      - text: Remove unused networks
        class: bash
        code: |
          # Remove all unused networks
          docker network prune

  - title: Stop all containers
    column: 1
    snippets:
      - text: Stop all containers
        class: bash
        code: |
          # list all container ids
          containers=$(docker ps -a -q)
          # stop all containers
          docker stop $containers
      - text: One command
        class: bash
        code: docker stop $(docker ps -a -q)

  - title: Connect to a shell in a docker image or container
    column: 2
    snippets:
      - class: bash
        code: |
          # connect to a shell of an image with id &lt;IMAGE_ID&gt;
          docker run -it --entrypoint /bin/bash &lt;IMAGE_ID&gt;
          # connect to a shell of a container with id &lt;CONTAINER_ID&gt;
          docker exec -i -t &lt;CONTAINER_ID&gt; /bin/bash

  - title: Open Shell on VM
    column: 2
    snippets:
      - text: On Linux Docker directly runs on the native OS kernel. However on Mac OS X and Windows a virtual machine is used in order to run the docker engine on top of a virtualised Linux kernel.
      - text: Docker for Mac (not docker-machine) uses <a href="https://github.com/moby/hyperkit">HyperKit</a> for the virtualization
        class: bash
        code: |
          # Open a shell on HyperKit vm
          screen ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty


  - title: Save or restore an image
    column: 2
    snippets:
      - text: Save an image
        class: bash
        code: docker save your/image &gt; /home/you/some-file.tar
      - text: Restore an image
        class: bash
        code: docker load &lt; /home/you/some-file.tar

---