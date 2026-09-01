// backend/seedProducts.js
// Adds the 30 products from products.json to your existing MongoDB collection
// Run with: node seedProducts.js

require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

// Adjust this path if your Product model lives somewhere else
const Product = require('./models/Product');

const products = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'products.json'), 'utf-8')
);

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB connected successfully');

    const inserted = await Product.insertMany(products);
    console.log(`✅ ${inserted.length} products inserted successfully`);

    process.exit(0);
  } catch (err) {
    console.error('❌ Error seeding products:', err.message);
    process.exit(1);
  }
}

seed();
