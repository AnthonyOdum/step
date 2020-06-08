function getRandomQuote() {
    console.log('Fetching text');

    
    var response = fetch('/data')
        .then(response => response.text())
        .then((quote) => {
            document.getElementById('quote-container').innerText = quote;
        })
}

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