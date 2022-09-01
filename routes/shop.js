const path = require("path");
const express = require("express");

const router = express.Router();
const adminData = require("./admin");
const rootDir = require("../util/path");

router.get("/", (req, res, next) => {
  // console.log('shop.js',adminData.products);
  //   res.sendFile(path.join(rootDir, 'Views', 'shop.html'));
  const products = adminData.products;
  res.render("shop", { prods: products, 
    pageTitle: 'Shop', 
    path: '/',
    hasProducts: products.length > 0, 
    activeShop: true, 
    productCSS: true, 
    });
});

module.exports = router;
