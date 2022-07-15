const modal1Box = document.querySelector(".modal1-box");
const modal2Box = document.querySelector(".modal2-box");
const modal3Box = document.querySelector(".modal3-box");
const modal4Box = document.querySelector(".modal4-box");
const modal5Box = document.querySelector(".modal5-box");
const modal1 = document.querySelector(".fa-plane");
const modal2 = document.querySelector(".fa-diagram-project");
const modal3 = document.querySelector(".fa-earth-americas");
const modal4 = document.querySelector(".fa-person-circle-question");
const modal5 = document.querySelector(".fa-hand-holding-heart");
const modal1Text = document.querySelector(".modal1-text");
const modal2Text = document.querySelector(".modal2-text");
const modal3Text = document.querySelector(".modal3-text");
const modal4Text = document.querySelector(".modal4-text");
const modal5Text = document.querySelector(".modal5-text");

//Modal (1
modal1Box.addEventListener("mouseover", () => {
  modal1.classList.add("modal1Animate");
  modal1Text.classList.add("opacity");
  modal1Text.style.visibility = "initial";
});

modal1Box.addEventListener("mouseleave", () => {
  modal1.classList.remove("modal1Animate");
  modal1Text.classList.remove("opacity");
  modal1Text.style.visibility = "hidden";
});

//Modal (2
modal2Box.addEventListener("mouseover", () => {
  modal2.classList.add("modal2Animate");
  modal2Text.classList.add("opacity");
  modal2Text.style.visibility = "initial";
});

modal2Box.addEventListener("mouseleave", () => {
  modal2.classList.remove("modal2Animate");
  modal2Text.classList.remove("opacity");
  modal2Text.style.visibility = "hidden";
});

//Modal (3
modal3Box.addEventListener("mouseover", () => {
  modal3.classList.add("modal3Animate");
  modal3Text.classList.add("opacity");
  modal3Text.style.visibility = "initial";
});

modal3Box.addEventListener("mouseleave", () => {
  modal3.classList.remove("modal3Animate");
  modal3Text.classList.remove("opacity");
  modal3Text.style.visibility = "hidden";
});

//Modal (4
modal4Box.addEventListener("mouseover", () => {
  modal4.classList.add("modal4Animate");
  modal4Text.classList.add("opacity");
  modal4Text.style.visibility = "initial";
});

modal4Box.addEventListener("mouseleave", () => {
  modal4.classList.remove("modal4Animate");
  modal4Text.classList.remove("opacity");
  modal4Text.style.visibility = "hidden";
});

//Modal (5
modal5Box.addEventListener("mouseover", () => {
  modal5.classList.add("modal5Animate");
  modal5Text.classList.add("opacity");
  modal5Text.style.visibility = "initial";
});

modal5Box.addEventListener("mouseleave", () => {
  modal5.classList.remove("modal5Animate");
  modal5Text.classList.remove("opacity");
  modal5Text.style.visibility = "hidden";
});

