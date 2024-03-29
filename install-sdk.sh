echo -e "\033[1;35mWNGX Installer (SDK) v1.3.0a\033[1;34m";

echo -e "Running Composer...";
composer install;

echo -e "Creating a copy of .env file...";
cp .env.example .env;

echo -e "Creating a copy of .htaccess file...";
cp public/.htaccess_default public/.htaccess;

echo -e "Installing NPM packages needed by Vue...";
npm install;

echo -e "Installing NPM packages needed by Angular...";
cd resources/webcourses/;
npm install;

echo
echo -e "Initialising demo publisher-files git submodule...";
# Since /public/webcourses/publisher-files is in gitignore, we need the -f flag
git submodule add -f https://github.com/eclectic-bytech/publisher-files ./public/webcourses/publisher-files

# echo
# echo -e "Compiling webcourses (Angular framework)...";
# npm run build:prod;

cd ../../
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
vagrant ssh --command "~/code/init-sdk.sh";
