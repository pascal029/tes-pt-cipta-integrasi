const SalaryController = require("../controllers/salaryController");

const router = require("express").Router();

router.post("/", SalaryController.hitunggaji);

module.exports = router;
