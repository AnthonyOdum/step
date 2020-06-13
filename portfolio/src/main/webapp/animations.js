//Animations

//Title Page
function removeCover() {
  let titlePage = document.getElementById('titlePage');
  titlePage.style.opacity = '1';
  titlePage.style.transition = 'opacity .5s';
  titlePage.style.opacity = '0';
  setTimeout(function() {
    titlePage.remove();
  }, 505);
}

//About Page
function openAbout() {
  let page = document.getElementById('aboutBG');
  page.animate([
    {width: '0%', height: '0%'},
    {width: '100%', height: '100%'}
  ], 1000);
  page.style.height = '100%';
  page.style.width = '100%';
  setTimeout(function() {
    document.getElementById('info').style.display = 'block';
  }, 1001);
  
}

function closeAbout() {
  document.getElementById('info').style.display = 'none';
  let page = document.getElementById('aboutBG');
  page.animate([
    {width: '100%', height: '100%'},
    {width: '0%', height: '0%'}
  ], 1000);
  page.style.height = '0%';
  page.style.width = '0%';
}

document.getElementById('aboutCover').addEventListener("click", openAbout, false);
document.getElementById('aboutBG').addEventListener("click", closeAbout, false);

//Projects Page
function openProjects() {
  let page = document.getElementById('projectsBG');
  page.animate([
    {width: '0%', height: '0%'},
    {width: '100%', height: '100%'}
  ], 1000);
  page.style.height = '100%';
  page.style.width = '100%';
  setTimeout(function() {
    document.getElementById('projects').style.display = 'block';
  }, 1001);
}

function closeProjects() {
  document.getElementById('projects').style.display = 'none';
  let page = document.getElementById('projectsBG');
  page.animate([
    {width: '100%', height: '100%'},
    {width: '0%', height: '0%'}
  ], 1000);
  page.style.height = '0%';
  page.style.width = '0%';
}

document.getElementById('projectsCover').addEventListener("click", openProjects, false);
document.getElementById('projectsBG').addEventListener("click", closeProjects, false);

//Contact Page
function openContact() {
  let page = document.getElementById('contactBG');
  page.animate([
    {height: '0%'},
    {height: '100%'}
  ], 1000);
  page.style.height = '100%';
}

function closeContact() {
  let page = document.getElementById('contactBG');
  page.animate([
    {height: '100%'},
    {height: '0%'}
  ], 1000);
  page.style.height = '0%';
}

document.getElementById('contactCover').addEventListener("click", openContact, false);
document.getElementById('contactBG').addEventListener("click", closeContact, false);

//End of Animations