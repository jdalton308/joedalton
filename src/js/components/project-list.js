
var itemTemplate =
	'<div class="portfolio-item">' +
    '<h4 class="subtitle"></h4>' +
    '<h2 class="project-title"></h2>' +
    '<div class="close-icon">' +
      '<span class="line line-x"></span>' +
      '<span class="line line-y"></span>' +
    '</div>' +
    '<div class="content">' +
      '<div class="copy-content">' +
    		'<a class="button arrow-button" target="_blank" href="">Visit<img src="/img/arrow.svg" /></a>' +
        '<h4 class="underline">Features</h4>' +
        '<div class="feature-list">' +
        '</div>' +
        '<h4 class="underline">About</h4>' +
        '<div class="about-list">' +
        '</div>' +
      '</div>' +
      '<div class="image-content">' +
      '</div>' +
    '</div>' +
  '</div>';


var projects = [
	{
		title: 'TastyMade',
		subtitle: 'Chipotle',
		url: '//www.tastymade.com',
		features: [
			'GreenSock Animation Library',
			'Google Maps Styling',
			'Responsive',
		],
		about: [
			'A single-page website built for a new brand of Chipotle: Tasty-Made.  The simplicity of the site reflects the simplicity of business, which is just burgers and shakes.  Found on the site are an animated inforgraphic, breaking down the burger components, the store menu, and styled Google maps of each store location.',
			'The site was designed by Chipotle\'s internal design team, then passed off to me.  The animation of the burger opening, controlled by scrolling, is the main feature of the site, and was the most fun to develop. Getting the animations to be responsive while remaining performant was the largest challenge, but I\'m happy with how it turned out.',
		],
		images: [
		],
	},
	{
		title: 'Team Page App',
		subtitle: 'Sketchup',
		url: '//icebreaker.joedalton.io',
		features: [
			'GreenSock Animation Library',
			'SVG',
			'Easter Eggs',
			'Responsive',
		],
		about: [
			'This was a quick project that was intended to be used by the company SketchUp as their new "Team"/"About" page.  They wanted to make something fun that could also be their first step toward a more lively design language.  So, their design team and I went through an abbreviated design sprint in three days to conceptualize the product, then I created a prototype, and finally we collaborated on the final design and interactions.',
			'The result is probably the most unique app I have built.  On the surface it just looks like a webpage that has some parallax scroll effects, but anyone who plays with it will find an engaging and novel "employee sorter" that then leads to cards and a game about each employee.  Then we added a couple easter-eggs, like an internal employee leaderboard, reflecting the different games played around their office.',
			'In building the webpage, the most difficult element was easily all the scroll behavior.  I was asked to make text blur,  elements to move into position at different speeds, backgrounds to rotate, and to show scroll progress on a nav-bar.  This made it fun to build, we all recognized that the performance suffered by these enhancements.  But, nonetheless, it definitely accomplishes our goal of showing off the personality of the SketchUp team.'
		],
		images: [
		],
	},
	{
		title: 'Techron',
		subtitle: 'Chevron',
		url: '//www.techron.com',
		features: [
			'CSS Animation',
			'Social Share API',
			'HTML5 Video',
			'Responsive',
		],
		about: [
			'Designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, this was a project that started as just a prototype complement our design deliverables, but Chevron was so satisfied with it that they asked us to produce the production site as well.',
			'There were three challenges with the site: Getting the video experiences to work across all devices; Using the browser\'s geolocation API to direct a button to a specific, regoinal, station-finder URL (which they ended up taking out); And allowing each individual video to be shared to social media, independent from the site.  While this was a simple site to build, these features made it a more fun experience, along with the little animations that they gave me some room to run with.'
		],
		images: [
		],
	},
	{
		title: 'Guac Hunter',
		subtitle: 'Chipotle',
		url: '//guac-hunter.joedalton.io',
		features: [
			'Highly Interactive',
			'Progressive Web App',
			'Social APIs',
			'3rd Party API',
			'Responsive',
			'CSS Animation',
		],
		about: [
			'This was a really fun app to build, and was designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>.  It was a two week promotional game, where players spot the difference between two pictures.  For three rounds, the player is challenged to find the difference between two images, tapping or clicking on the differences and trying to find all five, then they can submit their phone number to get a text message with a coupon for free chips and guacamole.',
			'The game was built with no JavaScript framework, as we were trying to keep it as lightweight and speedy as possible.  There are a lot of interactions and animations, which I had a lot of fun coming up with. But, as the game was designed to only be played in a landscape orientation, we ran into challenges with smaller phones, like the iPhone4. This led to the layout being a little different on very small phones, but also led me to make the game accessible as a <a href="//developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/">progressive web app</a>.  So if a player was on their phone, and they saved the page to their homescreen, like a bookmark, it would launch with an experience similar to a native app.  I am not sure how many users actually used this, but it did provide the best experience in the game, and worked on both iPhones and Android.',
			'Overall, the game was a big success, with almost 2 million plays in the first week.'
		],
		images: [
		],
	},
	{
		title: 'Riddle-a-Day',
		subtitle: 'ShopHouse Kitchen',
		url: '//shophouseriddle.joedalton.io',
		features: [
			'Angular.js (1.x)',
			'3rd Party API',
			'Responsive',
		],
		about: [
			'A five-day promotion that gave a free bowl of food, each day, in return for guessing a riddle correctly.',
			'This was a pretty simple app, but was fun to build, and was excellently designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>.  The user would get three guesses at the daily riddle, then would get to enter their phone number and email to recieve a coupon for a free bowl of food.  The promotion ran for five days, with a new riddle each day.',
			'The game was built with the AngularJS (1.x) framework.  Interesting pieces included how the JavaScript determined the day, then would populate the language throughout the game accordingly, and working with a third-party API for the coupons.  I think we could have done some more animations and made the game a little more visually fun, but it was short time-frame, was well recieved, everyone was happy the way it turned out.'
		],
		images: [
			'/img/work/riddle/desktop1.png',
			'/img/work/riddle/desktop2.png',
			'/img/work/riddle/mobile1.png',
			'/img/work/riddle/mobile2.png',
		],
	},
	{
		title: 'Pizzeria Locale',
		subtitle: 'Chipotle',
		url: '//www.pizzerialocale.com',
		features: [
			'Full Website',
			'Parallax Scroll Animation',
			'Google Maps API',
			'Responsive',
		],
		about: [
			'Easily one of my favorite projects, this is a site that I was able to build from scratch, creating some parallax scrolling effects, some unique Google Maps styling, and also integrated with their custom CMS built on Ruby on Rails.',
			'Designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, this was a really fun product to build.  The designer had some very specific ideas about how the scrolling experience should be on the homepage and Menu page, which allowed us to collaborate a bit. This was my first time implementing a parallax effect, and I think we were all pretty happy with the result.  There is also a locations page that interacts with the Google Maps API, and required me to create some specific styles for the map to match our site design.',
			'One of my favorite features turned out to be the navigation menu, which takes over the page on desktop and mobile. The designer and I came up with a step-wise way to show the nav and then fade-in the text, which creates a simple but nice experience. Another unique design was their Inspiration page, which had a request to scale proportionately with the window size, rather than use breakpoints. To do this, everything on the page is sized relative to the screen\'s height and width, and I am pretty happy with the outcome.'
		],
		images: [
		],
	},
	{
		title: 'Care Portal',
		subtitle: 'Medtronic',
		url: '//care-portal.joedalton.io',
		features: [
			'Angular.js (1.x)',
			'High-Fidelity Prototype',
			'CSS Animation',
			'Video',
		],
		about: [
			'A short but fun project, where we developed a high-fidelity prototype to complement our design deliverables.  Thus, this was an Angular app, built in about two weeks.',
			'The app was designed to allow patients and their doctors to communicate easier by allowing users (either doctors or patients) to create profiles and their own network.  In this prototype, I created both a doctor\'s view and a patient\'s view, with each profile being fully editable.',
			' One of my favorite pieces, which was probably the most challenges, was the animations that overlay the login screen\'s video. This was done completely with CSS, utilizing some looping Sass functions. Other fun parts were making almost all the information editable, creating sliders and percentage bars from HTML, and a lot of little animations throughout the app that made it feel a bit more alive.'
		],
		images: [
			'/img/work/care-portal/login1.PNG',
			'/img/work/care-portal/login2.PNG',
			'/img/work/care-portal/doctor-patient-editing.PNG',
		],
	},
	{
		title: 'Athlinks.com',
		subtitle: 'Athlinks',
		url: '//www.athlinks.com',
		features: [
			'React.js',
			'Large Team Project',
			'Video',
		],
		about: [
			'While this is something I was only marginally involved in, most of the front-end code within the app I have touched.  As a member of the design team at this company, I was mostly responsible for making sure the site and app looked the way the design was intended, but we also created most of the animations and interactions, the loading spinner, and the homepage, with every part built in React.js',
		],
		images: [
		],
	},
	{
		title: 'Yall.co',
		subtitle: 'Yall Collective',
		url: '//www.yall.co',
		features: [
			'Typography',
			'Wordpress',
			'Responsive',
		],
		about: [
			'This is a site built for a friend in support of his passion project: Yall Collective. This friend, who also is from the South, felt that other people who had migrated to New York had some not only interesting, but inspirational stories to tell about thier journey.  So, this site features profiles, Q&amp;A\'s, and essays about these people.',
			'The site was designed by this friend, then built in two stages. Since the site was planned to be built as a Wordpress theme, but had a desired launch date quicker than the theme could be finished, we had to a \'soft\' launch of a static site, then a few weeks later launch the full-featured Wordpress site after the theme was finished.',
			'This was a really fun project, and the first Wordpress theme I developed from scratch. Most of the interesting development aspects surrounded giving the writer of the posts the control to create many different layout options.  In the end, my friend and I both are happy with the site.'
		],
		images: [
		],
	},
	{
		title: 'Trip Trump',
		subtitle: 'Personal Project',
		url: '//trip-trump.joedalton.io',
		features: [
			'CSS Animation',
			'Mobile Device Interaction',
			'Google Firebase',
			'Responsive',
		],
		about: [
			'Working with my awesome friend <a href="https://www.linkedin.com/in/theko" target="_blank">Ko</a>, we came up with a fun anti-Trump site that has a physical experience on a mobile phone.',
			'What started as just a site to turn your phone to the side and trip somebody turned into a fun, anti-Trump website. My very talented friend <a href="https://www.linkedin.com/in/theko" target="_blank">Ko</a> came up with most of the designs, and together we figured out the interaction and user experience.  Mostly, we just tried to keep the page as simple as possible, but also incorporate a live, global trip-counter and let people share the page on social media.',
			'Technically, the site sits on Google\'s Firebase platform, which uses web sockets to make the trip-counter into a live scoreboard. There is very little JavaScript on the page, and the whole mobile experience of turning the phone and having Mr. Trump fall over is driven by just CSS. So, techincally the site is pretty simple as well.'
		],
		images: [
			'/img/work/trump_socialimage.png',
		],
	},
	{
		title: 'Joe + Van',
		subtitle: 'Personal Project',
		url: '//www.joeplusvan.com',
		features: [
			'Node.js',
			'AWS',
			'CSS Animation',
			'Responsive',
			'Instagram API',
		],
		about: [
			'A personal blog site to share some of my adventures. I designed and planned the entire site, which was the most fun part.  As expected, the site is completely responsive, and uses analytics and open-graph tags.',
			'The biggest challenge of the site, for me, was building the web server on Node.js. This was my first project with Node, and my first project where I built the server, so I had to learn a bit. First I built the server using just the Node API, then switched to using the Express framework. The site sits on an Amazon Web Services EC2 instance, and uses the node module <a href="//www.npmjs.com/package/pm2" target="_blank">pm2</a> to run continually. Aside from the Node server, the only unique aspects of the site are the HTML art on the landing screen and the integration with the Instagram API. The blog also uses Amazon advertisements, but that was a very non-technical integration.',
			'I am pretty excited to have the site up, although I have been a little slow to post the articles I planned to write. If you visit, click the landing image to add more birds.',
		],
		images: [
			'/img/work/vanblog.png',
		],
	},
];


module.exports.itemTemplate = itemTemplate;
module.exports.projects = projects;