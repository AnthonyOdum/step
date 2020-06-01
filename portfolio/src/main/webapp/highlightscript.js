// document.getElementById("about").addEventListener("mouseover", highlightAbout);
// document.getElementById("about").addEventListener("mouseout", unhighlight);

function highlightAbout() {
  document.getElementById("aboutlabel").style.cssText = "font-family: 'Permanent Marker', cursive; transition: 1s;";
  document.getElementById("wrapper").style.backgroundColor  = "green";
  document.getElementById("wrapper").style.transition = "1s";
}

function highlightProjects() {
  document.getElementById("projectslabel").style.cssText = "font-family: 'Permanent Marker', cursive; transition: 1s;";
  document.getElementById("wrapper").style.backgroundColor  = "blueviolet";
  document.getElementById("wrapper").style.transition = "1s";
}

function highlightResume() {
  document.getElementById("resumelabel").style.cssText = "font-family: 'Permanent Marker', cursive; transition: 1s;";
  document.getElementById("wrapper").style.backgroundColor  = "orangered";
  document.getElementById("wrapper").style.transition = "1s";
}

function highlightLinkedIn() {
  document.getElementById("linkedinlabel").style.cssText = "font-family: 'Permanent Marker', cursive; transition: 1s;";
  document.getElementById("wrapper").style.backgroundColor  = "#0e76a8";
  document.getElementById("wrapper").style.transition = "1s";
}

function highlightGithub() {
  document.getElementById("githublabel").style.cssText = "font-family: 'Permanent Marker', cursive; transition: 1s;";
  document.getElementById("wrapper").style.backgroundColor  = "black";
  document.getElementById("wrapper").style.transition = "1s";
}

function unhighlightAbout() {
  document.getElementById("aboutlabel").style.cssText = "font-family: 'Poiret One', cursive; color: white;";
  document.getElementById("wrapper").style.backgroundColor  = "deepskyblue";
}

function unhighlightProjects() {
  document.getElementById("projectslabel").style.cssText = "font-family: 'Poiret One', cursive; color: white;";
  document.getElementById("wrapper").style.backgroundColor  = "deepskyblue";
}

function unhighlightResume() {
  document.getElementById("resumelabel").style.cssText = "font-family: 'Poiret One', cursive; color: white;";
  document.getElementById("wrapper").style.backgroundColor  = "deepskyblue";
}

function unhighlightLinkedIn() {
  document.getElementById("linkedinlabel").style.cssText = "font-family: 'Poiret One', cursive; color: white;";
  document.getElementById("wrapper").style.backgroundColor  = "deepskyblue";
}

function unhighlightGithub() {
  document.getElementById("githublabel").style.cssText = "font-family: 'Poiret One', cursive; color: white;";
  document.getElementById("wrapper").style.backgroundColor  = "deepskyblue";
}