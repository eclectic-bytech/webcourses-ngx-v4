#!/usr/bin/env bash
echo -e "Copying Angular index.html to angular.blade.php...";
cp ../../public/webcourses/index.html ../views/angular.blade.php;

echo -e "Replacing config.json with config.default.json..."
cp ./src/config.default.json ../../public/webcourses/config.json;

cd ../../public/webcourses/publisher-files/;
echo -e "Creating symbolic link associations in publisher-files directory...";
ln -s 1 default;
ln -s 2 acme;
