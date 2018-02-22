---
layout: cheatsheet
header: Docker
title: Docker Cheatsheet
description: Docker sheet with common tasks, commands and information to help managing docker containers, images, volumes, etc.
cheats:
  - title: Remove all images
    snippets:
      - text: Remove all images
        class: bash
        code: |
          # list all image ids
          images=$(docker images -q)
          # delete images
          docker rmi $images
      - text: One command
        code: docker rmi $(docker images -q)

  - title: Stop and remove all containers
    snippets:
      - text: Stop all containers
        class: bash
        code: |
          # list all container ids
          containers=$(docker ps -a -q)
          # stop all containers
          docker stop $containers
      - text: Remove all containers
        code: docker rm $(docker ps -a -q)

  - title: Remove all volumes
    snippets:
      - class: bash
        code: |
          # remove all volumes
          docker volume rm $(docker volume ls | awk '{print $2}')


  - title: Connect to a shell in a docker image
    snippets:
      - class: bash
        code: |
          # connect to a shell of an image with id &lt;IMAGE_ID&gt;
          docker run -it --entrypoint /bin/bash &lt;IMAGE_ID&gt;

  - title: Connect to a shell in a docker container
    snippets:
      - class: bash
        code: |
          # connect to a shell of a container with id &lt;CONTAINER_ID&gt;
          sudo docker exec -i -t &lt;CONTAINER_ID&gt; /bin/bash


  - title: Open Shell on VM (On a Mac)
    snippets:
      - class: bash
        code: screen ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty

  - title: Save an image
    snippets:
      - class: bash
        code: docker save your/image &gt; /home/you/some-file.tar

  - title: Restore an image
    snippets:
      - class: bash
        code: docker load &lt; /home/you/some-file.tar

  - title: Docker prune commands
    snippets:
      - class: bash
        code: |
          docker container prune
          docker image prune
          docker network prune
          docker volume prune
---