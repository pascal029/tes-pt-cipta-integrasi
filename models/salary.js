class Salary {
  static pajakIndonesia(statusPerkawinan, gajiBersih) {
    const tarifPTKP =
      statusPerkawinan == "TK" ? 25 : statusPerkawinan == "K0" ? 50 : 75;

    const penghasilanNetto = gajiBersih * 12 - tarifPTKP;
    let pajak;
    if (penghasilanNetto > 50 && penghasilanNetto <= 250) {
      const layer1 = (50 * 5) / 100;
      const layer2 = ((penghasilanNetto - 50) * 10) / 100;
      pajak = layer1 + layer2;
    } else if (penghasilanNetto > 250) {
      const layer1 = (50 * 5) / 100;
      const layer2 = ((penghasilanNetto - 50) * 15) / 100;
      pajak = layer1 + layer2;
    } else {
      pajak = (penghasilanNetto * 5) / 100;
    }
    pajak = (pajak / 12).toFixed(3) + ".000";
    return pajak;
  }

  static pajakVietnam(statusPerkawinan, gajiBersih, asuransi) {
    const tarifPTKP = statusPerkawinan == "Belum kawin" ? 15 : 30;
    let pajak, layer1, layer2;
    gajiBersih *= 12;
    asuransi *= 12;

    const penghasilanNetto = gajiBersih - asuransi - tarifPTKP;
    if (penghasilanNetto <= 50) {
      (pajak = penghasilanNetto * 2.5) / 100;
    } else {
      layer1 = (50 * 2.5) / 100;
      layer2 = ((penghasilanNetto - 50) * 7.5) / 100;

      pajak = layer1 + layer2;
    }

    pajak = (pajak / 12).toFixed(3) + ".000";
    return pajak;
  }

  static hitunggaji(input, cb) {
    let pajak;
    if (input.kewarganegaraan == "indonesia") {
      pajak = this.pajakIndonesia(input.statusPerkawinan, input.gajiBersih);
    } else if (input.kewarganegaraan == "vietnam") {
      pajak = this.pajakVietnam(
        input.statusPerkawinan,
        input.gajiBersih,
        input.asuransi
      );
    }
    cb(null, pajak);
  }
}

module.exports = Salary;
