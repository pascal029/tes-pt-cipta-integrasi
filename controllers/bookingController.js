const BookingModel = require("../models/booking");

class BookingController {
  static bookingKamar(req, res) {
    const input = {
      bookingdate: req.params.bookingdate,
      durasi: req.params.durasi,
    };
    BookingModel.booking(input, (err, data) => {
      if (err) {
        res.status(400).json(false);
      } else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports = BookingController;
