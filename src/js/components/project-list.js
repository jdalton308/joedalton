
const projects = [
	{
		title: 'Tasty-Made',
		subtitle: 'Chipotle',
		features: [
			'GreenSock Animation Library',
			'Google Maps API & Styling',
			'Responsive',
		],
		duration: '2 weeks',
		date: 'Summer 2016',
		about: [
			'A single-page website built for a new Chipotle venture, Tasty-Made, as designed by <a href="http://www.sequence.com" target="_blank">Sequence</a>. The new shops ultimately failed, but the simple site featured an animated inforgraphic that expanded with the user\'s scroll, the store menu, and finally styled Google maps of each store location.',
		],
		images: [
			'/img/work/tastymade_desktop.jpg',
			'/img/work/tastymade_desktop2.jpg',
			'/img/work/tastymade_desktop3.jpg',
			'/img/work/tastymade_mobile.jpg',
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
		duration: '3 weeks',
		date: 'Summer 2016',
		about: [
			'This was a quick project that was intended to be used by the company SketchUp as their new "Team"/"About" page. They wanted to make something fun that could also be their first step toward a more lively design language. Their design team and I brainstormed for three days to conceptualize the product, then while building it we collaborated on the final design and interactions.',
			'The result is probably the most unique app I have built. On the surface it just looks like a webpage that has some parallax scroll effects, but anyone who plays with it will find an engaging and novel "employee sorter" that then leads to cards and a game about each employee. Then we added a couple easter-eggs, like an internal employee leaderboard, reflecting the different games played around their office.',
		],
		images: [
			'/img/work/sketchup_desktop1.jpg',
			'/img/work/sketchup_desktop2.jpg',
			'/img/work/sketchup_desktop3.jpg',
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
		duration: '3 weeks',
		date: 'Summer 2015',
		about: [
			'Designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, and something I built while employed there, this was a project that started as just a prototype complement our design deliverables, but Chevron was so satisfied with it that they asked us to produce the production site as well.',
			'There were three challenges with the site: Getting the video experiences to work across all devices; Using the browser\'s geolocation API to direct a button to a specific, regoinal, station-finder URL (which they ended up taking out); And allowing each individual video to be shared to social media, independent from the site.  While this was a simple site to build, these features made it a more fun experience, along with the little animations that they gave me some room to run with.'
		],
		images: [
			'/img/work/techron_desktop1.jpg',
			'/img/work/techron_desktop2.jpg',
			'/img/work/techron_desktop3.jpg',
			'/img/work/techron_mobile1.jpg',
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
		duration: '6 weeks',
		date: 'Fall 2015',
		about: [
			'This was a really fun app to build, and was designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, and built my me while employed there. It was a two week promotional game, where players spot the difference between two pictures. For three rounds, the player is challenged to find the difference between two images, tapping or clicking on the differences and trying to find all five, then they can submit their phone number to get a text message with a coupon for free chips and guacamole.',
			'The game was built with no JavaScript framework, as we were trying to keep it as lightweight and speedy as possible.  There are a lot of interactions and animations, which I had a lot of fun coming up with. But, as the game was designed to only be played in a landscape orientation, we ran into challenges with smaller phones, like the iPhone4. This led to the layout being a little different on very small phones, but also led me to make the game accessible as a <a href="//developers.google.com/web/fundamentals/getting-started/your-first-progressive-web-app/">progressive web app</a>. So if a player was on their phone, and they saved the page to their homescreen, like a bookmark, it would launch with an experience similar to a native app.  I am not sure how many users actually used this, but it did provide the best experience in the game, and worked on both iPhones and Android.',
			'Overall, the game was a big success, with almost 2 million plays in the first week.'
		],
		images: [
			'/img/work/guac_desktop1.jpg',
			'/img/work/guac_desktop2.jpg',
			'/img/work/guac_desktop3.jpg',
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
		duration: '4 weeks',
		date: 'Fall 2015',
		about: [
			'A five-day promotion that gave a free bowl of food, each day, in return for guessing a riddle correctly.',
			'This was a pretty simple app, but was fun to build, and was excellently designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>. The user would get three guesses at the daily riddle, then would get to enter their phone number and email to recieve a coupon for a free bowl of food. The promotion ran for five days, with a new riddle each day.',
			'The game was built with the AngularJS (1.x) framework. Interesting pieces included how the JavaScript determined the day, then would populate the language throughout the game accordingly, and working with a third-party API for the coupons. I think we could have done some more animations and made the game a little more visually fun, but it was short time-frame, was well recieved, everyone was happy the way it turned out.'
		],
		images: [
			'/img/work/riddle/desktop1.jpg',
			'/img/work/riddle/desktop2.jpg',
			'/img/work/riddle/mobile1.jpg',
			'/img/work/riddle/mobile2.jpg',
		],
	},
	{
		title: 'Pizzeria Locale',
		subtitle: 'Chipotle',
		url: '//www.pizzerialocale.com',
		features: [
			'Heavy Parallax Scroll Animation',
			'Google Maps API',
			'Responsive',
		],
		duration: '6 weeks',
		date: 'Spring 2016',
		about: [
			'Easily one of my favorite projects, this is a site that I was able to build from scratch, creating some heavy parallax scrolling effects, some unique Google Maps styling, and also integrated with their custom CMS built on Ruby on Rails.',
			'Designed by my coworkers at <a href="http://www.sequence.com" target="_blank">Sequence</a>, the designer had some very specific ideas about how the scrolling experience should be on the homepage and Menu page, which allowed us to collaborate a bit. There is also a locations page that interacts with the Google Maps API, and required me to create some specific styles for the map to match our site design.',
		],
		images: [
			'/img/work/pizzeria_desktop1.jpg',
			'/img/work/pizzeria_desktop2.jpg',
			'/img/work/pizzeria_desktop3.jpg',
			'/img/work/pizzeria_desktop4.jpg',
		],
	},
	{
		title: 'Care Portal',
		subtitle: 'Private',
		url: '//care-portal.joedalton.io',
		features: [
			'Angular.js (1.x)',
			'High-Fidelity Prototype',
			'CSS Animation',
			'Video',
		],
		duration: '2 weeks',
		date: 'Spring 2015',
		about: [
			'A short but fun project, again at <a href="http://www.sequence.com" target="_blank">Sequence</a>, where I developed this high-fidelity prototype to complement our design deliverables, which detailed an experience to allow patients and their doctors to communicate easier by allowing users (either doctors or patients) to create profiles and their own network.',
			'Easily the highlight of the project was the animations that overlays the login screen\'s video, which can be seen using the link above. This was done completely with CSS, allowing the copy to be changed anytime. Other fun parts were making almost all the information editable, creating sliders and percentage bars from HTML, and a lot of little animations throughout the app that made it feel a bit more alive.',
		],
		images: [
			'/img/work/care-portal/login1.jpg',
			'/img/work/care-portal/login2.jpg',
			'/img/work/care-portal/doctor-patient-editing.jpg',
			'/img/work/care-portal/doctor-patients.PNG',
			'/img/work/care-portal/doctor-profile.jpg',
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
		duration: '6 weeks',
		date: '2017',
		about: [
			'While employed at Athlinks, I collaborated on a redesign of the whole web app, and built the new homepage, while also created most of the animations and interactions, with every part built in React.js',
		],
		images: [
			'/img/work/athlinks_desktop1.jpg',
			'/img/work/athlinks_desktop2.jpg',
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
		duration: '4 weeks',
		date: 'Spring 2016',
		about: [
			'This is a site built for a friend in support of his passion project: Yall Collective. This friend, who grew up in the southern US and was living in New York City, felt that other southerners who had migrated North had some, not only interesting, but inspirational stories to tell about thier journey. So he interviewed these people and wrote their stories on this site.',
			'The site was designed by this friend (who is a designer), then was built in two stages: Since the site was planned to be built as a Wordpress theme, but had a desired launch date quicker than the theme could be finished, we had to a \'soft\' launch of a static site, then a few weeks later launch the full-featured Wordpress site after the theme was finished.',
		],
		images: [
			'/img/work/yall_desktop1.jpg',
			'/img/work/yall_desktop2.jpg',
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
		duration: '2 weeks',
		date: 'Summer 2016',
		about: [
			'Working with my awesome friend <a href="https://www.linkedin.com/in/theko" target="_blank">Ko</a>, we came up with a fun anti-Trump site that has a physical experience on a mobile phone.',
			'What started as just a site to turn your phone to the side and trip somebody turned into a fun, anti-Trump website. My very talented friend <a href="https://www.linkedin.com/in/theko" target="_blank">Ko</a> came up with most of the designs, and together we figured out the interactions and user experience.  Mostly, we just tried to keep the page as simple as possible, but also incorporate a live, global trip-counter and let people share the page on social media.',
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
		duration: '4 weeks',
		date: 'Summer 2016',
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

export default projects;