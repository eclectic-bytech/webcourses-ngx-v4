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
echo "Seeding default admin user...";
php ~/code/artisan db:seed --class=UserSeeder;
echo
echo "Seeding default course...";
php ~/code/artisan db:seed --class=DemocourseSeeder;
