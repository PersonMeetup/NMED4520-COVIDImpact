window.onload = function() {
	// Declare global variables
	var container = d3.select('#scroll');
	var graphic = container.select('.scroll__graphic');
	var text = container.select('.scroll__text');
	var step = text.selectAll('.step');

	/*
	// Initialize Scrollama library
	var scroller = scrollama();

	function handleResize() {
		var stepHeight = Math.floor(window.innerHeight * 0.75);
		$step.style('height', stepHeight + 'px');

		$graphic
			.style('height', window.innerHeight + 'px');

		scroller.resize();
	}

	// Scrollama event handlers

	function handlerStepEnter(responce) {
		var stepData = $step.attr('data-step');
		console.log(stepData);
	}*/

	function updateGraphic(index) {
		const sel = container.select(`[data-step='${index}']`);
		step.classed('step--active', (d, i) => i === index);
	}

	// On load, do this...
	function init() {
		enterView({
						selector: '.step',
						offset: 0.275,
						enter: el => {
							const index = +d3.select(el).attr('data-step');
							updateGraphic(index);
						},
						exit: el => {
							let index = +d3.select(el).attr('data-step');
							index = Math.max(0, index - 1);
							updateGraphic(index);
						}
		})

		/*
		// Call a resize on load to update sizes and positions of elements
		handleResize();

		// Set up the Scrollama instance and bind event handlers
		scroller
			.setup({
				container: '#scroll',
				graphic: '.scroll__graphic',
				text: '.scroll__text',
				step: '.scroll__text .step',
				offset: 0.1,
				debug: true,
			})
			.onStepEnter(handlerStepEnter)
			.onContainerEnter(handleContainerEnter)
			.onContainerExit(handleContainerExit);

		// Setup resize event
		window.addEventListener('resize', handleResize);*/
	}

	init();
}