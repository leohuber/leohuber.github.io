---
layout: cheatsheet
header: Git
title: Git Cheatsheet
description: Git sheet with common tasks, commands and information to help manage version control with git.
cheats:
  - title: Delete a local commit on master not pushed to origin yet
    snippets:
      - class: bash
        code: |
          # switch branch
          git checkout SNAPSHOT
          # delete local master branch
          git branch -D master
          # checkout master branch from origin
          git checkout origin/master -b master

  - title: 'Set the current branch head (HEAD) to -3 commits'
    snippets:
      - text: 'Set the current branch head (HEAD) to -3 commits and push to origin'
        class: bash
        code: |
          # reset hard and go back 3 commits
          git reset --hard HEAD~3
          # force push to origin
          git push --force

  - title: 'Git diff'
    snippets:
      - text: 'Options for diff and difftool'
        class: bash
        code: |
          # Diff the repo directory
          git difftool --dir-diff
          # Diff all the changed files in the repo directory (one by one)
          git difftool
      - text: '.gitconfig Options for difftool and mergetool'
        code: |
          [diff]
                  tool = araxis
          [difftool]
                  prompt = false
          [merge]
                  tool = araxis
          [mergetool]
                  prompt = false


  - title: 'Git log'
    snippets:
      - text: 'Formatting log output'
        class: bash
        code: |
          # Oneline
          git log --oneline
          # Decorated with references, branches, etc
          git log --oneline --decorate
          # Graphs
          git log --graph --oneline --decorate
---
