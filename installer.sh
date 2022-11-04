# echo -e "\033[1;35mWNGX Installer v1.1.0a\033[1;34m";

# echo -e "Running Composer...";
# composer install;

# echo -e "Creating a copy of .env file...";
# cp .env.example .env;

# echo -e "Installing NPM packages needed by Vue...";
# npm install;

# echo -e "Installing NPM packages needed by Angular...";
# cd resources/webcourses/;
# npm install;

# echo
# echo -e "Compiling webcourses (Angular framework)...";
# npm run build:prod;

# cd ../../public/webcourses/publisher-files/
# echo -e "Creating symbolic link associations in publisher-files directory...";
# ln -s 1 webcourses_io;
# ln -s 2 acme;
cd ../../../;

echo
echo "Running homestead make...";
vendor/bin/homestead make;

echo
echo -e "Try dos2unix on init.sh to prevent console line break errors...";
dos2unix init.sh;

echo
echo -e "\033[1;34mVagrant up...\033[0;37m";
vagrant up;

echo -e "\033[1;34mInit system via vagrant ssh command...";
vagrant ssh --command "~/code/init.sh";
