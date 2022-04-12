```

oooooo   oooooo     oooo ooooo      ooo   .oooooo.    ooooooo  ooooo            .o   
 `888.    `888.     .8'  `888b.     `8'  d8P'  `Y8b    `8888    d8'           .d88   
  `888.   .8888.   .8'    8 `88b.    8  888              Y888..8P           .d'888   
   `888  .8'`888. .8'     8   `88b.  8  888               `8888'          .d'  888   
    `888.8'  `888.8'      8     `88b.8  888     ooooo    .8PY888.         88ooo888oo 
     `888'    `888'       8       `888  `88.    .88'    d8'  `888b             888   
      `8'      `8'       o8o        `8   `Y8bood8P'   o888o  o88888o          o888o  

Everyone is encouraged to contribute, while we ensure high and professional quality.
=======
  
```

## Homestead Branch (January 2022)


## Tuesday, January 18

The master branch now contains an installer that'll fire up the platform in a virtual box. 🚀

The homstead branch is now capable of hosting itself through creating a virtual machine using Vagrant. Several additional steps are required to initialise Laravel and Angular, and for that reason the branch is still limited in utility.

Since it takes a WNGX tech only 3-5 minutes to get the system up and running, I expect that by month's end all steps will be done by script, or eliminated.

Thanks to Collier for starting work for making WNGX installable via Composer. We look forward to bringing this option to techs not versed in or wishing to avoid Git.




## Pre-requisites

- [Oracle VM VirtualBox](https://www.virtualbox.org/)
- [Vagrant](https://www.vagrantup.com/vmware/downloads)
- [Composer](https://getcomposer.org/)
- Bash

Under Windows, GitBash from [Git for Windows](https://gitforwindows.org/) or [Cygwin](https://www.cygwin.com/)'s bash should do nicely.  
This is where you need to run the installer.sh mentioned in the Installation section below.

## Installation

Get the repo onto your machine using your prefered method, e.g. fork, clone, download, retype...  
Run the installer at the root of the project by using the `./installer.sh` command.  

Add the following binding to your DNS settings:  
> `192.168.56.56        homestead.test`

From the project folder, you can now run `vagrant up` to start the virtual machine.  
You should see it in the Oracle VM GUI, first as idle, and then as running once you've ran the command.  
Use `vagrant halt` to stop the server.

Access WNGX by going to http://homestead.test.  
Start by clicking the Register link in the upper right corner.

## Demo

We've a video and interactive demo.  
Access is available from https://www.webcourses.io/demo.

## About

Online web course platform. Public release still not ready for production systems.
  
  


## Laravel & Angular combo

Angular source files are in `/resources/frontend/webcourses`. They're served via Laravel's AngularController +Blade.

To recompile the Angular source code, run `npm run-script build:prod` in `/resources/frontend/webcourses/app/src`.
