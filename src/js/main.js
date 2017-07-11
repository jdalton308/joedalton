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



  // Work Section
  //----------------
  var Work = (function(){
    var $section = $('#section-work');
    var $workItems = $section.find('.work-item');
    var $workCont = $section.find('.work-container');
    var $workDetails = $workCont.find('.work-item-details');
    var $closeBtn = $workCont.find('.close-icon');

    function getWork( name ) {
      return $.ajax({
        url: '/work/' + name + '.html',
        type: 'get'
      });
    }
    function closeWork() {
      $workCont.removeClass('show');
    }

    function init() {
      $workItems.click(function(){
        var $this = $(this);
        var name = $this.data('work');
        getWork( name ).then(function(data){
          $workDetails.html(data);
          $workCont.addClass('show');
        });
      });

      $closeBtn.click(function(){
        closeWork();
      });
    }

    return {
      init: init
    };
  })();

  Work.init();


});