const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/mtuci-logo2.png") {
    myImage.setAttribute("src", "images/200-240.jpg");
  } else {
    myImage.setAttribute("src", "images/mtuci-logo2.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Напишите свое имя");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("имя", myName);
      myHeading.textContent = `МТУСИ - классный университет, ${myName}`;
    }
  }
  
if (!localStorage.getItem("имя")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("имя");
    myHeading.textContent = `МТУСИ - классный университет, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};
  