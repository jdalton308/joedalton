$(function(){

  var $body = $('body');
  var $window = $(window);
  var $start = $('.start-btn');
  var $skipBtn = $('.skip-btn');
  var $cont = $start.parents('.text-cont');
  var $nextBtn = $('.next-arrow');
  var $logo = $('.logo');
  var $line1 = $start.siblings('.line-1');
  var $line2 = $start.siblings('.line-2');
  var $line3 = $start.siblings('.line-3');

  var isMobile = (window.innerWidth < 768);

  // Home screen
  //----------------
  var Landing = (function(){

    // function _play() {
    //   $cont.addClass('start');

    //   // show first line of text
    //   window.setTimeout(function(){
    //     $line1.addClass('start');
        
    //     // wait 2.8s, then show second line of text
    //     window.setTimeout(function(){
    //       $line2.addClass('start');

    //       // wait 2s, hide text
    //       window.setTimeout(function(){
    //         $line1.addClass('hide');
    //         $line2.addClass('hide');

    //         // wait, 1s, show last line, and arrows
    //         window.setTimeout(function(){
    //           $cont.addClass('end');
    //           $line1.hide();
    //           $line2.hide();
    //           // $line3.addClass('start');

    //           // wait 0.5s, show logo
    //           window.setTimeout(function(){ // stop here /////
    //             $logo.addClass('show');
    //             $nextBtn.addClass('show');
    //           }, 500);
    //         }, 1200);
    //       }, 3000)
    //     }, 2800);
    //   }, 1000);
    // }

    // function skipIntro() {
    //   $cont.addClass('start');
    //   $logo.addClass('show');
    //   $nextBtn.addClass('show');
    // }

    function init() {
      // var beenBefore = (window.sessionStorage.joedalton === 'true');

      // if (beenBefore) {
      //   skipIntro();
      // } else {

      //   // Bind starting animation event
      //   $start.click(function(){
      //     _play();

      //     // remember that user was here
      //     window.sessionStorage.setItem('joedalton', 'true');
      //   });
      // }


      // Bind nav-arrow events
      $nextBtn.click(function(){
        var $this = $(this);
        var target = $this.data('target');
        var $targetSection = $('#section-'+ target);

        if (isMobile) {
          var scrollTarget = $targetSection.offset().top;
          $body.animate({
            scrollTop: scrollTarget
          }, 500);
        } else {
          var fixed = $this.hasClass('fixed');

          $targetSection.toggleClass('focus', !fixed);
          $this.toggleClass('fixed');
        }
      });


      // Skip Button
      // $skipBtn.click(function(){
      //   skipIntro();
      // });


      // Click on logo, and replay animation
      // $logo.click(function(){
      //   $logo.removeClass('show');
      //   $nextBtn.removeClass('show');

      //   $cont.removeClass('end');
      //   $line1.removeClass('hide start').show();
      //   $line2.removeClass('hide start').show();

      //   _play();
      // });

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


  // Back Bars
  //----------------
  // $('.back-bar').click(function(){
  //   $(this).closest('.side-section').removeClass('focus');
  // });

});