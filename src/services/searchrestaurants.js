import db from '../config/db.js';


export async function searchRestaurants(name, min, max) {
 


const query = `
SELECT
r.id AS restaurantId,
r.name AS restaurantName,
r.city,
d.name AS dishName,
d.price AS dishPrice,
COUNT(o.id) AS orderCount
FROM dishes d
JOIN restaurants r ON d.restaurant_id = r.id
LEFT JOIN orders o ON o.dish_id = d.id
WHERE d.name LIKE CONCAT('%', ?, '%')
AND d.price BETWEEN ? AND ?
GROUP BY r.id, d.id
ORDER BY orderCount DESC
LIMIT 10;
`;


const [rows] = await db.query(query, [name, min, max]);
return rows.map(row => ({
restaurantId: row.restaurantId,
restaurantName: row.restaurantName,
city: row.city,
dishName: row.dishName,
dishPrice: row.dishPrice,
orderCount:  row.orderCount
}));

}