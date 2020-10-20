# Building a full stack TODO App using nodejs

## Database Design
![alt](https://i.ibb.co/2Sj1qrj/TODO-app.png)

## Database setup
  ### Docker installation for Database
  * [x] docker-compose.yml
  * [x] setup
    * services
    * volumes
    * ports
    * environment variables

  ### Database connection
  * [x] Install
    * knex
    * pg
    * dotenv
  * [x] knexfile.js
    ```sh
    npx knex init
    ```

  ### eslint setup
  * [x] Install
    * eslint
  * [x] .eslintrc.js
    ```sh
    npx eslint --init
    ```

  ### Table migrations
  * [x] Create migrations
    ```sh
    npx knex migrate:make initial
    ```
  * [x] Run migrations
