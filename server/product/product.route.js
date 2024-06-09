//express
const express = require("express");
const route = express.Router();

//multer
const multer = require("multer");
const storage = require("../../util/multer");
const upload = multer({
  storage,
});

const checkAccessWithSecretKey = require("../../util/checkAccess");

//controller
const ProductController = require("./product.controller");

//add product by seller and admin panel
route.post(
  "/create",
  // checkAccessWithSecretKey(),
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  ProductController.createProduct
);

//create product request accept or decline by admin
// route.patch("/acceptCreateRequest", checkAccessWithSecretKey(), ProductController.acceptCreateRequest);
route.patch("/acceptCreateRequest",  ProductController.acceptCreateRequest);

//get status wise all product requests to create product for admin panel
route.get("/createProductRequestStatusWise", ProductController.createProductRequestStatusWise);
// route.get("/createProductRequestStatusWise", checkAccessWithSecretKey(), ProductController.createProductRequestStatusWise);

//add product by admin
route.post(
  "/createProductByAdmin",
  checkAccessWithSecretKey(),
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  ProductController.createProductByAdmin
);

//update product by admin
// checkAccessWithSecretKey(),
// 
route.patch(
  "/update",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "images", maxCount: 5 },
  ]),
  ProductController.updateProduct
);

//get product details for seller
// route.get("/detailforSeller", checkAccessWithSecretKey(), ProductController.detailforSeller);
route.get("/detailforSeller",  ProductController.detailforSeller);

//delete product by seller
// route.delete("/delete", checkAccessWithSecretKey(), ProductController.deleteProduct);
route.delete("/delete",  ProductController.deleteProduct);

//get all products for seller
// route.get("/allProductForSeller", checkAccessWithSecretKey(), ProductController.getAll);
route.get("/allProductForSeller",  ProductController.getAll);

//handel the product is selected or not
// route.patch("/selectOrNot", checkAccessWithSecretKey(), ProductController.selectedOrNot);
route.patch("/selectOrNot",  ProductController.selectedOrNot);

//get all products selected for seller when seller going for live
route.get("/selectedProducts", checkAccessWithSecretKey(), ProductController.getSelectedProducts);
route.get("/selectedProducts",ProductController.getSelectedProducts);

//get category wise all products for user (gallery page)
// route.get("/categorywiseAllProducts", checkAccessWithSecretKey(), ProductController.getProductsForUser);
route.get("/categorywiseAllProducts", ProductController.getProductsForUser);

//get product details for user
// route.get("/detail", checkAccessWithSecretKey(), ProductController.productDetail);
route.get("/detail",  ProductController.productDetail);

//search products for user
// route.post("/search", checkAccessWithSecretKey(), ProductController.search);
route.post("/search", ProductController.search);

//previous search products for user
// route.get("/searchProduct", checkAccessWithSecretKey(), ProductController.searchProduct);
route.get("/searchProduct", ProductController.searchProduct);

//get all products filterWise for user
// route.post("/filterWiseProduct", checkAccessWithSecretKey(), ProductController.filterWiseProduct);
// route.post("/filterWiseProduct", checkAccessWithSecretKey(), ProductController.filterWiseProduct);
route.post("/filterWiseProduct",  ProductController.filterWiseProduct);

//handle the isOutofStock or not for admin panel
// route.patch("/isOutOfStock", checkAccessWithSecretKey(), ProductController.isOutOfStock);
route.patch("/isOutOfStock", ProductController.isOutOfStock);

//handle the isNewCollection or not for admin panel
// route.patch("/isNewCollection", checkAccessWithSecretKey(), ProductController.isNewCollection);
route.patch("/isNewCollection",  ProductController.isNewCollection);

//get all new collection for user (home page)
// route.get("/geAllNewCollection", checkAccessWithSecretKey(), ProductController.getAllisNewCollection);
route.get("/geAllNewCollection",  ProductController.getAllisNewCollection);

//get real products for admin
// route.get("/getRealProducts", checkAccessWithSecretKey(), ProductController.getRealProducts);
route.get("/getRealProducts", ProductController.getRealProducts);

//get fake products for admin
route.get("/getFakeProducts", checkAccessWithSecretKey(), ProductController.getFakeProducts);
route.get("/getFakeProducts", checkAccessWithSecretKey(), ProductController.getFakeProducts);

//get product details for admin panel
route.get("/productDetailsForAdmin", checkAccessWithSecretKey(), ProductController.productDetails);
route.get("/productDetailsForAdmin", checkAccessWithSecretKey(), ProductController.productDetails);

//get seller wise all products for admin panel
// route.get("/getSellerWise", checkAccessWithSecretKey(), ProductController.getSellerWise);
route.get("/getSellerWise", ProductController.getSellerWise);

//get top selling products for admin panel(dashboard)
// route.get("/topSellingProducts", checkAccessWithSecretKey(), ProductController.topSellingProducts);
route.get("/topSellingProducts", ProductController.topSellingProducts);

//get most popular products for admin panel(dashboard)
// route.get("/popularProducts", checkAccessWithSecretKey(), ProductController.popularProducts);
route.get("/popularProducts",  ProductController.popularProducts);

//get just for you products for user(home page)
// route.get("/justForYouProducts", checkAccessWithSecretKey(), ProductController.justForYou);
route.get("/justForYouProducts", ProductController.justForYou);

module.exports = route;
