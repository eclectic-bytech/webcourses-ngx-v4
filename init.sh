echo -e "\033[1;35mLaravel migration is starting...\033[0;37m"

php ~/code/artisan migrate

echo -e "\033[1;35mCopying Angular index.html to angular.blade.php...\033[0;37m"
cp ~/code/public/webcourses/index.html ~/code/resources/views/angular.blade.php
