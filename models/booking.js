const fs = require("fs");
class Booking {
  constructor(id, bookingdate, duration) {
    (this.id = id),
      (this.bookingdate = bookingdate),
      (this.duration = duration);
  }
}

class ManageDb {
  static findBooking(cb) {
    fs.readFile("./data/booking.json", "utf-8", (err, data) => {
      if (err) {
        cb(err);
      } else {
        data = JSON.parse(data);
        cb(null, data);
      }
    });
  }
  static saveToJson(data, cb) {
    fs.writeFile(
      `./data/booking.json`,
      JSON.stringify(data, null, 2),
      (err) => {
        if (err) {
          cb(err);
        } else {
          cb(null, data);
        }
      }
    );
  }
}

class BookingModel {
  static endBook(date, interval, duration) {
    interval = +interval + +duration;
    date.setHours(date.getHours() + interval);

    return date;
  }
  static booking(input, cb) {
    ManageDb.findBooking((err, bookings) => {
      if (err) {
        cb(false);
      } else {
        let newId = 1;
        let canBook;
        let bookingdate = input.bookingdate.split("-").map((el) => {
          return Number(el);
        });
        bookingdate = new Date(...bookingdate);
        let listBook = bookings.filter(
          (date) =>
            new Date(date.bookingdate).toLocaleDateString() ==
            bookingdate.toLocaleDateString()
        );
        if (listBook.length > 0) {
          newId = bookings[bookings.length - 1].id + 1;

          const latestBooking = listBook.reduce(function (a, b) {
            return a > b ? a : b;
          });
          const firstBooking = listBook.reduce(function (a, b) {
            return a < b ? b : a;
          });
          if (bookingdate > new Date(latestBooking.bookingdate)) {
            const endOfLatestBooking = this.endBook(
              new Date(latestBooking.bookingdate),
              2,
              latestBooking.duration
            );
            canBook = endOfLatestBooking <= bookingdate ? true : false;
          } else {
            const endOfFirstBooking = this.endBook(
              new Date(bookingdate),
              2,
              input.durasi
            );

            canBook =
              endOfFirstBooking <= new Date(firstBooking.bookingdate)
                ? true
                : false;
          }

          if (!canBook) {
            return cb("false");
          }
        }
        let newBooking = new Booking(newId, bookingdate, input.durasi);
        bookings.push(newBooking);

        ManageDb.saveToJson(bookings, (err) => {
          if (err) {
            cb(err);
          } else {
            cb(null, true);
          }
        });
      }
    });
  }
}
module.exports = BookingModel;
