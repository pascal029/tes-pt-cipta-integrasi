const Age = require("../models/age");

class AgeController {
  static calculateAge(req, res) {
    const { dateofbirth } = req.params;
    Age.calculateAge(dateofbirth, (err, age) => {
      if (err) {
        res.status(500).json("Internal Server Error");
      } else {
        res.status(200).json(age);
      }
    });
  }
}

module.exports = AgeController;
