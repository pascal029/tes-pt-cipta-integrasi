const BookingModel = require("../models/booking");

class BookingController {
  static async bookingKamar(req, res) {
    try {
      const input = {
        bookingdate: req.params.bookingdate,
        durasi: req.params.durasi,
      };
      await BookingModel.booking(input, (err, data) => {
        if (err) {
          res.status(400).json(false);
        } else {
          res.status(200).json(data);
        }
      });
    } catch (error) {
      res.status(400).json({ message: "true" });
    }
  }
}

module.exports = BookingController;
