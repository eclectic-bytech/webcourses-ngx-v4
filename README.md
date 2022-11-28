```

oooooo   oooooo     oooo ooooo      ooo   .oooooo.    ooooooo  ooooo            .o   
 `888.    `888.     .8'  `888b.     `8'  d8P'  `Y8b    `8888    d8'           .d88   
  `888.   .8888.   .8'    8 `88b.    8  888              Y888..8P           .d'888   
   `888  .8'`888. .8'     8   `88b.  8  888               `8888'          .d'  888   
    `888.8'  `888.8'      8     `88b.8  888     ooooo    .8PY888.         88ooo888oo 
     `888'    `888'       8       `888  `88.    .88'    d8'  `888b             888   
      `8'      `8'       o8o        `8   `Y8bood8P'   o888o  o88888o          o888o  
      
  
```

[![Build Angular](https://github.com/eclectic-bytech/webcourses-ngx-v4/actions/workflows/main.yml/badge.svg)](https://github.com/eclectic-bytech/webcourses-ngx-v4/actions/workflows/main.yml)

Everyone is encouraged to contribute, while we ensure high and professional quality.

## Documentation

We've now a proper [wiki with documentation](https://github.com/eclectic-bytech/webcourses-ngx-v4/wiki), and some content that was originally here has now been moved there.

## Bytech officially welcomes Collier to the WNGX team and contributors circle

Super thanks to Collier (mrshychip), and his continued interest in and contributions to the Open Webcourses platform.


## Installation

Get the repo onto your machine using your prefered method, e.g. fork, clone, download, retype...  
Run the installer at the root of the project by using the `./installer.sh` command.  

Add the following binding to your DNS settings:  
> `192.168.56.56        homestead.test`

From the project folder, you can now run `vagrant up` to start the virtual machine.  
You should see it in the Oracle VM GUI, first as idle, and then as running once you've ran the command.  
Use `vagrant halt` to stop the server.


## About

Online web course platform. Public release still not ready for production systems.


## Demo

We're working on including a demo course with the platform.  
Meanwhile, you can try a preinstalled, interactive demo in the cloud.  
Details at https://www.webcourses.io/demo.

## Working on the front end

To work on the front end, start up the angular server with `npm start`.  
Json-server is now included in the setup for a fake api. Start using `npm run api`.


## Laravel & Angular combo

Angular source files are in `/resources/frontend/webcourses`. They're served via Laravel's AngularController +Blade.

To recompile the Angular source go to `/resources/frontend/webcourses/app/src` and run `npm install`. This'll install the libraries required for Angular and a recompile of the front-end.

With the Angular libraries installed, run `npm run-script build:prod` (check that you're still in `/resources/frontend/webcourses/app/src`).


## Vue Login and Profile Management

Vue's front end is chiefly in `/resources/js`. To recompiled changes in Vue files, run `npm install` from `resources` and then `npm run dev`, `npm run prod` or `npm run watch`.
