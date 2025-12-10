import mysql from "mysql2/promise";
import dotenv from 'dotenv';
dotenv.config({path : '.env'});

const db=await mysql.createConnection({
  host: process.env.DB_HOST||"localhost",
  user: process.env.DB_USER ||"root",
  password: process.env.DB_PASSWORD ||"2003",
  database:process.env.DB_NAME ||"mysql_db"
});
// console.log("connection created with DB");
// console.log("host+"+process.env.DB_HOST);
export default db;


// await db.execute('CREATE DATABASE mysql_db');
// console.log(await db.query("SHOW DATABASES"));

/*
SELECT 
    r.id AS restaurantId,
    r.name AS restaurantName,
    r.city AS city,
    d.name AS dishName,
    d.price AS dishPrice,
    COUNT(o.id) AS orderCount
FROM dishes d
INNER JOIN restaurants r 
    ON d.restaurant_id = r.id
LEFT JOIN orders o 
    ON o.dish_id = d.id
WHERE d.name LIKE CONCAT('%', ?, '%')
  AND d.price BETWEEN ? AND ?
GROUP BY 
    r.id, 
    r.name, 
    r.city,
    d.id, 
    d.name, 
    d.price
ORDER BY orderCount DESC
LIMIT 10;

*/
// const [restaurants]=await db.execute('select * from restaurants where id=?',[1]);
// console.log(restaurants);