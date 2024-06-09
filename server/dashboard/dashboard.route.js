const express = require("express");
const route = express.Router();

//Controller
const dashboardController = require("./dashboard.controller");

//checkAccessWithSecretKey
const checkAccessWithSecretKey = require("../../util/checkAccess");

//get admin panel dashboard
// route.get("/", checkAccessWithSecretKey(), dashboardController.dashboard);
route.get("/",  dashboardController.dashboard);

//get date wise analytic for users
// route.get("/analyticOfUsers", checkAccessWithSecretKey(), dashboardController.analyticOfUsers);
route.get("/analyticOfUsers", dashboardController.analyticOfUsers);

//get date wise analytic for orders
// route.get("/analyticOfOrders", checkAccessWithSecretKey(), dashboardController.analyticOfOrders);
route.get("/analyticOfOrders",  dashboardController.analyticOfOrders);

//get date wise chartAnalytic for users
// route.get("/chartAnalyticOfUsers", checkAccessWithSecretKey(), dashboardController.chartAnalyticOfUsers);
route.get("/chartAnalyticOfUsers",  dashboardController.chartAnalyticOfUsers);

module.exports = route;
