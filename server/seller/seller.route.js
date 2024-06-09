//express
const express = require("express");
const route = express.Router();

//multer
const multer = require("multer");
const storage = require("../../util/multer");
const upload = multer({ storage });

const checkAccessWithSecretKey = require("../../util/checkAccess");

//controller
const sellerController = require("./seller.controller");

//seller login
// route.post("/login", checkAccessWithSecretKey(), sellerController.sellerLogin);
route.post("/login", sellerController.sellerLogin);

//update real seller profile by admin
// route.patch("/update", checkAccessWithSecretKey(), upload.fields([{ name: "image" }]), sellerController.updateSellerProfile);
route.patch("/update",  upload.fields([{ name: "image" }]), sellerController.updateSellerProfile);

//get seller profile who is login
// route.get("/getProfile", checkAccessWithSecretKey(), sellerController.getProfile);
route.get("/getProfile",  sellerController.getProfile);

//get all real seller for admin
// route.get("/getRealSeller", checkAccessWithSecretKey(), sellerController.getRealSeller);
route.get("/getRealSeller",  sellerController.getRealSeller);

//seller is block or not
// route.patch("/blockUnblock", checkAccessWithSecretKey(), sellerController.blockUnblock);
route.patch("/blockUnblock",  sellerController.blockUnblock);

//get the top sellers for admin(dashboard)
// route.get("/topSellers", checkAccessWithSecretKey(), sellerController.topSellers);
route.get("/topSellers",  sellerController.topSellers);

//get seller wallet for admin
// route.get("/sellerWallet", checkAccessWithSecretKey(), sellerController.sellerWallet);
route.get("/sellerWallet",  sellerController.sellerWallet);

//update password
// route.patch("/updatePassword", checkAccessWithSecretKey(), sellerController.updatePassword);
route.patch("/updatePassword",  sellerController.updatePassword);

//set password
// route.post("/setPassword", checkAccessWithSecretKey(), sellerController.setPassword);
route.post("/setPassword",  sellerController.setPassword);

//create fake seller by admin
route.post(
  "/createFakeSeller",
  // checkAccessWithSecretKey(),
  upload.fields([{ name: "video" }, { name: "image" }]),
  sellerController.createFakeSeller
);

//update fakeSeller profile for admin
route.patch(
  "/updateFakeSellerProfile",
  // checkAccessWithSecretKey(),
  upload.fields([{ name: "video" }, { name: "image" }]),
  sellerController.updateFakeSellerProfile
);

//fakeSeller is live or not handled for admin
// route.patch("/liveOrNot", checkAccessWithSecretKey(), sellerController.liveOrNot);
route.patch("/liveOrNot",  sellerController.liveOrNot);

//get all fake seller for admin
// route.get("/getFakeSeller", checkAccessWithSecretKey(), sellerController.getFakeSeller);
route.get("/getFakeSeller",  sellerController.getFakeSeller);

//get all fake sellers when reel or product create by the admin (dropdown)
// route.get("/fakeSellers", checkAccessWithSecretKey(), sellerController.fakeSellers);
route.get("/fakeSellers",  sellerController.fakeSellers);

//delete fake seller for admin
// route.delete("/deleteSeller", checkAccessWithSecretKey(), sellerController.deleteSeller);
route.delete("/deleteSeller",  sellerController.deleteSeller);

module.exports = route;
