console.clear();

// let isOpen = false;

const hamburger = document.querySelector(".hamburger-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    document.querySelector(".nav-list").classList.toggle("active-nav-list");
});

// // make a element that rotates every letter in a word

// const rotate = document.querySelector(".rotate");
// const word = rotate.innerText;
// const letters = word.split("");
// const spans = letters.map((letter) => `<span>${letter}</span>`);
// rotate.innerHTML = spans.join("");

// // now make the span rotate when hovered

// const span = document.querySelectorAll(".rotate span");
// span.forEach((span) => {
//     span.addEventListener("mouseover", () => {
//         span.classList.add("rotate-span");
//     });
//     span.addEventListener("mouseout", () => {
//         span.classList.remove("rotate-span");
//     });
// });
