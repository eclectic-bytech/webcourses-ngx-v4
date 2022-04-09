echo "Laravel migration is starting...";
php ~/code/artisan migrate;

echo "Copying Angular index.html to angular.blade.php....";
cp ~/code/public/webcourses/index.html ~/code/resources/views/angular.blade.php;

echo "Creating default team for developers.";
php artisan db:seed --class=TeamSeeder

echo "Creating default user for developers.";
php artisan db:seed --class=UserSeeder
