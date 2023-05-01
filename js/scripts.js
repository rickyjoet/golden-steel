import $ from 'jquery';

$(document).ready(function() {
  console.log(`jquery ready`);


$('.mobile-nav .lines').on('click', function(e) {
  console.log('mobile nav clicked');
  $('.navigation ul').addClass('show-nav');

});

$('.navigation ul li.mobile .lines').on('click', function(e) {
  console.log('clicked close icon');
  $('.navigation ul').removeClass('show-nav');

});

var date = new Date();
date = date.getFullYear();
$('.year').text(date);

});