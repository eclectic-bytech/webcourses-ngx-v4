echo -e "\033[1;35mWNGX Production Installer v1.0.0a\033[1;34m";

echo -e "Running Composer...";
composer install;

echo -e "Creating a copy of .env file...";
cp .env.example .env;

echo -e "Installing NPM packages needed by Vue...";
npm install;

echo -e "Installing NPM packages needed by Angular...";
cd resources/webcourses/;
npm install;

echo
echo -e "Compiling webcourses (Angular framework)...";
npm run build:prod;

cd ../../

echo
echo "Laravel migration is starting...";
php ~/code/artisan migrate;

echo
echo "Copying Angular index.html to angular.blade.php....";
cp ~/code/public/webcourses/index.html ~/code/resources/views/angular.blade.php;

echo
echo "Copying config.default.json to config.json....";
echo
cp ~/code/resources/webcourses/src/config.default.json ~/code/public/webcourses/config.json;
echo
echo "Seeding default user team...";
php ~/code/artisan db:seed --class=TeamSeeder;
echo
echo "Seeding default roles...";
php ~/code/artisan db:seed --class=RoleSeeder;
echo
echo "Seeding default admin user...";
php ~/code/artisan db:seed --class=UserSeeder;
echo
echo "Seeding default publisher...";
php ~/code/artisan db:seed --class=PublisherSeeder;
echo
echo "Seeding activity types...";
php ~/code/artisan db:seed --class=ActivitytypeSeeder;
echo
echo "Seeding default course...";
php ~/code/artisan db:seed --class=DemocourseSeeder;
echo
echo "Seeding default user progress entry...";
php ~/code/artisan db:seed --class=UserprogressSeeder;
echo
echo "Seeding default user roles entries...";
php ~/code/artisan db:seed --class=UserrolesSeeder;
echo
echo "Seeding default publisher theme entries...";
php ~/code/artisan db:seed --class=ThemesSeeder;
echo
