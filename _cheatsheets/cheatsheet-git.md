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
      - text: "<strong>Commit</strong>: With Git, every time you commit, or save the state of your project, Git basically takes a picture of what all your files look like at that moment and stores a reference to that snapshot."
      - text: "<strong>Tags</strong>: Git has the ability to tag specific points in history (commits) with a name so that they can be more easily be referenced later on."
      - text: "<strong>Branch</strong>: Branches lay in the core of git and are just a named pointer to particular commit, exactly as lightweight tag! It does’t have it’s own sha, it’s just an alias. Main difference from tag, is that it will move as you add commits, allowing you to use same alias for latest state of your work."
      - text: "<strong>HEAD</strong>: HEAD is synthetic branch, that always points to the currently checked out revision. If there is no underlying branch, i.e. if you checkout hash, tag, or even stash entry, you will end up in so-called detached HEAD state."

  - title: Git internal objects
    column: 1
    snippets:
      - text: 'TODO <a href="https://git-scm.com/book/en/v2/Git-Internals-Git-Objects">Git Objects</a>'

  - title: 'Git revision parameters'
    column: 1
    snippets:
      - text: 'A revision parameter <rev> typically, but not necessarily, names a commit object. It uses what is called an extended SHA-1 syntax. Here are various ways to spell object names. The ones listed near the end of this list names trees and blobs contained in a commit. See <a href="https://git-scm.com/docs/gitrevisions/">Git Revision</a> for more details.'
        code: |
          TODO: LIST EXAMPLES

  - title: 'Git tags'
    column: 1
    snippets:
      - text: "<strong>Lightweight tag</strong> is a named pointer to existing commit. Just like an alias to existing commit."
        code: |
          # Create a lightweight tag
          git tag version_141
      - text: "There is also an <strong>annotated tag</strong> which has metadata and its own sha-code."
        code: |
          # Create an annotaded tag
          git tag -a version_141

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

  - title: 'Git checkout'
    column: 2
    snippets:
      - text: 'Command to switch branches or restore working tree files'
        class: bash
        code: |
          # Create new branch and point HEAD at the branch
          git checkout -b &lt;branch&gt;
          # Checkout branch and perform 3-way merge with local changes
          git checkout -m &lt;branch&gt;
          # Revert changes to a file
          git checkout -- &lt;file&gt;

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

  - title: Git configuration
    column: 2
    snippets:
      - text: "The Git configuration file contains a number of variables that affect the Git commands' behavior. The <code>.git/config</code> file in each repository is used to store the configuration for that repository, and <code>$HOME/.gitconfig</code> is used to store a per-user configuration as fallback values for the <code>.git/config</code> file. The file <code>/etc/gitconfig</code> can be used to store a system-wide default configuration."
      - text: "Each configuration file consists of sections and variables. A section and subsection is marked as follows:"
        code: '[section "subsection"]'
      - text: "In order to modify a system wide variable (system), a user variable (global) or a project specific variable, use the following command:"
        class: bash
        code: "git config [--system|--global] &lt;variable&gt; &lt;value&gt;"
      - text: "Variables use the notation <code>&lt;section&gt;.&lt;subsection&gt;.&lt;variable&gt;</code>. See <a href='https://git-scm.com/docs/git-config'>variables</a> to find the possible git configuration settings."
        code: |
          # set user email and name
          git config --global user.email &lt;email_address&gt;
          git config --global user.name &lt;user_name&gt;

---

