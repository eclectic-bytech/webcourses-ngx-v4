echo -e "\033[1;35mWNGX Installer v1.0 RC2\033[1;34m";

echo -e "Running Composer...";
composer install;

echo -e "Creating a copy of .env file...";
cp .env.example .env;

echo "Running homestead make...";
vendor/bin/homestead make;

echo -e "\033[1;34mVagrant up...\033[0;37m";
vagrant up;

echo -e "\033[1;34mInit system via vagrant ssh command...";
vagrant ssh --command "~/code/init.sh";
