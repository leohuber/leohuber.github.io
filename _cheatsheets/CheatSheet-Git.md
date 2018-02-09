---
layout: default
header: Git
title: Git Cheatsheet
description: Git sheet with common tasks, commands and information to help manage version control with git.
---

## Tips and Tricks

Delete a local commit on master not pushed to origin yet

    git checkout SNAPSHOT
    git branch -D master
    git checkout origin/master -b master

Rebase