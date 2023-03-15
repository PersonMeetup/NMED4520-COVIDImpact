window.onload = function () {
  // Declare global variables
  var graphic = document.getElementById("scroll__graphic");

  // On load, do this...
  function init() {
    enterView({
      selector: ".step",
      offset: 0.275, // .275
      enter: (el) => {
        const index = el.getAttribute("data-step");
        graphic.className = `scroll__graphic--step${index}`;
      },
      exit: (el) => {
        let index = el.getAttribute("data-step");
        index = Math.max(0, index - 1);
        graphic.className = `scroll__graphic--step${index}`;
      },
    });

    enterView({
      selector: "#scroll__graphic",
      offset: 0,
      progress: (el, progress) => {
        const map = el.querySelector("#map");
        map.style.height = progress * 100 + "%";
      },
    });
  }

  init();
};
