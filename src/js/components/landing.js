
// Elements
//----------------

var $body = document.querySelector('body');
// var $window = document.querySelector(window);
var $about = document.querySelector('#about');
var $projects = document.querySelector('#projects');
var $toAbout = document.querySelector('.arrow-button.about');
var $toProjects = document.querySelector('.arrow-button.projects');

var isMobile = (window.innerWidth < 768);



// Home screen
//----------------

function scrollNav(target) {
  window.scroll({
    top: target.offset().top,
    left: 0,
    behavior: 'smooth',
  });
}


function initNav() {
  $toAbout.addEventListener('click', () => {
    if (isMobile) {
      console.log('click');
      scrollNav($about);
    } else {
      $body.classList.add('right');
    }
  });

  $toProjects.addEventListener('click', () => {
    if (isMobile) {
      scrollNav($projects);
    } else {
      $body.classList.remove('right');
    }
  });
}


function initTopButton() {
  $topBtn = document.querySelector('.to-top-btn');

  // $window.scroll(function(){
  //   var scrollPos = $window.scrollTop();
  //   $topBtn.toggleClass('show', (scrollPos > 700));
  // });

  $topBtn.addEventListener('click', () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  });
}


function init() {

  initNav();

  // If mobile, watch scroll and show, to-top-btn
  if (isMobile) {
    initTopButton();
  }
}


export default init;