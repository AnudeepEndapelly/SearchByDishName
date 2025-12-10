# Restaurant Dish Search


A minimal Node.js + Express backend with MySQL to search restaurants by dish name restricted to a price range and return top 10 restaurants by order count.


## Features
- Endpoint: `GET /search/dishes?name=<name>&minPrice=<min>&maxPrice=<max>`
- Returns the top 10 restaurants where that dish is ordered most (dish price must be within range)

## Setup (local)
1. Clone the repo
2. Install dependencies using "npm i" command
3. run the project using "node app.js" command


```bash
npm install
node app.js