import dotenv from 'dotenv';
import express from 'express';
import route from './src/routes/route.js'; 

dotenv.config();
const app = express();
app.use(express.json());


app.get('/', (req, res) => res.json({ ok: true }));
app.use('/search', route);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
export default app;