FROM php:8.2-cli

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    sqlite3 \
    libsqlite3-dev \
    && docker-php-ext-install pdo pdo_sqlite mbstring exif pcntl bcmath gd \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy application files
COPY . .

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

# Copy .env and generate key
RUN cp .env.example .env \
    && php artisan key:generate

# Create SQLite database and run migrations + seed
RUN touch database/database.sqlite \
    && php artisan migrate --force \
    && php artisan db:seed --force

# Railway will inject the PORT environment variable
ENV PORT=8000
EXPOSE ${PORT}

# Start the application using the injected PORT
CMD php artisan serve --host=0.0.0.0 --port=${PORT}
