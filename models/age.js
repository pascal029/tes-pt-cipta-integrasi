class Age {
  static calculateAge(dateofbirth, cb) {
    dateofbirth = new Date(
      dateofbirth
        .split("-")
        .reverse()
        .map((el) => +el)
        .join("-")
    );
    const today = new Date();
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dateofbirth.getDate() > currentDay) {
      currentDay += month[currentMonth - 1];
      currentMonth -= 1;
    }
    if (dateofbirth.getMonth() > currentMonth) {
      currentMonth += 12;
      currentYear -= 1;
    }

    cb(null);
  }
}

module.exports = Age;
