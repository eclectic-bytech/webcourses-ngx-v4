echo -e "\033[1;35mWNGX Installer v1.3.0a\033[1;34m";

echo -e "Running Composer...";
composer install;

echo -e "Creating a copy of .env file...";
cp .env.example .env;

echo "Copying config.default.json to config.json....";
cp resources/webcourses/src/config.default.json ./public/webcourses/config.json;

echo -e "Creating a copy of .htaccess file...";
cp public/.htaccess_default public/.htaccess;

echo -e "Initialising demo publisher-files git submodule...";
# Since /public/webcourses/publisher-files is in gitignore, we need the -f flag
git submodule add -f https://github.com/eclectic-bytech/publisher-files ./public/webcourses/publisher-files

# --- INIT.SH -----------------------------------------

echo "Laravel migration is starting...";
php artisan migrate;
echo
echo "Copying Angular index.html to angular.blade.php....";
cp public/webcourses/index.html resources/views/angular.blade.php;
echo
echo "Seeding default user team...";
php artisan db:seed --class=TeamSeeder;
echo
echo "Seeding default roles...";
php artisan db:seed --class=RoleSeeder;
echo
echo "Seeding default admin user...";
php artisan db:seed --class=UserSeeder;
echo
echo "Seeding default publisher...";
php artisan db:seed --class=PublisherSeeder;
echo
echo "Seeding activity types...";
php artisan db:seed --class=ActivitytypeSeeder;
echo
echo "Seeding default course...";
php artisan db:seed --class=DemocourseSeeder;
echo
echo "Seeding default user progress entry...";
php artisan db:seed --class=UserprogressSeeder;
echo
echo "Seeding default user roles entries...";
php artisan db:seed --class=UserrolesSeeder;

echo
echo -e "\e[1;32m*******************************************************\e[0m";
echo -e "\e[1;32m*                                                     *";
echo -e "\e[1;32m*\e[0m        \e[1mUpdate your config files:\e[0m                    \e[1;32m*";
echo -e "\e[1;32m*                                                     *";
echo -e "\e[1;32m*\e[0m            - \e[34m.env                                   \e[1;32m*";
echo -e "\e[1;32m*\e[0m            - \e[34mpublic/webcourses/config.json          \e[1;32m*";
echo -e "\e[1;32m*                                                     *";
echo -e "\e[1;32m*******************************************************\e[0m";
echo
