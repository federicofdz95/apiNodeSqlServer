export const queries = {

    //TODOS
    getAllProducts : 'SELECT * FROM products',
    
    //POR ID
    getProductId : 'SELECT * FROM products WHERE products_id = ',
    
    //COUNT
    countProducts : 'SELECT COUNT(*) FROM products',

    //AGREGAR
    addProduct : 'INSERT INTO products (products_name, products_category, products_material, products_price, products_stock) VALUES(@name, @category, @material, @price, @stock)',
    
    //MODIFICAR
    updateProduct : 'UPDATE products SET products_name=@name, products_category=@category, products_material=@material, products_price=@price, products_stock=@stock WHERE products_id = ',

    //ELIMINAR
    deleteProduct : 'DELETE FROM products WHERE products_id = '
}