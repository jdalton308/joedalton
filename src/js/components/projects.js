
import ProjectList from './project-list';
import ItemTemplate from './item-template';



// Elements
//----------------

var $body = document.querySelector('body');
var $projectList = document.querySelector('#projects');

var isMobile = (window.innerWidth < 768);



// Projects Section
//----------------

function focusItem($el) {      
  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;

  var boundingRect = $el.getBoundingClientRect();
  var clonedStartStyles = {
    top: boundingRect.top +'px',
    left: boundingRect.left +'px',
    width: boundingRect.width +'px',
    height: boundingRect.height +'px',
  };

  var clonedEndStyles = {
    top: '40px',
    width: ((windowWidth < 820) ? (windowWidth - 40) : 780) +'px',
    height: (windowHeight - 80) +'px',
    boxShadow: '0 0 200px 200px rgba(0,0,0,0.8)',
  };

  var $clonedCard = $el.cloneNode(true);
  $clonedCard.classList.add('focused-item');
  Object.assign($clonedCard.style, clonedStartStyles);

  // - Add element
  $body.appendChild($clonedCard);

  // - Animate element
  window.setTimeout(function(){
    $clonedCard.classList.add('show');
    Object.assign($clonedCard.style, clonedEndStyles);
  }, 50);

  // - Bind close events
  bindCloseEvents($clonedCard, $el);
  $body.classList.add('fixed');
}

//--------

function bindCloseEvents($el, $sourceCard) {
  // - Prevent click within card from closing
  $el.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // - X click
  var $closeIcon = $el.querySelector('.close-icon');
  $closeIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    collapseItem($el, $sourceCard);
  });

  // - Close when clicked anywhere outside
  $body.addEventListener('click', () => {
    collapseItem($el, $sourceCard);
  });
}

//--------


function collapseItem($el, $targetEl) {
  var targetBounding = $targetEl.getBoundingClientRect();
  var collapseStyle = {
    top: targetBounding.top +'px',
    left: targetBounding.left +'px',
    height: targetBounding.height +'px',
    width: targetBounding.width +'px',
    boxShadow: '0 0 5px #000',
  };

  $el.classList.add('collapse');
  Object.assign($el.style, collapseStyle);

  window.setTimeout(function(){
    $el.remove();
    $body.classList.remove('fixed');
  }, 750);
}

//--------

function bindEvents() {
  var $projectItems = document.querySelectorAll('.portfolio-item');

  $projectItems.forEach(($el) => {
    $el.addEventListener('click', (e) => {
      e.stopPropagation();
      focusItem($el);
    });
  });
}

//--------

function buildProjects() {
  const docRange = document.createRange();

  var $projects = ProjectList.forEach((project) => {

    // var $newItem = $(ProjectList.itemTemplate);
    const $newItem = docRange.createContextualFragment(ItemTemplate);

    $newItem.querySelector('.subtitle').textContent = project.subtitle;
    $newItem.querySelector('.project-title').textContent = project.title;

    const $linkBtn = $newItem.querySelector('.arrow-button');
    if (project.url) {
      $linkBtn.setAttribute('href', project.url);
    } else {
      $linkBtn.remove();
    }

    $newItem.querySelector('.duration').insertAdjacentHTML('beforeend', '<p>'+ project.duration +'</p>');
    $newItem.querySelector('.date').insertAdjacentHTML('beforeend', '<p>'+ project.date +'</p>');

    var $features = $newItem.querySelector('.feature-list');
    project.features.forEach((feature) => {
      $features.insertAdjacentHTML('beforeend', '<p>'+ feature +'</p>');
    });

    var $about = $newItem.querySelector('.about-list');
    project.about.forEach((paragraph) => {
      $about.insertAdjacentHTML('beforeend', '<p>'+ paragraph +'</p>')
    });

    var $images = $newItem.querySelector('.image-content');
    if (project.images.length) {
      project.images.forEach(function(url){
        $images.insertAdjacentHTML('beforeend', '<img src="'+ url +'" />');
      });
    } else {
      $images.insertAdjacentHTML('beforeend', '<p class="no-image-message">Images coming soon</p>')
    }

    $projectList.appendChild($newItem);
  });

}

//--------

function init() {
  buildProjects();
  bindEvents();
}


export default init;