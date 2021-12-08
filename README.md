

# Running the API

```npm install ```
    ```npm start```<br/> 
Make sure that nodemon is installed globally or  install it publicly as dev dependency using ```npm i nodemon --dev  ```

# Setting Up API

Add the data base connection string in .env using CONNECTION_STRING as variable name and also menation the port number in which the api should run using PORT variable if not the API will run on the default 5000 port.

Using the API

The API allows the following operations

# Sorting

 ```localhost:3000/api/v1/products?sort=name```<br>
 The above fetches the data where the data is sorted in ascending order by name
 
 ```localhost:3000/api/v1/products?sort=-name```<br>
  The above fetches the data where the data is sorted in ascending order by name
  
  # Limit 
  
   ```localhost:3000/api/v1/products?limit=10```<br>
 The above fetches the first 10 entries from the database
 
 # Pages
 The api provides the functionality of pages and user can select the number of entries in the page using the limit option<br />
  ```localhost:3000/api/v1/products?page=1&limit=10```<br>
  The above fetches the first 10 entries from data base <br />
  ```localhost:3000/api/v1/products?page=2&limit=15```<br>
  The above fetches the second 15 data entries from the data base.
