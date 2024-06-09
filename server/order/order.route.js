const express = require("express");
const route = express.Router();

//Controller
const orderController = require("./order.controller");

const checkAccessWithSecretKey = require("../../util/checkAccess");

//create order by the user
// route.post("/create", checkAccessWithSecretKey(), orderController.createOrder);
route.post("/create",  orderController.createOrder);

//update statusWise the order by seller and admin
// route.patch("/updateOrder", checkAccessWithSecretKey(), orderController.updateOrder);
route.patch("/updateOrder",  orderController.updateOrder);

//cancel the order by user
// route.patch("/cancelOrderByUser", checkAccessWithSecretKey(), orderController.cancelOrderByUser);
route.patch("/cancelOrderByUser",  orderController.cancelOrderByUser);

//get status wise order counts for seller
// route.get("/orderCountForSeller", checkAccessWithSecretKey(), orderController.orderCountForSeller);
route.get("/orderCountForSeller",  orderController.orderCountForSeller);

//get status wise order details for seller
// route.get("/orderDetailsForSeller", checkAccessWithSecretKey(), orderController.orderDetailsForSeller);
route.get("/orderDetailsForSeller",  orderController.orderDetailsForSeller);

//get status wise order details for user
// route.get("/orderDetailsForUser", checkAccessWithSecretKey(), orderController.orderDetailsForUser);
route.get("/orderDetailsForUser",  orderController.orderDetailsForUser);

//get all orders for admin
// route.get("/getOrders", checkAccessWithSecretKey(), orderController.getOrders);
route.get("/getOrders",  orderController.getOrders);

//get particular user's status wise orders for admin (user)
// route.get("/ordersOfUser", checkAccessWithSecretKey(), orderController.ordersOfUser);
route.get("/ordersOfUser",  orderController.ordersOfUser);

//get particular seller's status wise orders for admin (Seller)
// route.get("/ordersOfSeller", checkAccessWithSecretKey(), orderController.ordersOfSeller);
route.get("/ordersOfSeller",  orderController.ordersOfSeller);
// route.get("/ordersOfSeller", checkAccessWithSecretKey(), orderController.ordersOfSeller);
route.get("/ordersOfSeller",  orderController.ordersOfSeller);

//get particular orderWise order details for admin
// route.get("/orderDetails", checkAccessWithSecretKey(), orderController.orderDetails);
route.get("/orderDetails",  orderController.orderDetails);
// route.get("/orderDetails", checkAccessWithSecretKey(), orderController.orderDetails);
route.get("/orderDetails",  orderController.orderDetails);

//get recent orders for admin (dashboard)
// route.get("/recentOrders", checkAccessWithSecretKey(), orderController.recentOrders);
route.get("/recentOrders", orderController.recentOrders);

module.exports = route;
