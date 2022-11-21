const lightMode = document.getElementById('light-mode');
let counts=setInterval(updated);
let countsone=setInterval(updatedOne);
let upto=1000;
let uptoOne=500;


lightMode.addEventListener('change', () => {
  document.body.classList.toggle('light');
}) //Pour le light Mode


function updated (){
  var count =document.getElementById("numb");
  count.innerHTML=++upto;
  if (upto===1200)
  {
    clearInterval(counts);
  }
}

function updatedOne (){
  var count2 =document.getElementById("numb2");
  count2.innerHTML=++uptoOne;
  if (uptoOne===1000)
  {
    clearInterval(countsone);
  }
}


