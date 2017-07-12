
var $ = require('jquery');



// Elements
//----------------

var $body = $('body');
var $window = $(window);
var $about = $('#about');
var $projects = $('#projects');
var $toAbout = $('.arrow-button.about');
var $toProjects = $('.arrow-button.projects');

var isMobile = (window.innerWidth < 768);



// Home screen
//----------------

function scrollNav(target) {
  $body.animate({
    scrollTop: target.offset().top
  }, 400);
}


function initNav() {
  $toAbout.click(function(){
    if (isMobile) {
      console.log('click');
      scrollNav($about);
    } else {
      $body.addClass('right');
    }
  });

  $toProjects.click(function(){
    if (isMobile) {
      scrollNav($projects);
    } else {
      $body.removeClass('right');
    }
  });
}


function initTopButton() {
  $topBtn = $('.to-top-btn');

  $window.scroll(function(){
    var scrollPos = $window.scrollTop();
    $topBtn.toggleClass('show', (scrollPos > 700));
  });

  $topBtn.click(function(){
    $body.animate({
      scrollTop: 0
    }, 500);
  });
}


function init() {

  initNav();

  // If mobile, watch scroll and show, to-top-btn
  if (isMobile) {
    initTopButton();
  }
}


// Landing.init();
module.exports.init = init;