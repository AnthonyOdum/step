function transitionAbout() {
    document.getElementById("infobox").style.opacity = 0;

    setTimeout(function() {
      document.getElementById("abouttab").style.display = "flex";
      let elements = document.getElementsByClassName("circles").item(0).querySelectorAll("li");
      for(let element of elements)  {
        element.style.zIndex = "1";
      }

    }, 500);
}

function transitionAboutToOriginal() {
  document.getElementById("abouttab").style.display = "none";
  let elements = document.getElementsByClassName("circles").item(0).querySelectorAll("li");
  for(let element of elements)  {
    element.style.zIndex = "initial";
  }

  window.location = "index.html";
}

function transitionProjects() {
  document.getElementById("infobox").style.opacity = 0;

  setTimeout(function() {
    document.getElementById("projectstab").style.display = "flex";
    let elements = document.getElementsByClassName("circles").item(0).querySelectorAll("li");
    for(let element of elements)  {
      element.style.zIndex = "2";
    }

  }, 500);
}

function transitionProjectsToOriginal() {
document.getElementById("projectstab").style.display = "none";
let elements = document.getElementsByClassName("circles").item(0).querySelectorAll("li");
for(let element of elements)  {
  element.style.zIndex = "initial";
}

window.location = "index.html";
}
