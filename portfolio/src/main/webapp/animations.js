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

// document.getElementById('projectsCover').addEventListener("click", openProjects, false);
// document.getElementById('projectsBG').addEventListener("click", closeProjects, false);

//Contact Page
function openContact() {
  let page = document.getElementById('contactBG');
  page.animate([
    {height: '0%'},
    {height: '100%'}
  ], 1000);
  page.style.height = '100%';
  setTimeout(function() {
    document.getElementById('contact').style.display = 'block';
  }, 1001);
}

function closeContact() {
  document.getElementById('contact').style.display = 'none';
  let page = document.getElementById('contactBG');
  page.animate([
    {height: '100%'},
    {height: '0%'}
  ], 1000);
  page.style.height = '0%';
}

//Modal Animation
let modal = document.getElementById('modal');

let projectArr = [
  'sudoku',
  'website',
  'google'
]

function openModal(choice) {
  console.log('check');

  console.log(projectArr[choice]);

  let card = document.getElementById(projectArr[choice]);
  
  modal.style.display = 'block';
  card.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';

  projectArr.forEach(element => {
    document.getElementById(element).style.display = 'none';
  })
}

//End of Animations