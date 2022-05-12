"use strict";

const arrowDown = document.querySelectorAll(".down");
const answer = document.querySelectorAll(".answer");
const question = document.querySelectorAll(".question");

question.forEach((answerReveal) => {
  answerReveal.addEventListener("click", function () {
    remove();
    arrowback();
    fontBack();
    answerReveal.children[1].classList.remove("hide");
    answerReveal.children[0].lastElementChild.classList.add("rotated");
    answerReveal.firstElementChild.children[0].classList.add("bolder")

  });
});


function remove() {
  question.forEach((answerHide) => {
    answerHide.children[1].classList.add("hide")
  });
}

function arrowback() {
    question.forEach((arrow) =>{
        arrow.children[0].lastElementChild.classList.remove("rotated")
    } )
}

function fontBack() {
    question.forEach((titleFont) => {
        titleFont.firstElementChild.children[0].classList.remove("bolder")
    })
}