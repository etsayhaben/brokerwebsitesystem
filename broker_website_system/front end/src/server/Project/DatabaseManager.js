const mysql = require('mysql2');

class DatabaseManager {
  constructor() {
    this.pool = mysql.createPool({
      host: 'localhost',
      user: 'root',
      password: 'root',
      database: 'reactdb',
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0
    });
  }

  createUsersTable() {
    this.pool.query(`
      CREATE TABLE IF NOT EXISTS Customer (
        user_id INT AUTO_INCREMENT PRIMARY KEY,
        FIRSTNAME VARCHAR(255),
        MIDDLENAME VARCHAR(255),
        LASTNAME VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        HOUSENUMBER VARCHAR(255),
        CURRENTWOREDA VARCHAR(255),
        CURRENTCITY VARCHAR(255),
        password VARCHAR(255),
        address VARCHAR(255),
        phone_number VARCHAR(20),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `, (err, results) => {
      if (err) {
        console.error('Error creating Users table:', err);
      } else {
        console.log('Users table created successfully');
      }
    });
  }
  

  createApartmentFormTable() {
    this.pool.query(`
      CREATE TABLE IF NOT EXISTS apartment_form (
        form_id INT AUTO_INCREMENT PRIMARY KEY,
        user_email VARCHAR(255),
        address VARCHAR(255),
        bedrooms VARCHAR(255),
        bathrooms VARCHAR(255),
        price DECIMAL(10,2),
        squareFootage  DECIMAL(10,2),
        amenities VARCHAR(255),
        description VARCHAR(255),
        apartmentImage VARCHAR(255),
        ownershipDocument VARCHAR(255),
        FOREIGN KEY (user_email) REFERENCES Customer(email)
      )
    `, (err, results) => {
      if (err) {
        console.error('Error creating apartment_form table:', err);
      } else {
        console.log('Apartment Form table created successfully');
      }
    });
  }
  
  createMobileFormTable() {
    this.pool.query(`
      CREATE TABLE IF NOT EXISTS mobile_form (
        form_id INT AUTO_INCREMENT PRIMARY KEY,
        user_email VARCHAR(255),
        brand VARCHAR(255),
        model VARCHAR(255),
        storage VARCHAR(255),
        color VARCHAR(255),
        condittion VARCHAR(255),
        price DECIMAL(10, 2),
        additional_info TEXT,
        image_file VARCHAR(255),
        ownership_file VARCHAR(255),
        FOREIGN KEY (user_email) REFERENCES Customer(email)
      )
    `, (err, results) => {
      if (err) {
        console.error('Error creating mobile_form table:', err);
      } else {
        console.log('Mobile Form table created successfully');
      }
    });
  }
}

module.exports = DatabaseManager;
