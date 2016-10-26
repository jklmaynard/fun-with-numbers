var Equation = {
  number: 0,
  numberMinusOne: function(number) {
    return number-1;
  },
  numberZeros: function(number, numberMinusOne) {
    return number * Math.pow(2, numberMinusOne);
  },
  numberOnes: function(numberZeros, number) {
    return numberZeros + Math.pow(2, number);
  }
};

$(document).ready(function(event) {
  $("button#return").hide();
  $("form#binaryCocktail").submit(function(event) {
    event.preventDefault();

    var equation = Object.create(Equation);
    var inputtedNumber = $("input#number").val();
    var inputtedNumberMinusOne = equation.numberMinusOne(inputtedNumber);
    var zeros = equation.numberZeros(inputtedNumber, inputtedNumberMinusOne);
    var zerosStringified = zeros.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    var ones = equation.numberOnes(zeros, inputtedNumber).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    $("div#number").append(
      "<h3> And the results are in! </h3>" +
      "<h4> For 2 to the power of " + inputtedNumber + " the cocktail is:</h4>" +
      "<h4 class='answer'>" + zerosStringified + " parts zero, and " + ones + " parts one! </h4>").show();
    $("div#intro").hide();
    $("div#form").hide();
    $("button#return").show();
  });

  $("button#return").click(function(event) {
    $("div#number").empty().hide();
    $("button#return").hide();
    $("div#intro").show();
    $("input#number").val("");
    $("div#form").show();
  });
});
