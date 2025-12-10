# Restaurant Dish Search

A minimal Node.js + Express backend with MySQL to search restaurants by dish name restricted to a price range and return top 10 restaurants by order count.


## Features
- Endpoint: `GET /search/dishes?name=<name>&minPrice=<min>&maxPrice=<max>`
- Returns the top 10 restaurants where that dish is ordered most (dish price must be within range)

## Setup (local)
1. Clone the repo
```bash
git clone https://github.com/AnudeepEndapelly/SearchByDishName.git
```
2. Install dependencies 
```bash
npm install
```
3. Create the .env file with variables given below
```bash
PORT=3000         
DB_HOST=crossover.proxy.rlwy.net
DB_USER=root
DB_PASSWORD=XLrBWyzVEKBFLejBPaCWAdcOvxqTlsAA
DB_NAME=railway
DB_PORT=14344
```
4. run the project 
```bash
node app.js
```
5. open the below url in your  browser
```bash
http://localhost:3000/search/dishes?name=Biryani&minPrice=150&maxPrice=300
```