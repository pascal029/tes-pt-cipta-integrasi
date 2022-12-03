const MedicineController = require("../controllers/medicineController");

const router = require("express").Router();

router.post("/", MedicineController.validasialergiobat);
module.exports = router;
