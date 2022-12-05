const Medicine = require("../models/medicine");

class MedicineController {
  static async validasialergiobat(req, res) {
    const { pasien, resep } = req.body;

    const input = {
      alergi: pasien.alergi,
      resep,
    };

    Medicine.validasialergi(input, (err, data) => {
      if (err) {
        res.status(500).json("Internal server error");
      } else {
        res.status(200).json(data);
      }
    });
  }
}

module.exports = MedicineController;
