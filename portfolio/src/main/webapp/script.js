//Quotes on About Page

let quotes = 
  [
    "If you are neutral in situations of injustice, you have chosen the side of the oppressor. If an elephant has its foot on the tail of a mouse and you say that you are neutral, the mouse will not appreciate your neutrality.",
    "If there is no struggle, there is no progress",
    "The time is always right to do what is right",
    "I have learned over the years that when one's mind is made up, this diminishes fear",
    "Truth is powerful and it prevails",
    "Bringing the gifts that my ancestors gave, I am the dream and the hope of the slave. I rise. I rise. I rise."
  ]

let speakers = 
  [
    "Desmond Tutu",
    "Fredrick Douglass",
    "Martin Luther King",
    "Rosa Parks",
    "Sojourner Truth",
    "Maya Angelou"
  ]

function printQuotes() {
  console.log('giving quotes...')

  let quote = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote').innerHTML = quotes[quote];

  let speaker = quote;
  document.getElementById('name').innerHTML = speakers[quote];

  setTimeout(function() {
    document.getElementById('quote').innerHTML = "";
    document.getElementById('name').innerHTML = "";
    printQuotes()
  }, 10000);
}

//End of Quotes on About Page

function numberOfComments() {
  let numComs = document.getElementById("num-comments").value;
  console.log(numComs);
  const commentSection = document.getElementById('comments');

  while (commentSection.firstChild) {
        commentSection.removeChild(commentSection.firstChild);
    }

  fetch('/data?numComs=' + numComs)
    .then(response => response.json())
    .then((section) => {
      
      console.log(section);
      section.forEach((line) => {
        commentSection.appendChild(createTableElement(line));
      })
    })
}

function deleteComments() {
  fetch('/delete-data', {method: 'POST'})
  .then(response => numberOfComments())
}

function createTableElement(text) {
  const tdElement = document.createElement('tr');
  tdElement.innerText = text;
  return tdElement;
}

function submitComment() {
  $.ajax({
    url:'/data',
    async: false,
    type:'POST',
    data:$('#comment-form').serialize()
  });
  doGet();
  $('#comment-form')[0].reset();
  return false;
}