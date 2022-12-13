const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");

    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


// var romanToInt = function (s) {
//     let numArray = [];
//     let sum = 0;
//     romArray = s.split('');
//     console.log(romArray.length)
//     for (i = 0; i < romArray.length; i++) {
//         if (romArray[i] == "I") {
//             numArray[i] = 1;
//         } else if (romArray[i] == "V") {
//             numArray[i] = 5;
//         } else if (romArray[i] == "X") {
//             numArray[i] = 10;
//         } else if (romArray[i] == "L") {
//             numArray[i] = 50;
//         } else if (romArray[i] == "C") {
//             numArray[i] = 100;
//         } else if (romArray[i] == "D") {
//             numArray[i] = 500;
//         } else if (romArray[i] == "M") {
//             numArray[i] = 1000;
//         }
//         console.log(numArray)
//         if (i > 0 && numArray[i] > numArray[i - 1]) {
//             numArray[i] -= numArray[i - 1];
//             sum -= numArray[i - 1];
//         }
//         sum += numArray[i]
//         console.log("part sum = " + numArray[i]);
//     }
//     console.log("hi")
//     return sum
// };
// 
// console.log(romanToInt("MCMXCIV"))