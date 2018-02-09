---
layout: default
header: Docker
title: Docker Cheatsheet
description: Docker sheet with common tasks, commands and information to help managing docker containers, images, volumes, etc.
---

## Useful Commands

Remove all images:

    docker rmi $(docker images -q)

Stop and remove all containers:

    docker stop $(docker ps -a -q)
    docker rm $(docker ps -a -q)

Remove all volumes:

    docker volume rm $(docker volume ls |awk '{print $2}')

Connect to a shell in a docker image:

    docker run -it --entrypoint /bin/bash <IMAGE>

Connect to a shell in a running docker container container:

    sudo docker exec -i -t <CONTAINER_NAME> /bin/bash

Open Shell on VM (On a Mac):

    screen ~/Library/Containers/com.docker.docker/Data/com.docker.driver.amd64-linux/tty

Save the image:

    docker save your/image > /home/you/some-file.tar

Restore the image:

    docker load < /home/you/some-file.tar

Docker prune commands:
    
    docker container prune
    docker image prune
    docker network prune
    docker volume prune
