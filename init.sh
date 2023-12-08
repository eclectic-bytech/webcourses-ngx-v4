echo "Laravel migration is starting...";
php artisan migrate;
echo
echo "Copying Angular index.html to angular.blade.php....";
cp public/webcourses/index.html resources/views/angular.blade.php;
echo
echo "Copying config.default.json to config.json....";
echo
cp resources/webcourses/src/config.default.json public/webcourses/config.json;
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
