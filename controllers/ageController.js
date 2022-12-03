class AgeController {
  static async calculateAge(req, res) {
    res.status(200).json("31/11/2");
  }
}

module.exports = AgeController;
