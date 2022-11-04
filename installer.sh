echo -e "\033[1;35mWNGX Installer v1.1.0a\033[1;34m";

echo -e "Running Composer...";
composer install;

echo -e "Creating a copy of .env file...";
cp .env.example .env;

echo -e "Installing NPM packages needed by Vue...";
npm install;

echo -e "Installing NPM packages needed by Angular...";
cd resources/webcourses/;
npm install;

echo -e "PWD!!!!!!!!!!!!!!!!!!!";
pwd;


echo -e "Creating symbolic link associations in publisher-files directory...";
ln -s ./public/webcourses/publisher-files/1 ../../public/webcourses/publisher-files/webcourses_io;
ln -s ./public/webcourses/publisher-files/2 ../../public/webcourses/publisher-files/acme;

echo
echo -e "Compiling webcourses (Angular framework)...";
npm run build:prod;

# cd ../../;

echo "Running homestead make...";
vendor/bin/homestead make;

echo
echo -e "Try dos2unix on init.sh to prevent console line break errors...";
dos2unix ./init.sh;

# echo
# echo -e "\033[1;34mVagrant up...\033[0;37m";
# vagrant up;

# echo -e "\033[1;34mInit system via vagrant ssh command...";
# vagrant ssh --command "~/code/init.sh";
