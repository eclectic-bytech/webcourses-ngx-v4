echo -e "\033[1;34mWNGX Installer v1.0 RC1\033[0;37m"
echo
echo -e "\033[1;35mRunning Composer...\033[0;37m"
composer install

echo -e "\033[1;35mCreating a copy of .env file...\033[0;37m"
cp .env.example .env

echo -e "\033[1;35mRunning homestead make...\033[0;37m"
vendor/bin/homestead make

echo -e "\033[1;35mVagrant up...\033[0;37m"
vagrant up

echo -e "\033[1;35mStart SSH session...\033[0;37m"
vagrant ssh --command "php ~/code/artisan migrate"
