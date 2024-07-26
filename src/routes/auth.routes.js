const express = require("express");
const router = express.Router();

const { login, dashboard } = require("../controllers/auth.controller");
const authMiddleware = require("../middleware/auth.middleware");

router.route("/login").post(login);
router.route("/dashboard").get(authMiddleware, dashboard);

module.exports = router;