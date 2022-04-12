echo "Laravel migration is starting...";
php ~/code/artisan migrate;

echo "Copying Angular index.html to angular.blade.php....";
cp ~/code/public/webcourses/index.html ~/code/resources/views/angular.blade.php;

echo "Seeding default user team...";
php ~/code/artisan db:seed --class=TeamSeeder

echo "Seeding default admin user...";
php ~/code/artisan db:seed --class=UserSeeder
