# Restful Inventory API
For this assignment we were tasked with finishing the routes on a restful api designed around the idea of an ecommerce site. It required building multiple models with associations and syncing those as well as building and finishing multiple routes for CRUD operations.

## Description 
This application uses a MySQL database which is manipulated with CRUD operations using Sequelize. The Sequelize connection is established using the dotenv package. For the server side Express is used to create routes.
[Demo Video](https://drive.google.com/file/d/1hsMVq6-X3aV6pF0qm-jJXoMMQngG_qUg/view)


## Usage
To install, this app can be cloned using the GitHub link below. After cloning npm i must be run to install the necessary packages, then the .envExample changed to a .env and the users credentials added. After that, the user must log into mysql and point it to the db/schema using 'SOURCE db/schema.sql;'. After that the server can be launched using npm start. After launching the seed data can be added, for this I prefer to open a new terminal and run 'npm run seed' in order to keep the connection established. With the server launched and seed data added the user can use the end-point testing system of their choice.



## Links/Contact

https://github.com/Ajaws2022/BC-CH-Restful_Inventory_API

ajaworski2019@gmail.com