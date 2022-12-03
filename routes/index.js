const router = require("express").Router();
const booking = require("./booking");
const medicine = require("./medicine");
const salary = require("./salary");
const age = require("./age");

router.use("/bookingkamaroperasi", booking);
router.use("/hitunggaji", salary);
router.use("/validasialergiobat", medicine);
router.use("/calculateage", age);

module.exports = router;
