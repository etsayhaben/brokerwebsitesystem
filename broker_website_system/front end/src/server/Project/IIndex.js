const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const PORT = 7000;
app.use(express.static('uploads'));

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});
const upload = multer({ storage: storage });

const db = require('../Db.js');

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const result = await db.query('SELECT * FROM customer WHERE email=? AND password=?', [email, password]);

    if (result[0].length === 0) {
      req.session.isAuthenticated = false;
      res.status(401).json({ success: false, error: 'Incorrect email or password' });
    } else {
      req.session.isAuthenticated = true;
      req.session.email = email; // Store user's email in the session if needed
      res.json({ success: true, user_id: result[0].user_id, userData: result[0] });
    }
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.post('/submitform', upload.fields([{ name: 'imageFile' }, { name: 'ownershipFile' }]), async (req, res) => {
  try {
    const formData = req.body;
    const imageFile = req.files['imageFile'][0];
    const ownershipFile = req.files['ownershipFile'][0];
    const userEmail = req.session.email;

    const sql =
      'INSERT INTO mobile_form (user_email, brand, model, storage, color, condittion, price, additional_info, image_file, ownership_file) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [
      userEmail,
      formData.brand,
      formData.model,
      formData.storage,
      formData.color,
      formData.condittion,
      formData.price,
      formData.additionalInfo,
      imageFile.filename,
      ownershipFile.filename,
    ];

    const result = await db.query(sql, values);
    res.status(200).json({ message: 'Form submitted successfully!', data: result });
  } catch (error) {
    console.error('Error inserting data into MySQL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getUserImages', async (req, res) => {
  try {
    const result = await db.query('SELECT image_file FROM mobile_form');

    if (result[0].length === 0) {
      res.status(404).json({ success: false, error: 'Images not found for the user' });
    } else {
      console.log("successed");
      console.log(result);
      res.json({ success: true, result }); // Send imageUrls instead of result
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.get('/apartment_data', async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM apartment_form');

    if (result[0].length === 0) {
      res.status(404).json({ success: false, error: 'not available with this id' });
    } else {
      console.log("successed");
      console.log(result.data);
      res.json({ success: true }); // Send imageUrls instead of result
    }
  } catch (error) {
    console.error('Error fetching images:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.delete('/delete_product/:id', (req, res) => {
  const productId = req.params.id;
  const deleteProductQuery = 'DELETE FROM mobile_form WHERE form_id = ?';

  db.query(deleteProductQuery, [productId], (err, result) => {
    console.log("affected rows" + result.affectedRows);
    if (err) {
      console.error('Error deleting product:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    } else {
      if (result.affectedRows > 0) {
        res.json({ message: 'Product deleted successfully' });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
    }
  });
});

app.post('/add_customer', async (req, res) => {
  try {
    const {
      FIRSTNAME,
      MIDDLENAME,
      LASTNAME,
      email,
      HOUSENUMBER,
      CURRENTWOREDA,
      CURRENTCITY,
      password,
      address,
      phone_number,
    } = req.body;
console.log(req.body);
    // Validate the incoming data
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Hash the password (consider using bcrypt for secure password hashing)
    // const hashedPassword = await bcrypt.hash(password, 10);

    const query = `
      INSERT INTO customer (
        FIRSTNAME, MIDDLENAME, LASTNAME, email, HOUSENUMBER, CURRENTWOREDA, CURRENTCITY, password, address, phone_number
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      FIRSTNAME,
      MIDDLENAME,
      LASTNAME,
      email,
      HOUSENUMBER,
      CURRENTWOREDA,
      CURRENTCITY,
      password, // Consider replacing with hashedPassword
      address,
      phone_number,
    ];

    await db.query(query, values);

    res.status(201).json({ message: 'Customer added successfully' });
  } catch (error) {
    console.error(error);

    // Check for duplicate entry error (assuming MySQL)
    if (error.code === 'ER_DUP_ENTRY') {
      return res.status(400).json({ error: 'Email address already exists' });
    }

    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/customers', async (req, res) => {
  try {
    const query = 'SELECT * FROM Customer';
    const result = await db.query(query);

    res.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error fetching customer data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});
app.get('/mobile_description', async (req, res) => {
  try {
    const query = 'SELECT * FROM mobile_form ';
    const result = await db.query(query);

    res.json({ success: true, data: result[0] });
  } catch (error) {
    console.error('Error fetching moible data:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
