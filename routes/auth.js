const express = require("express");
const router = express.Router();
const controller = require("../controllers/auth");
const isLogged = require("../middlewares/isLogged");
const isAdmin = require("../middlewares/isAdmin");

router.post('/signup', controller.signup);

router.post('/login', controller.login);

router.get('/me', isLogged, controller.getMyUserInfo);

router.get('/users', isLogged, isAdmin, controller.getAllUsers);

module.exports = router;