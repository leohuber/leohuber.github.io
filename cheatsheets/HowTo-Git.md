---
layout: post
title: Blogging Like a Hacker
---

## Tips and Tricks

Delete a local commit on master not pushed to origin yet

    git checkout SNAPSHOT
    git branch -D master
    git checkout origin/master -b master

Rebase