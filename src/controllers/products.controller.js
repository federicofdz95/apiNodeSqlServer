import { getConn, sql, queries } from '../database/index.js'


export const index = async (req, res) => {
  res.json({
    message:
      "Welcome to Api Node with SQL Server",
  });
};


//GET ALL
export const getProducts = async (req, res) => {

  try {
    
    const pool = await getConn();
    const result = await pool.request().query(queries.getAllProducts);  
    res.json(result.recordset);

  } catch (error) {

    res.status(500);
    res.send(error.message);
    
  }
  
};

//GET BY ID
export const getProductsId = async(req, res) => {
  
  const { id } = req.params

  //return res.json({msg : id});

  if (id == null) {
    return res.status(400).json({msg: "Bad Request"})
  }

  try {

    const pool = await getConn();
  
    const result = await pool
    .request()        
    .query(queries.getProductId + id);
    
    if (result.rowsAffected == 0 ) return res.json({msg : 0});

    res.json(result.recordset);
    
  } catch (error) {
    
    res.status(500);
    res.send(error.message);

  }
  
};

//COUNT 
export const getProductsCount = async (req, res) => {

  try {
    
    const pool = await getConn();
    const result = await pool.request().query(queries.countProducts);  
    res.json(result.recordset[0]['']);

  } catch (error) {

    res.status(500);
    res.send(error.message);
    
  }
  
};


//POST
export const postProducts = async(req, res) => {

    const {name, category, material, price, stock} = req.body

    //console.log(req.body)

    if (name == null || category == null || material == null || price == null || stock == null) {
      return res.status(400).json({msg: "Bad Request"})
    }

    try {
      
      const pool = await getConn();
    
      await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("category", sql.VarChar, category)
      .input("material", sql.VarChar, material)
      .input("price", sql.Decimal, price)
      .input("stock", sql.Int, stock)
      .query(queries.addProduct);
          
      res.send('Post success');

    } catch (error) {

      res.status(500);
      res.send(error.message);
      
    }
};


//PUT
export const putProducts = async(req, res) => {
  
    const { id } = req.params  
    const {name, category, material, price, stock} = req.body  

    if (id == null) {
      return res.status(400).json({msg: "Bad Request"})
    }
    

    try {
      
      const pool = await getConn();
    
      const result = await pool
      .request()
      .input("name", sql.VarChar, name)
      .input("category", sql.VarChar, category)
      .input("material", sql.VarChar, material)
      .input("price", sql.Decimal, price)
      .input("stock", sql.Int, stock)
      .query(queries.updateProduct + id);
          
      if (result.rowsAffected == 0 ) return res.json({msg : 0});

      res.json({msg : result.rowsAffected + ' row affected'});

    } catch (error) {

      res.status(500);
      res.send(error.message);
      
    }

};



//DELETE
export const deleteProducts = async(req, res) => {
  
    const { id } = req.params

    //return res.json({msg : id});

    if (id == null) {
      return res.status(400).json({msg: "Bad Request"})
    }

    try {
      
      const pool = await getConn();
    
      const result = await pool
      .request()        
      .query( queries.deleteProduct + id);
      
      if (result.rowsAffected == 0 ) return res.json({msg: 0});
      
      res.json({msg: result.rowsAffected + ' rows deleted'})

    } catch (error) {

      res.status(500);
      res.send(error.message);
      
    }    

};