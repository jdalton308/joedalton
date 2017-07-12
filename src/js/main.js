$(function(){

  var $body = $('body');
  var $window = $(window);
  var $section = $('.section');
  var $about = $('#about');
  var $projects = $('#projects');
  var $toAbout = $('.arrow-button.about');
  var $toProjects = $('.arrow-button.projects');

  var isMobile = (window.innerWidth < 768);



  // Home screen
  //----------------
  var Landing = (function(){

    function scrollNav(target) {
      $body.animate({
        scrollTop: target.offset().top
      }, 400);
    }

    function init() {

      // "Nav"
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


      // If mobile, watch scroll and show, to-top-btn
      if (isMobile) {
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

    } // end init()

    return {
      init: init
    };
  })();

  Landing.init();



  // Projects Section
  //----------------
  var Projects = (function(){
    var $projectItems = $('.portfolio-item');

    function focusItem($el) {      
      var windowHeight = window.innerHeight;
      var windowWidth = window.innerWidth;

      var boundingRect = $el[0].getBoundingClientRect();
      var clonedStartStyles = {
        top: boundingRect.top,
        left: boundingRect.left,
        width: boundingRect.width,
        height: boundingRect.height,
      };

      var clonedEndStyles = {
        top: '40px',
        width: (windowWidth < 820) ? (windowWidth - 40) : 780,
        height: (windowHeight - 80),
        boxShadow: '0 0 200px 200px rgba(0,0,0,0.8)',
      };

      var $clonedCard = $el.clone().addClass('focused-item').css(clonedStartStyles);

      // - Add element
      $body.append($clonedCard);

      // - Animate element
      window.setTimeout(function(){
        $clonedCard.addClass('show').css(clonedEndStyles);
      }, 100);

      // - Bind close events
      bindCloseEvents($clonedCard, $el);
      $body.addClass('fixed');
    }


    function bindCloseEvents($el, $sourceCard) {
      // - Prevent click within card from closing
      $el.click(function(e){
        e.stopPropagation();
      });

      // - X click
      var $closeIcon = $el.find('.close-icon');
      $closeIcon.click(function(e){
        e.stopPropagation();
        collapseItem($el, $sourceCard);
      });

      // - Close when clicked anywhere outside
      $body.click(function(){
        collapseItem($el, $sourceCard);
      });
    }


    function collapseItem($el, $targetEl) {
      var targetBounding = $targetEl[0].getBoundingClientRect();
      var collapseStyle = {
        top: targetBounding.top,
        left: targetBounding.left,
        height: targetBounding.height,
        width: targetBounding.width,
        boxShadow: '0 0 5px #000',
      };

      $el.addClass('collapse').css(collapseStyle);

      window.setTimeout(function(){
        $el.remove();
        $body.removeClass('fixed');
      }, 800);
    }


    function bindEvents() {
      $projectItems.click(function(e){
        e.stopPropagation();
        focusItem($(this));
      });
    }


    function init() {
      bindEvents();
    }

    return {
      init: init
    };

  })();

  Projects.init();



});