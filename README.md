# Restaurant Dish Search

A minimal Node.js + Express backend with MySQL to search restaurants by dish name restricted to a price range and return top 10 restaurants by order count.


## Features
- Endpoint: `GET /search/dishes?name=<name>&minPrice=<min>&maxPrice=<max>`
- Returns the top 10 restaurants where that dish is ordered most (dish price must be within range)

## Setup (local)
1. Clone the repo.
```bash
git clone https://github.com/AnudeepEndapelly/SearchByDishName.git
```
2. Install dependencies.
```bash
npm install
```
3. run the sql commands in seed.sql in your mysql db.
4. Create the .env file with variables given below and fill them accordingly.
```bash
PORT=3000         
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=  
```
5. run the project.
```bash
node app.js
```
6. open the below url in your browser to view the response.
```bash
http://localhost:3000/search/dishes?name=Biryani&minPrice=150&maxPrice=300
```