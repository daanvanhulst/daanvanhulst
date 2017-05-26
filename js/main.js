	// Ready translated locale messages
	var messages = {
		en: {
			GENERAL: {
				LANGUAGE_LABEL: 'Language'
			},
			HOME: {
				WELCOME: 'I am Daan van Hulst, a freelance developer under the company name \'Ascentio\'',
				ABOUT_US: 'About me',
				ABOUT_US_INTRO: 'My name is Daan van Hulst and I am a freelance software developer. I specialise in full stack web development using JavaScript and C#.',
				ABOUT_US_CONTENT: 'Born in the Netherlands (Veldhoven), my software development carreer began when I started my Bachelor degree at Avans hogeschool in Den Bosch. I have always been very interested in software development processes and quality insurance, so I did my graduation assigment at Info Support on improving JavaScript code quality in combination with ASP.NET web API. After working for several interesting companies as software developer and consultant, I decided I wanted a bigger challenge. To start my own company. <br/><br/> I have worked with a wide range of languages, but feel most comfortable with C# using ASP.NET (Core) for back end development. And for front end development I have worked intensively with Angular.js and Vue.js, but have also done projects with Angular 2+ and React. My choice of database would be SQL, Oracle or MongoDB depending on the project.<br/><br/> On my blog you will find examples of code I have written or small tutorials I wrote which helped me clarify certain challenges I ran into.',
				SERVICE_HEADER: "What can I do for you?",
				SERVICE_CONTENT: "As a developer I have worked on several projects, using various techniques, frameworks and tools.",
			}
		}
	};

	// Create VueI18n instance with options
	var i18n = new VueI18n({
		locale: 'en', // set locale
		messages, // set locale messages
	})

	// Create a Vue instanc with `i18n` option
	new Vue({
		el: '#app',
		i18n
	});
	// Now the app has started!

	$(document).ready(function () {

		$("#portfolio-contant-active").mixItUp();

		$("#testimonial-slider").owlCarousel({
			paginationSpeed: 500,
			singleItem: true,
			autoPlay: 3000,
		});

		$("#clients-logo").owlCarousel({
			autoPlay: 3000,
			items: 5,
			itemsDesktop: [1199, 5],
			itemsDesktopSmall: [979, 5],
		});

		$("#works-logo").owlCarousel({
			autoPlay: 3000,
			items: 5,
			itemsDesktop: [1199, 5],
			itemsDesktopSmall: [979, 5],
		});

		// google map
		var map;

		function initMap() {
			map = new google.maps.Map(document.getElementById('map'), {
				center: {
					lat: -34.397,
					lng: 150.644
				},
				zoom: 8
			});
		}

		// Counter
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	});