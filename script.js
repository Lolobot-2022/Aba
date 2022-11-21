const lightMode = document.getElementById('light-mode');
// const counterUp = require("counterup");

lightMode.addEventListener('change', () => {
  document.body.classList.toggle('light');
}) //Pour le light Mode


//pour l'animation du nombre de personnes tuees en 2022
// counterUp.addEventListener('counter', () =>{
//    document.body.classList.toggle('num');
// })