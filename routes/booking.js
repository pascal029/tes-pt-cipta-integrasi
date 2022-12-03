const BookingController = require("../controllers/bookingController");
const router = require("express").Router();

router.get("/:bookingdate/:durasi", BookingController.bookingKamar);

module.exports = router;
