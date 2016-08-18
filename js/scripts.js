// business logic

function romanize(number){

  roman = "";
  var romanNumerals = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  var integers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  for (var i = 0; i < integers.length; i++) {
    while (number >= integers[i]) {
      roman += romanNumerals[i];
      number -= integers[i];
    };
  };
  return roman;
};



// user interface logic


$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();

    inputNumber = parseInt($("#numberInput").val());

    if (inputNumber > 3999) {
      $(".wrong-input").show();
      $("#wrong-input").text(inputNumber);
    } else if (inputNumber < 1) {
      $(".no-negatives").show();
      $("#no-negatives").text(inputNumber);
    } else {
    romanize(inputNumber);
    $(".result").show();
    $("#roman-output").text(roman);
    }

    // romanize(inputNumber);
    //
    // $(".result").show();
    // $("#roman-output").text(roman);

  });
});

// Deprecated code, alternative routes:

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


// Working js for numbers bigger than 1000

// if numberInput <= 1000 {
// for(var i=1 ; i<=(numberInput/1000) ; i++) {
//   roman += "M";
//   multiply = i;
// }
// numberInput -= 1000 * multiply;
//   for (var = 1; i <= (numberInput/100) || ; i++) {
//
//   }
// }

// arrayNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 50, 100, 500, 1000];
// arrayNumerals = ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "L", "C", "D", "M"];
//
// function easypart(number) {
//   var output = arrayNumerals[arrayNumbers.indexOf(number, 0)];
//   console.log(output);
// };
