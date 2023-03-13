window.onload = function () {
  // Declare global variables
  var container = d3.select("#scroll");
  var graphic = container.select(".scroll__graphic");
  var text = container.select(".scroll__text");
  var step = text.selectAll(".step");

  function updateGraphic(index) {
    const sel = container.select(`[data-step='${index}']`);
    step.classed("step--active", (d, i) => i === index);
  }

  // On load, do this...
  function init() {
    enterView({
      selector: ".step",
      offset: 0.275,
      enter: (el) => {
        const index = +d3.select(el).attr("data-step");
        updateGraphic(index);
      },
      exit: (el) => {
        let index = +d3.select(el).attr("data-step");
        index = Math.max(0, index - 1);
        updateGraphic(index);
      },
    });
  }

  init();
};
