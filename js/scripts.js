var height = window.innerHeight;
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
  var num, y, arr, i;
  // Reloading the page
  $('.refresh-button').click(function() {
    location.reload();
  });
  // New page height
  $('#intro').css('height', height);
  $('#number').css('height', height);
  setTimeout(function() {
    if ($(window).scrollTop() > 0) {
      $('body').animate({ scrollTop: $("#intro").offset().top }, 'slow');
    }
  }, 100);
  // Click event for ready to calculate
  $('.scroll').click(function(event) {
    $('body').animate({ scrollTop: $("#number").offset().top }, 1000);
  });
  // Click event for calculation and population
  $('.collatz-number-scroll').click(function() {
    num = $('#collatz-number').val();
    if (num.length === 0) {
      return false;
    }
    arr = conjecture(num);
    $('body').animate({ scrollTop: $("#conjectureflow1").offset().top }, 1000);
    // Run thrugh array, adding a number div and appending to #conjecture-array-container
    arr.forEach(function(index) {
      var index_num = arr.indexOf(index);
      var el = "<div class='col-md-2 number-container' id='array-index-number-" + index_num + "''><h3>" + index + "</h3></div>"
      $('#conjecture-array-container').append(el);
    });
  });
});
