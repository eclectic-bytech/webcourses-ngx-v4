```

oooooo   oooooo     oooo ooooo      ooo   .oooooo.    ooooooo  ooooo            .o   
 `888.    `888.     .8'  `888b.     `8'  d8P'  `Y8b    `8888    d8'           .d88   
  `888.   .8888.   .8'    8 `88b.    8  888              Y888..8P           .d'888   
   `888  .8'`888. .8'     8   `88b.  8  888               `8888'          .d'  888   
    `888.8'  `888.8'      8     `88b.8  888     ooooo    .8PY888.         88ooo888oo 
     `888'    `888'       8       `888  `88.    .88'    d8'  `888b             888   
      `8'      `8'       o8o        `8   `Y8bood8P'   o888o  o88888o          o888o  
  
```

## Tuesday, January 18

The master branch now contains an installer that'll fire up the platform in a virtual box. 🚀


## Pre-requisites

- [Oracle VM VirtualBox](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/vmware/downloads)
- [Composer](https://getcomposer.org/)
- Bash

Under Windows, GitBash from [Git for Windows](https://gitforwindows.org/) and [Cygwin](https://www.cygwin.com/) should do nicely. This is where you need to run the installer.sh mentioned in the Installation section below.

## Installation

Get the repo onto your machine using your prefered method, e.g. fork, clone, download, retype...  
Run the installer at the root of the project by using the `./installer.sh` command.  

Add the following binding to your DNS settings:  
> `192.168.56.56        homestead.test`

Access WNGX by going to http://homestead.test. Start by clicking the Register link in the upper right corner.


## About

Online web course platform. Public release still not ready for production systems.
  
  


## Laravel & Angular combo

Angular source files are in `/resources/frontend/webcourses`. They're served via Laravel's AngularController +Blade.

To recompile the Angular source code, run `npm run-script build:prod` in `/resources/frontend/webcourses/app/src`.
