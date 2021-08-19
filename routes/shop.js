const path = require("path");

const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getShop);

router.get("/customers", shopController.getCustomers);

router.get("/about", shopController.getInfo);

module.exports = router;
