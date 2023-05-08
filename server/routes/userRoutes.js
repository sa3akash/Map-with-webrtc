const userController = require("../controllers/userController");

const userRoutes = require("express").Router();

userRoutes.post("/register", userController.register);
userRoutes.post("/login", userController.login);




module.exports = userRoutes;
