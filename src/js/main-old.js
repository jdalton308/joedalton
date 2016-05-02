
// TODO:
// Form validation
// Form submital


// When mobile, hide the nav menu on scroll event
//------------------------------------------------
// function initMenu() {

//   var width = window.innerWidth;

//   if (width < 768) {
//     var nav = $('.mainNav');
//     var menuButton = $('.mobileMenuButton');
//     var topBar = $('.topBar');

//     var showMenu = function(){
//       topBar.addClass('open');
//       menuButton.addClass('open');
//     }
//     var hideMenu = function(){
//       topBar.removeClass('open');
//       menuButton.removeClass('open');
//     }

//     $(window).scroll(function(){
//       // console.log('SCROLL!');
//       if ($(this).scrollTop() <= 10) {
//         showMenu();
//       } else {
//         hideMenu();
//       }
//     });

//     // Show mobile menu and the animation on initial page load
//     showMenu();

//     // Show mobile menu on click
//     menuButton.click(function(){
//       topBar.toggleClass('open');
//       $(this).toggleClass('open');
//     });
//   }
// }


// Animate the scroll event within page
//------------------------------------------------
// function initScroll() {
//   $('a[href^="#"]').on('click', function (e) {
//     e.preventDefault();

//     var $target = $(this.hash);
//     console.log('Target:');
//     console.log($target);

//       $('body').stop().animate({
//           'scrollTop': $target.offset().top - 110
//       }, 500, 'swing', function () {
//           //window.location.hash = target;
//       });
//   });
// }


// Load work examples
//------------------------------------------------
// function initWork() {
//   var $trigger = $('.hover-slide');
//   var $overlay = $('.work-overlay');
//   var $container = $overlay.find('.content');
//   var $close = $overlay.find('.close');

//   // On click, load the page template into the overlay, then show the overlay
//   $trigger.click(function(){
//     var $this = $(this);
//     var name = $this.data('name');
//     var url = '/work/' + name + '.html';

//     // Load work page into overlay
//     $.ajax({
//       url: url
//     }).then(function(data){
//       // put html into container and show with css
//       $container.html(data);
//       $overlay.addClass('show');
//     });
//   });

//   // Event to close overlay
//   $close.click(function(e){
//     e.stopPropagation();

//     $overlay.removeClass('show');
//   });
// }

// 
//----------------------------------------



// $(function(){
//   initMenu();
//   initScroll();
//   initWork();
// });