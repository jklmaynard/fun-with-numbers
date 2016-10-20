var collatz = function (num) {
  if (num === 1) {
    return console.log(num + ' is the loneliest number')
  } else if (num % 2 === 0) {
    return num/2
  } else if (num % 2 !== 0) {
    return (num*3)+1;
  }
};
var conjecture = function (num) {
  var x = num
  while (x !== 1) {
    if (x === num) {
      x = collatz(num)
    } else {
      x = collatz(x)
    }
    console.log(x);
  }
  console.log(x + ' is the lonelinest number');
};

$(document).ready(function() {
  $('.scroll').click(function(event) {
    var y = $(window).scrollTop();
    $(window).scrollTop(y + 800);
  });
  $('.collatz-number-scroll').click(function() {
    var num = $('#collatz-number').val();
    conjecture(num);
    var y = $(window).scrollTop();
    $(window).scrollTop(y + 800);
  })
});
