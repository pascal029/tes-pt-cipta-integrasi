const AgeController = require("../controllers/ageController");

const router = require("express").Router();

router.get("/:dateofbirth", AgeController.calculateAge);

module.exports = router;
