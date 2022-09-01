const path = require("path");

const express = require("express");

const router = express.Router();

const products = [];

const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "Views", "add-product.html"));
  res.render("add-product", { pageTitle: "Add Product", path: "/admin/add-product", formsCSS: true, productCSS: true, activeAddProduct: true });
});
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
