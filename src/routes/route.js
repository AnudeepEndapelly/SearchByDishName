import express from 'express';
import { search } from '../controllers/controller.js';


const router = express.Router();
router.get('/dishes', search);


export default router;