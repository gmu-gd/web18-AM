$(document).ready(function() {
    // run function on initial page load
    studentHeight();
    menuSlide();
    clickableDiv();
    printLink();

    // run function on resize of the window
    $(window).resize(function() {
      
    })
    // run function on scroll
    $(window).scroll(function() {
      
    })
});

var textHeight = $('.student h2').outerHeight();

function studentHeight() {
  var headHeight = $('header').outerHeight();
  console.log('Header Height ' + headHeight);
  var pageHeight = $(window).height();
  console.log('Page Height ' + pageHeight);
  var height = ((pageHeight - headHeight) / 4);
  console.log('Height ' + height);
  var topPadding = ((height - textHeight) / 2);
  console.log('Top Padding ' + topPadding);
  $('.student').css("height", height);
  $('.student').css("background-color", height);
  $('.menu-list').css("height", (height * 4));
  $('.student h2').css("padding-top", topPadding);
}

function menuSlide() {
  $('.menu-icon').click(function() {
    $('body').toggleClass('lock-y');
    $('.hamburger').toggleClass('is-active');
    $('.menu-list').toggleClass('menu-animate', 500);
  });
}

function clickableDiv() {
  $('.student').click(function() {
    window.location = $(this).find("a").attr("href");
  });
}

function printLink() {
  var url = $(location).attr('href');
  console.log(date);
  $('#page-url').text(url);
}