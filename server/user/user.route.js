//express
const express = require("express");
const route = express.Router();

//multer
const multer = require("multer");
const storage = require("../../util/multer");
const upload = multer({ storage });

const checkAccessWithSecretKey = require("../../util/checkAccess");

//controller
const UserController = require("./user.controller");

//user login and sign up
// route.post("/login", checkAccessWithSecretKey(), UserController.store);
route.post("/login",  UserController.store);

//check the user is exists or not
// route.post("/checkUser", checkAccessWithSecretKey(), UserController.checkUser);
route.post("/checkUser",  UserController.checkUser);

//check the user's password wrong or true
// route.post("/checkPassword", checkAccessWithSecretKey(), UserController.checkPassword);
route.post("/checkPassword",  UserController.checkPassword);

//get user profile who login
// route.get("/profile", checkAccessWithSecretKey(), UserController.getProfile);
route.get("/profile",  UserController.getProfile);

//get all users for admin panel
// route.get("/", checkAccessWithSecretKey(), UserController.get);
route.get("/",  UserController.get);

//update profile of user
// route.patch("/update", checkAccessWithSecretKey(), upload.single("image"), UserController.updateProfile);
route.patch("/update",  upload.single("image"), UserController.updateProfile);

//update password
// route.patch("/updatePassword", checkAccessWithSecretKey(), UserController.updatePassword);
route.patch("/updatePassword",  UserController.updatePassword);

//set password
// route.post("/setPassword", checkAccessWithSecretKey(), UserController.setPassword);
route.post("/setPassword",  UserController.setPassword);

//user block or unbolck for admin panel
// route.patch("/blockUnblock", checkAccessWithSecretKey(), UserController.blockUnblock);
route.patch("/blockUnblock",  UserController.blockUnblock);

//get all top customers (users) for admin panel(dashboard)
route.get("/topCustomers",  UserController.topCustomers);
// route.get("/topCustomers", checkAccessWithSecretKey(), UserController.topCustomers);

module.exports = route;
