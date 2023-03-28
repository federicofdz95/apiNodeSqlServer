import { Router } from "express";
import { index, getProducts, getProductsId, getProductsCount, postProducts, putProducts, deleteProducts } from "../controllers/products.controller.js"

const router = Router();

router.get("/", index);
router.get("/api/products", getProducts);
router.get("/api/products/count", getProductsCount);
router.get("/api/products/:id", getProductsId);
router.post("/api/products", postProducts);
router.put("/api/products/:id", putProducts);
router.delete("/api/products/:id", deleteProducts);

export default router;