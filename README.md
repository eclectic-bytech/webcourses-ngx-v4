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


## Installation

You must have Oracle's VM VirtualBox and Vagrant installed before continuing.

With the above installed, get the repo onto your machine (download, clone, etc.)  
Run the installer at the root of the project using the `./installer.sh` command. (Use [Windows GitBash](https://gitforwindows.org/) command line if on that OS - Windows' command line will not work.)

Add the following binding to your DNS settings:  
> `192.168.56.56        homestead.test`

Access WNGX by going to http://homestead.test. Start by clicking the Register link in the upper right corner.


## Introduction

Online web course platform. Public release still not ready for production systems.
  
  


## Laravel & Angular combo

Angular source files are in `/resources/frontend/webcourses`. They're served via Laravel's AngularController +Blade.

To recompile the Angular source code, run `npm run-script build:prod` in `/resources/frontend/webcourses/app/src`.
