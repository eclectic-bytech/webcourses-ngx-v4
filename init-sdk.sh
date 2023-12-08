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
echo -e "\e[1;32m*******************************************************\e[0m";
echo -e "\e[1;32m*\e[0m    \e[1mMake sure you have the following DNS entry:\e[0m      \e[1;32m*";
echo -e "\e[1;32m*\e[0m    \e[34mhomestead.test 192.168.52.52                     \e[1;32m*";
echo -e "\e[1;32m*                                                     *";
echo -e "\e[1;32m*\e[0m    \e[1mRequired when running Angular in watch mode:     \e[1;32m*";
echo -e "\e[1;32m*\e[0m    \e[34mlocalhost 127.0.0.1                              \e[1;32m*";
echo -e "\e[1;32m*******************************************************\e[0m";
echo
