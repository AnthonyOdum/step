function getRandomQuote() {
    console.log('Fetching text');

    
    var response = fetch('/data')
        .then(response => response.text())
        .then((quote) => {
            document.getElementById('quote-container').innerText = quote;
        })
}

function getMessages() {
    console.log('Fetching messages');

   fetch('/data')
			.then(response => response.json())
			.then((messages) => {

				const fetchTest = document.getElementById('quote-container');
				fetchTest.innerHTML = '';
				const heading = document.createElement('h3')
        heading.innerText = 'Name: ';
				const info = document.createElement('p')
        info.innerText = messages.revolutionary;
				fetchTest.appendChild(heading);
				fetchTest.appendChild(info);
		});
}

function getComments() {
  console.log("check")
  fetch('/data')
    .then(response => response.json())
    .then((section) => {
        const commentSection = document.getElementById('comments');
        console.log(section);
        section.forEach((line) => {
          console.log(line);
          commentSection.appendChild(createTableElement(line));
        });
    });
}

function createTableElement(text) {
  const tdElement = document.createElement('td');
  tdElement.innerText = text;
  return tdElement;
}