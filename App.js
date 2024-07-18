"use strict";

//DOM Selectors
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const htmlSpace = document.querySelector(".task-append");

//logic
btn.addEventListener("click", function (e) {
  e.preventDefault();

  //html to be displayed
  const html = `
    <div class="task-added">
        <input type="checkbox" class="check" />
        <h6 class="text-strike">${input.value}</h6>
    </div>
  `;

  //logic

  if (input.value !== "") {
    console.log("not empty");
    htmlSpace.insertAdjacentHTML("afterbegin", html);
    input.value = "";
    const strikeMe = document.querySelector(".text-strike");
    const checkbox = document.querySelector(".check");
    checkbox.addEventListener("change", function () {
      strikeMe.classList.toggle("strike");
    });
  } else {
    console.log("empty");
  }
});
