
var ProjectList = require('./project-list');



// Elements
//----------------

var $body = $('body');
var $projectList = $('#projects');

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
  }, 50);

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
  var $projectItems = $('.portfolio-item');

  $projectItems.click(function(e){
    e.stopPropagation();
    focusItem($(this));
  });
}


function buildProjects() {
  var $projects = ProjectList.projects.map(function(project){
    var $newItem = $(ProjectList.itemTemplate);
    $newItem.find('.subtitle').text(project.subtitle);
    $newItem.find('.project-title').text(project.title);
    $newItem.find('.arrow-button').attr('href', project.url);

    var $features = $newItem.find('.feature-list');
    project.features.forEach(function(feature){
      $features.append('<p>'+ feature +'</p>');
    });

    var $about = $newItem.find('.about-list');
    project.about.forEach(function(paragraph){
      $about.append('<p>'+ paragraph +'</p>')
    });

    var $images = $newItem.find('.image-content');
    if (project.images.length) {
      project.images.forEach(function(url){
        $images.append('<img src="'+ url +'" />');
      });
    } else {
      $images.append('<p class="no-image-message">Images coming soon</p>')
    }

    return $newItem;
  });

  $projectList.append($projects);
}


function init() {
  buildProjects();
  bindEvents();
}



module.exports.init = init;