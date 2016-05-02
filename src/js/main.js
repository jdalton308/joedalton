$(function(){

  // Home screen
  var Landing = (function(){

    var $start = $('.start-btn');
    var $nextBtn = $('.next-arrow');
    var $logo = $('.logo');

    function init() {
      $start.click(function(){
        var $this = $(this);
        var $cont = $this.parents('.text-cont');
        var $line1 = $this.siblings('.line-1');
        var $line2 = $this.siblings('.line-2');
        var $line3 = $this.siblings('.line-3');
        
        $cont.addClass('start');

        // show first line of text
        window.setTimeout(function(){
          $line1.addClass('start');
          
          // wait 2.8s, then show second line of text
          window.setTimeout(function(){
            $line2.addClass('start');

            // wait 2s, hide text
            window.setTimeout(function(){
              $line1.addClass('hide');
              $line2.addClass('hide');

              // wait, 1s, show last line, and arrows
              window.setTimeout(function(){
                $cont.addClass('end');
                $line1.hide();
                $line2.hide();
                // $line3.addClass('start');

                // wait 0.5s, show logo
                window.setTimeout(function(){ // stop here /////
                  $logo.addClass('show');
                  $nextBtn.addClass('show');
                }, 500);
              }, 1200);
            }, 3000)
          }, 2800);
        }, 1000);
        
      });
    }

    return {
      init: init
    };
  })();

  Landing.init();

});