// Comments
console.log("loadingapp.js");
const vizContainer = document.getElementById("vizContainer");
const url =
  "https://public.tableau.com/views/LearnEmbeddedAnalytics/SalesOverviewDashboard?:language=en-GB&:display_count=y&:origin=viz_share_link";
const options = {
  device: "desktop",
  height: 800,
  width: 1000,
};

let viz;

// button constant
const hideViz = document.getElementById("hideViz");
const showViz = document.getElementById("showViz");
const Central = document.getElementById("Central");
const North = document.getElementById("North");
const South = document.getElementById("South");
const revertBTn = document.getElementById("revertBtn");

// function to initiate viz
function initViz() {
  console.log("loadingviz");
  viz = new tableau.Viz(vizContainer, url, options);
}

document.addEventListener("DOMContentLoaded", initViz);

// function to hide viz
function hidetableau() {
  console.log("hiding viz");
  viz.hide();
}

// function to show viz
function showtableau() {
  console.log("showing viz");
  viz.show();
}

// function for filtering

// when to execute the hide function
hideViz.addEventListener("click", hidetableau);

// when to execute the show function
showViz.addEventListener("click", showtableau);

// function for filtering to region
function filterRegion(value) {
  const sheetoffilter = viz
    .getWorkbook()
    .getActiveSheet()
    .getWorksheets()
    .get("Sales Map");
  console.log(sheetoffilter);

  sheetoffilter.applyFilterAsync(
    "Region",
    value,
    tableau.FilterUpdateType.REPLACE
  );
}

// looping through filters and obtain the value
document.querySelectorAll(".filter").forEach((button) => {
  console.log(button);
  button.addEventListener("click", (e) => filterRegion(e.target.value));
});

// revert function
function revertTableau() {
  console.log("reverting viz");
  viz.revertAllAsync();
}

// link to the revertBtn
revertBTn.addEventListener("click", revertTableau);
