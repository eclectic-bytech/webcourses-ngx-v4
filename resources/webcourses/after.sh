#!/usr/bin/env bash
echo -e "Copying Angular essentials...";
cp ../../public/webcourses/index.html ../views/angular.blade.php;
cp ./src/config.default.json ../../public/webcourses/config.json;

cd ../../public/webcourses/publisher-files/;
echo -e "Creating symbolic link associations in publisher-files directory...";
ln -s 1 webcourses_io;
ln -s 2 acme;
