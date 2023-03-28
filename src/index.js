import express from 'express'
import productsRoutes from './routes/products.routes.js'
import config from './config.js';


const app = express();

//middlewares
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use(productsRoutes)

app.use((req, res, next) => {
  res.status(404).json({
    message:
      "Error :(",
  });
});


//setting
app.listen(config.port)


