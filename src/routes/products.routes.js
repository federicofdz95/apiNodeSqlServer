import { Router } from "express";
import { getProducts, postProducts, putProducts, deleteProducts } from "../controllers/products.controller.js"

const router = Router();


router.get("/products", getProducts);
router.post("/products", postProducts);
router.put("/products", putProducts);
router.delete("/products", deleteProducts);

export default router;