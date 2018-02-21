---
layout: cheatsheet
header: Shell
title: Shell Cheatsheet
description: Shell sheet with common tasks, commands and helpful information to handle the shell
cheats:
  - title: Shell history
    snippets:
      - text: 'To get previous command containing string, hit [CTRL]+[r] followed by search string (Emacs Line-Edit Mode):'
        class: bash
        code: '(reverse-i-search):'
      - text: 'To get previous command, hit [CTRL]+[p]. You can also use up arrow key. To get next command, hit [CTRL]+[n]. You can also use down arrow key.'
      - text: 'Shell history command'
        code: |
          # print the whole history
          history
          # show the last 10 entries of the current history with command numbers
          history 30
          # delete the entire history
          history -c
      - text: List, or edit and re-execute, commands previously entered with fc
        code: |
          # edit and re-xecute last command
          fc
          # edit and re-xecute without invoking editor
          fc -s
          # list last 16 commands
          fc -l
          # list the last 30 commands
          fc -l -30
          # suppress command numnbers
          fc -ln -30
          # list command with number 500 to command with number 510
          fc -l 500 510
          # list command with number 510 to command with number 500 (version 1)
          fc -l 510 500
          # list command with number 510 to command with number 500 (version 2)
          fc -lr 500 510
          # edit and re-execute comand with number 500 without invoking editor
          fc -s 500
          # edit and re-execute comands 500 through 510
          fc 500 510

  - title: Configuration
    snippets:
      - text: "Login Shell vs Non-Login Shell: When you login (type username and password) via console, either sitting at the machine, or remotely via ssh: <code>.bash_profile</code> is executed to configure your shell before the initial command prompt."
      - text: "But, if you’ve already logged into your machine and open a new terminal window (xterm) inside Gnome or KDE, then .bashrc is executed before the window command prompt. <code>.bashrc</code> is also run when you start a new bash instance by typing <code>/bin/bash</code> in a terminal."
      - text: "An exception to the terminal window guidelines is Mac OS X’s Terminal.app, which runs a login shell by default for each new terminal window, calling .bash_profile instead of <code>.bashrc</code>. Other GUI terminal emulators may do the same, but most tend not to."
      - text: "Most of the time you don’t want to maintain two separate config files for login and non-login shells — when you set a PATH, you want it to apply to both. You can fix this by sourcing <code>.bashrc</code> from your <code>.bash_profile</code> file, then putting <code>PATH</code> and common settings in <code>.bashrc</code>"
      - code: |
          if [ -f ~/.bashrc ]; then
             source ~/.bashrc
          fi
---