const Salary = require("../models/salary");

class SalaryController {
  static hitunggaji(req, res) {
    const { employee, komponengaji } = req.body;
    const input = {
      statusPerkawinan: employee.simbol,
      kewarganegaraan: employee.kewarganegaraan.toLowerCase(),
      gajiBersih: komponengaji[0].gajiBersih,
      asuransi: komponengaji.length > 1 ? komponengaji[1].asuransi : 0,
    };

    Salary.hitunggaji(input, (err, pajak) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(pajak);
      }
    });
  }
}

module.exports = SalaryController;
