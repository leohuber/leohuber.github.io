---
layout: cheatsheet
header: Git
title: Git Cheatsheet
description: Git sheet with common tasks, commands and information to help manage version control with git.
cheats:
  - title: Git configuration
    snippets:
      - text: "There is a global git configuration located in <code>~/.gitconfig</code> and a per project configuration located at <code>&lt;project-path&gt;/.git/config</code>. In order to change the global config edit the corresponding file use the following command"
        class: bash
        code: "git config --global &lt;config_setting&gt; &lt;config_value&gt;"
      - text: "In order to change the per project configuration, navigate into the project directory and use the following command"
        class: bash
        code: "git config &lt;config_setting&gt; &lt;config_value&gt;"
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

  - title: 'Git difftool'
    snippets:
      - text: 'Options for difftool. Git difftool is a frontend to <code>git diff</code> and accepts the same options and arguments.'
        class: bash
        code: |
          # Diff all the changed files in the repo directory (one by one)
          git difftool
          # Diff the repo directory
          git difftool --dir-diff
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

  - title: 'Git diff'
    snippets:
      - text: 'Options for diff'
        class: bash
        code: |
          # Compare two commits
          git diff &lt;commit&gt; &lt;commit&gt;
          # Show only summary of diff
          git diff --summary

---

