const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, price, description, imageurl) {
    this.id = id;
    this.title = title;
    this.imageurl = imageurl;
    this.description = description;
    this.price = price;
  }

  save() {
    return db.query(
        'INSERT INTO products (title, price, description, imageurl) VALUES ($1, $2, $3, $4)',
        [this.title, this.price, this.description, this.imageurl]
    )
    .then(result => {
        console.log('Insert successful:', result);
        return result; // Optionally return the result
    })
    .catch(err => {
        console.error('Database error:', err);
        throw err; // Rethrow to handle in calling function
    });
}

  
  

  static deleteById(id) {}

  static fetchAll() {
    return db.query('SELECT * FROM products');
  }

  static findById(id) {
    return db.query('SELECT * FROM products WHERE products.id = $1', [id]) // Use $1 for PostgreSQL
        .then(result => {
            if (result.rows.length > 0) {
                console.log('Product found:', result.rows[0]); // Log the found product
                return result.rows[0]; // Return the first product found
            }
            console.log('No product found with ID:', id);
            return null; // Return null if no product found
        })
        .catch(err => {
            console.error('Error fetching product by ID:', err);
            throw err;
        });
}

};
