import express from 'express';
import { addProd, delProd, getProds, updtProd } from '../controllers/ProductController.js';

const router = express.Router();

router.post("/", addProd);
router.get("/", getProds);
router.put("/", updtProd);
router.delete("/", delProd);

export default router