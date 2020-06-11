# project_3_api
Node with Express Server with REST API
An easy way to get started with a Express server offering a REST API with Node.js. Read more about it.
Features
Express
REST API
Requirements
node & npm
git

Installation
git clone https://github.com/chrisungerjs/project_3_api.git
cd project_3_api
npm install
npm start
optional: include .env in your .gitignore
GET Routes
visit http://localhost:3000
/product
/users

Beyond GET Routes
CURL
Postman
Install Postman to interact with REST API
Create a product with:
URL: http://localhost:3001/products
Method: POST
Body: raw + JSON (application/json)

Delete a product with:
URL: http://localhost:3001/products
Method: DELETE

edit to current product:
URL: http://localhost:3001/products
Method:PUT
Body: raw + JSON (application/json)
