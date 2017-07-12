
var $ = require('jquery');



// Elements
//----------------

var $body = $('body');
var $projectItems = $('.portfolio-item');

var isMobile = (window.innerWidth < 768);



// Projects Section
//----------------

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



module.exports.init = init;