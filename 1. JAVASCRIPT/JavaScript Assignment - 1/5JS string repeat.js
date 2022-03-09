function repeatStringNumTimes(string, times) {
    var repeatedString = "";
    while (times > 0) {
      repeatedString += string;
      times--;
    }
    return repeatedString;
  }
  document.write(repeatStringNumTimes("x", 20) + "</br>");
  document.write(repeatStringNumTimes("-", 30) + "</br>");