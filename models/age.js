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
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    let currentDay = today.getDate();
    let currentMonth = today.getMonth() + 1;
    let currentYear = today.getFullYear();
    let birthDay = dateofbirth.getDate();
    let birthMonth = dateofbirth.getMonth() + 1;
    let birthYear = dateofbirth.getFullYear();

    if (birthDay > currentDay) {
      currentDay = currentDay + month[currentMonth - 1];
      currentMonth = currentMonth - 1;
    }
    if (birthMonth > currentMonth) {
      currentMonth = currentMonth + 12;
      currentYear = currentYear - 1;
    }

    cb(null, {
      umur: {
        year: currentYear - birthYear,
        month: currentMonth - birthMonth,
        day: currentDay - birthDay,
      },
    });
  }
}

module.exports = Age;
