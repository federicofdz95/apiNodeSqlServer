import express from 'express'
import productsRoutes from './routes/products.routes.js'

const app = express();

app.use(express.json())

app.use(productsRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message:
      "Error :(",
  });
});


app.listen(3000)