$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();

    var arrayNumbers = [1, 5, 10, 50, 100, 500, 1000];
    var arrayNumerals = ["I", "V", "X", "L", "C", "D", "M"];
    var numberInput = parseInt($("#numberInput").val());

    for (var i = 0; i < 1; i++) {
      var indexOfNumber = arrayNumbers.indexOf(numberInput, 0);
      var numeralOutput = arrayNumerals[indexOfNumber];
      console.log(numeralOutput);
    }
    // var arrayNumbers = ["1", "5", "10", "50", "100", "500", "1000"];
    // var arrayNumerals = ["I", "V", "X", "L", "C", "D", "M"];
    // var numberInput = $("#numberInput").val();
    // var numberInputArray = numberInput.split("");
    //
    // for (var i = 0; i < numberInputArray.length; i++) {
    //   var indexOfNumber = arrayNumbers.indexOf(numberInput[i], 0);
    //   var numeralOutput = arrayNumerals[indexOfNumber];
    //   console.log(numeralOutput);
    // }




  });
});
