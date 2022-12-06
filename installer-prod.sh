echo -e "\033[1;35mWNGX Production Installer v1.0.0a\033[1;34m";

echo -e "Running Composer...";
composer install;

echo -e "Installing NPM packages needed by Vue...";
npm install;

echo
echo -e "\033[1;34mInstalling NPM packages needed by Angular...";
cd resources/webcourses/;
npm install;

echo
echo -e "\033[1;34mCompiling webcourses (Angular framework)...";
npm run build:prod;

cd ../../

echo
echo "\033[1;34mLaravel migration is starting...";
php artisan migrate;

echo
echo "\033[1;34mCopying Angular index.html to angular.blade.php....";
cp ./public/webcourses/index.html ~/code/resources/views/angular.blade.php;

# echo
# echo "\033[1;34mCopying config.default.json to config.json....";
# echo
# cp ./resources/webcourses/src/config.default.json ~/code/public/webcourses/config.json;
# echo
# echo "\033[1;34mSeeding default user team...";
# php artisan db:seed --class=TeamSeeder;
# echo
# echo "Seeding default roles...";
# php artisan db:seed --class=RoleSeeder;
# echo
# echo "Seeding default admin user...";
# php artisan db:seed --class=UserSeeder;
# echo
# echo "Seeding default publisher...";
# php artisan db:seed --class=PublisherSeeder;
# echo
# echo "Seeding activity types...";
# php artisan db:seed --class=ActivitytypeSeeder;
# echo
# echo "Seeding default course...";
# php artisan db:seed --class=DemocourseSeeder;
# echo
# echo "Seeding default user progress entry...";
# php artisan db:seed --class=UserprogressSeeder;
# echo
# echo "Seeding default user roles entries...";
# php artisan db:seed --class=UserrolesSeeder;
# echo
# echo "Seeding default publisher theme entries...";
# php artisan db:seed --class=ThemesSeeder;
# echo
