---
layout: cheatsheet
header: Git
title: Git Cheatsheet
description: Git sheet with common tasks, commands and information to help manage version control with git.
cheats:
  - title: Fundamental Concepts
    column: 1
    snippets:
      - text: "<strong>Working Tree</strong>: The working tree is a single checkout of one version of the project. These files are pulled out of the compressed database in the Git directory and placed on disk to use or modify them."
      - text: "<strong>Staging Area (Index)</strong>: The staging area is a file, generally contained in your Git directory, that stores information about what will go into your next commit. Its technical name in Git parlance is the 'index'."
      - text: "<strong>Git Directory (Repository)</strong>: The Git directory is where Git stores the metadata and object database for your project. It is what is copied when you clone a repository from another computer."

  - title: Git configuration
    column: 1
    snippets:
      - text: "The Git configuration file contains a number of variables that affect the Git commands' behavior. The <code>.git/config</code> file in each repository is used to store the configuration for that repository, and <code>$HOME/.gitconfig</code> is used to store a per-user configuration as fallback values for the <code>.git/config</code> file. The file <code>/etc/gitconfig</code> can be used to store a system-wide default configuration."
      - text: "Each configuration file consists of sections and variables. A section and subsection is marked as follows:"
        code: '[section "subsection"]'
      - text: "In order to modify a system wide variable (system), a user variable (global) or a project specific variable, use the following command:"
        class: bash
        code: "git config [--system|--global] &lt;variable&gt; &lt;value&gt;"
      - text: "Variables use the notation <code>&lt;section&gt;&lt;subsection&gt;&lt;variable&gt;</code>. See <a href='https://git-scm.com/docs/git-config'>variables</a> to find the possible git configuration settings."
        code: |
          # set user email and name
          git config --global user.email &lt;email_address&gt;
          git config --global user.name &lt;user_name&gt;

  - title: Delete a local commit on master not pushed to origin yet
    column: 1
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
    column: 1
    snippets:
      - text: 'Set the current branch head (HEAD) to -3 commits and push to origin'
        class: bash
        code: |
          # reset hard and go back 3 commits
          git reset --hard HEAD~3
          # force push to origin
          git push --force

  - title: 'Git log'
    column: 2
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
    column: 2
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
    column: 2
    snippets:
      - text: 'Options for diff'
        class: bash
        code: |
          # Compare current working tree to index
          git diff
          # Compare current working tree to HEAD
          git diff HEAD
          # Compare two commits
          git diff &lt;commit&gt; &lt;commit&gt;
          # Show only summary of diff
          git diff --summary

---

