Installation
============

Install composer dependencies :

```shell
composer install
```

Then install the npm dependencies :

```shell
npm install
```

Add your database credentials in .env file

```shell
DATABASE_URL=mysql://db_user:db_password@127.0.0.1:3306/db_name
```

Create database schema :
```shell
php bin/console doctrine:schema:update --force
```

Then start the development HTTP server :

``` bash
php -S 127.0.0.1:8000 -t public
```


Then start the development webpack server in other tab :

``` bash
npm run dev-server
```

Then go to :
``` bash
http://127.0.0.1:8000/
```