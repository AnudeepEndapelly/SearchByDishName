import { searchRestaurants } from '../services/searchrestaurants.js';


export async function search(req, res) {
try {
const { name, minPrice, maxPrice } = req.query;


if (!name) return res.status(400).json({ error: 'name is required' });
if (!minPrice || !maxPrice) return res.status(400).json({ error: 'minPrice and maxPrice are required' });


const min = Number(minPrice);
const max = Number(maxPrice);
if (Number.isNaN(min) || Number.isNaN(max)) return res.status(400).json({ error: 'minPrice and maxPrice must be numbers' });
if (min > max) return res.status(400).json({ error: 'minPrice must be <= maxPrice' });


const results = await searchRestaurants(name, min, max);
return res.json({ restaurants: results });
} catch (err) {
console.error(err);
return res.status(500).json({ error: 'internal server error' });
}
}