const fs = require("fs");
class ManageDb {
  static findBooking(cb) {
    fs.readFile("./data/medicine.json", "utf-8", (err, data) => {
      if (err) {
        cb(err);
      } else {
        data = JSON.parse(data);
        cb(null, data);
      }
    });
  }
}
class Medicine {
  static validasialergi(input, cb) {
    ManageDb.findBooking((err, obat) => {
      if (err) {
        cb(err);
      } else {
        let listAlergi = [];

        obat.forEach((obatDb) => {
          for (const x in obatDb) {
            obatDb[x].forEach((kandunganObat) => {
              if (kandunganObat == input.alergi) listAlergi.push({ obat: x });
            });
          }
        });

        cb(null, { resep: listAlergi });
      }
    });
  }
}

module.exports = Medicine;
