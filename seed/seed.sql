DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS dishes;
DROP TABLE IF EXISTS restaurants;

CREATE TABLE restaurants (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    city VARCHAR(100)
);

CREATE TABLE dishes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    restaurant_id INT,
    name VARCHAR(255),
    price INT,
    FOREIGN KEY (restaurant_id) REFERENCES restaurants(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    dish_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (dish_id) REFERENCES dishes(id)
);

INSERT INTO restaurants (name, city) VALUES
('Hyderabadi Spice House', 'Hyderabad'),
('Paradise Biryani', 'Hyderabad'),
('Bawarchi Restaurant', 'Hyderabad'),
('Mehfil Biryani House', 'Hyderabad'),
('Sri Kanya Comfort', 'Vijayawada'),
('Spice Garden', 'Bangalore'),
('Punjabi Rasoi', 'Delhi'),
('The Taste of Kolkata', 'Kolkata'),
('Amaravati Family Restaurant', 'Guntur'),
('Bombay Spice Kitchen', 'Mumbai'),
('Chennai Dosa Corner', 'Chennai'),
('Royal Andhra Ruchulu', 'Hyderabad');

INSERT INTO dishes (restaurant_id, name, price) VALUES
(1, 'Chicken Biryani', 220),
(2, 'Chicken Biryani', 250),
(3, 'Chicken Biryani', 170),
(4, 'Chicken Biryani', 280),
(5, 'Chicken Biryani', 190),
(6, 'Chicken Biryani', 210),
(7, 'Chicken Biryani', 230),
(8, 'Chicken Biryani', 260),
(9, 'Chicken Biryani', 200),
(10, 'Chicken Biryani', 240),
(11, 'Chicken Biryani', 275),
(12, 'Chicken Biryani', 300);

INSERT INTO orders (dish_id) VALUES
(1), (1), (1), (2), (2),(5), (5), (5), (6), (6),(7), (7), (7), (7), (7),(8), (8), (8), (9), (10),(10), (10), (11), (11), (12),(3),(4); 

-- select * from restaurants;
-- select * from dishes;
-- select * from orders;


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
WHERE d.name LIKE  '%Biryani%'
  AND d.price BETWEEN 100 AND 300
GROUP BY 
    r.id, 
    r.name, 
    r.city,
    d.id, 
    d.name, 
    d.price
ORDER BY orderCount DESC
LIMIT 10;
