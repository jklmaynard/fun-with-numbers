var collatz = function (num) {
  if (num === 1) {
    return
  } else if (num % 2 === 0) {
    return num/2
  } else if (num % 2 !== 0) {
    return (num*3)+1;
  }
};

var conjecture = function (num) {
  var x = num;
  var arr = [];
  while (x !== 1) {
    if (x === num) {
      x = collatz(num)
      arr.push(x);
    } else {
      x = collatz(x)
      arr.push(x);
    }
  }
  return arr;
};

$(document).ready(function() {
  $('.scroll').click(function(event) {
    var y = $(window).scrollTop();
    $(window).scrollTop(y + 800);
  });
  $('.collatz-number-scroll').click(function() {
    var num, y, arr;
    num = $('#collatz-number').val();
    arr = conjecture(num);
    y = $(window).scrollTop();
    $(window).scrollTop(y + 800);
    if (arr.length < 10) {
      arr.forEach(function(index) {
        $('#conjecture-array-container').append('<div class="col-md-1">' + index + '</div>');
      });
    }
  });
});
