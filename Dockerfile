FROM php:8.1-fpm



# Arguments defined in docker-compose.yml
# ARG user
# ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    supervisor \ 
    libxslt-dev \
    libzip-dev

# Install Postgre PDO
RUN apt-get install -y libpq-dev \
    && docker-php-ext-configure pgsql -with-pgsql=/usr/local/pgsql \
    && docker-php-ext-install pdo pdo_pgsql pgsql


# adding supervisor later with fastest cache build for php extension
# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install mbstring exif pcntl bcmath gd opcache pdo pdo_pgsql pgsql xsl xml zip

# RUN systemctl enable supervisord && supervisorctl update && supervisorctl start websockets && supervisorctl status

COPY ./docker/etc/supervisor.conf /etc

RUN mkdir /var/log/php-fpm

# Copy existing application directory contents
COPY . /var/www

RUN chown -R www-data:www-data /var/www

# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer


# Set working directory
WORKDIR /var/www


RUN composer install --optimize-autoloader --no-dev \
    && php artisan storage:link \
    && php artisan optimize:clear
# && cp .env.example .env

EXPOSE 9000


CMD ["supervisord", "-c", "/etc/supervisor.conf"]