echo -e "\033[1;35mWNGX Installer v1.3.0a\033[1;34m";

echo -e "Running Composer...";
composer install;

echo -e "Creating a copy of .env file...";
cp .env.example .env;

echo -e "Creating a copy of .htaccess file...";
cp public/.htaccess_default public/.htaccess;

echo
echo -e "Initialising demo publisher-files git submodule...";
git submodule add -f https://github.com/eclectic-bytech/publisher-files ./public/webcourses/publisher-files
