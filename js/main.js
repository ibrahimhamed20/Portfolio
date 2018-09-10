/*global $, alert, console*/
$(function () {
  'use strict';

  //  Adjust Slider height
  var winH = $(window).height(),
      navH = $('.navbar').innerHeight();
  $('header, .head-main').height( winH - navH );

  // Loader Page
  $(window).on("load", function() {
    $(".loader").fadeOut("slow");
    $(".loader-wrapper").slideUp("slow");
  });

  $("#typing-effect").typed({
    strings: ["I'm Ibrahim Hamed", "I'm Front End Developer"],//Change Page Heading Here
    typeSpeed: 30,
		backSpeed: 30,
    loop:true,
    showCursor:false
  });

  // Links add active class
  $('.navbar-nav li a').click(function () {
      $(this).parent().addClass('active').siblings().removeClass('active');
  });

  // Smoth Scroll To Website Section
  $('.navbar a').click(function () {
      $('html, body').animate({
          scrollTop: $('#' + $(this).data('value')).offset().top,
      }, 1000);
  });
});

function openLive() {
  var link = document.getElementById("linkPreview").innerHtml;
  window.open(link, "_blank");
  //location.href = document.getElementById("linkPreview").innerHtml;
};
