This app is a little exercise made to display skills learned during my training

## Quickstart

This is app is a little quiz with multiple choice answers !

### Conception

You will find every element in the conception folder, including a link to the wireframe that we made in conception.md

### DB

To use the app you can deploy the database locally with posgresql

- connect to **psql** as the super user
    ```
    sudo -i -u postgres psql
    ```
- create a new role 
    ```
    CREATE USER quiz LOGIN WITH PASSWORD ENCRYPTED 'quiz';
    ```
- create the db
    ```
    CREATE DATABASE quiz OWNER quiz
    ```
- Disconnect yourself from the super user
    ```
    Ctrl + D ou \q
    ```
- deploy 
    ```
    psql -U quiz -d quiz -f data/import_tables;
    psql -U quiz -d quiz -f data/import_data;
    psql -U quiz -d quiz -f data/migrate_user;
    ```

now you have all you need to use the app locally. (don't forget you .env !)

### Run it

First run the ``` npm i ``` command and next node ```index.js```
