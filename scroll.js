window.onload = function () {
  // Declare global variables
  var container = d3.select("#scroll");
  var graphic = container.select(".scroll__graphic");
  var text = container.select(".scroll__text");
  var step = text.selectAll(".step");

  function updateGraphic(index) {
    const sel = container.select(`[data-step='${index}']`);
    step.classed("step--active", (d, i) => i === index);

    switch (index) {
      case 0:
        // Center image
        break;
      case 1:
        // Hide boats
        break;
      case 2:
        // Highlight China
        break;
      case 3:
        // Show #shop, move shopping cart
        break;
      case 4:
        // Show #dining, #computer at 50% progression
        break;
      case 5:
        // Hide #dining, #computer
        break;
      case 6:
        // Show boats, fewer in number
        break;
      case 7:
        // Hide boats, highlight Russia and Ukraine
        break;
      default:
      // Show boats on load
    }
  }

  function progressGraphic(progress) {}

  // On load, do this...
  function init() {
    enterView({
      selector: ".step",
      offset: 0, // .275
      enter: (el) => {
        const index = +d3.select(el).attr("data-step");
        updateGraphic(index);
      },
      exit: (el) => {
        let index = +d3.select(el).attr("data-step");
        index = Math.max(0, index - 1);
        updateGraphic(index);
      },
      progress: (el, progress) => {
        progressGraphic(progress);
      },
    });
  }

  init();
};
