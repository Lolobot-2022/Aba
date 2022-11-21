const lightMode = document.getElementById('light-mode');
window.onscroll = function() {myFunctionOne()};
let counts=setInterval(updated);
let countsone=setInterval(updatedOne);
let upto=1000;
let uptoOne=500;
var divs = ["graph0","graph1", "graph2", "graph3", "graph4", "graph5"];
var visibleId = null;
const ctx = document.getElementById('myChart');
const ctxx =document.getElementById('myChartOne');





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


function myFunctionOne() {
  if (document.documentElement.scrollTop > 10) {
    document.getElementById("objectif").style.display = "animation";
  } 
}

//POUR AFFICHER OU MASQUER LES GRAPHIQUES

function show(id) {
  if(visibleId !== id) {
    visibleId = id;
  } 
  hide();
}
function hide() {
  var div, i, id;
  for(i = 0; i < divs.length; i++) {
    id = divs[i];
    div = document.getElementById(id);
    if(visibleId === id) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}  

//POUR LES GRAPHIQUES QUI VIENNENT DE CHART.JS

//POUR LES TUES
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Ce Mois','3 Mois', '6 Mois', '1 An','5 Ans'],
    datasets: [{
      label: '# de tués',
      data: [12, 19, 25, 35, 42],
      borderWidth: 1,
      backgroundColor:[
        "crimson",
        "lightgreen",
        "lightblue",
        "violet", 
        "gray"
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

//POUR LES KIDNAPES
new Chart(ctxx, {
  type: 'bar',
  data: {
    labels: ['Ce Mois','3 Mois', '6 Mois', '1 An','5 Ans'],
    datasets: [{
      label: '# de kidnapés',
      data: [6, 58, 10, 30, 62],
      borderWidth: 1,
      backgroundColor:[
        "green",
        "lightblue",
        "lightyellow",
        "pink", 
        "red"
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});







