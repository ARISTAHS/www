$(document).ready(function() {
	
	$('#myPortfolio').fullpage({
		menu: '#menu',
		
		// sectionsColor: ['#61bd6d', '#4BBFC3',  '#7BAABE', 'whitesmoke', '#ccddff', 'skyblue','#f8f8f8'],
		anchors:       ['home', 'profile', 'pc',  'mobile', 'media', 'bootstrap','wordpress'],
		
		scrollOverflow:true,
		slidesNavigation: true,
		continuousVertical: true,

		//loopTop: true,
		//loopBottom: true,
		
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['HOME', 'PROFILE', 'PC', 'MOBILE', 'MEDIA', 'BOOTSTRAP','WORDPRESS'],

		fadingEffect: true,
		//fadingEffect: false,
		fadingEffectKey: 'YWx2YXJvdHJpZ28uY29tXzAzN1ptRmthVzVuUldabVpXTjBiNXo=',
		
		//scrollBar: false,
        //scrollBar: true,

		//scrollingSpeed: 700,
		//autoScrolling: true,
        //fitToSection: true,
        //fitToSectionDelay: 1000,
		
		lazyLoading: true,

		//Accessibility
        keyboardScrolling: true,
		animateAnchor: true,
        recordHistory: true,
		
		//verticalCentered: true,
		verticalCentered: false,

		//to avoid problems with css3 transforms and fixed elements in Chrome, as detailed here: https://github.com/alvarotrigo/fullPage.js/issues/208
		css3: false,

		// easing: 'easeOutBounce'
		
		//easingcss3: 'easeInOutCubic'								
		//easingcss3: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'				
		//easingcss2: 'cubic-bezier(0.175, 0.885, 0.320, 1.275)'

		// responsiveWidth:1024
		
	});
		
});