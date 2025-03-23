var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/honor70.png") {
    myImage.setAttribute("src", "images/honor90.png");
  } else if (mySrc === "images/honor90.png") {
    myImage.setAttribute("src", "images/honor100.png");
  } else if (mySrc === "images/honor100.png") {
    myImage.setAttribute("src", "images/honor200.png");
  } else if (mySrc === "images/honor200.png") {
    myImage.setAttribute("src", "images/honor300.png");
  } else if (mySrc === "images/honor300.png") {
    myImage.setAttribute("src", "images/magic7.png");
  } else {
    myImage.setAttribute("src", "images/honor70.png");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h4");

function setUserName() {
  var myName = prompt("Please enter you name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Hi, " + myName + "! Welcom to Honor!";
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Hi, " + storedName + "! Welcom to Honor!";
}

myButton.onclick = function () {
  setUserName();
};
