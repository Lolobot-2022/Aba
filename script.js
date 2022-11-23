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
const line =document.getElementById('line');
const lineone =document.getElementById('lineOne');
const lineTrois =document.getElementById('lineTrois');
const lineTroisBis =document.getElementById('lineTroisBis');







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

//BAR POUR LES TUES
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

//BAR POUR LES KIDNAPES
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

//LINE POUR LES TUES 1 MOIS

new Chart(line,{
  type:'line',
  data: {
    labels:["3 nov 22", "10 nov 22", "19 nov 22","30 nov 22"],
    datasets:[{
    label:'# de tués',
    data:[5, 55, 15, 67],
    fill:true,
    backgroundColor:"red",
    tension:0.1
  }]
},
  options:{
    elements:{
      point:{
        pointBorderColor:"lightgreen"
      }
    },
    scales:{
      y:{
        ticks:{
          color:"beige"
        },
        suggestedMin:50,
        suggestedMax:100
      },
      x:{
        ticks:{
          color:"beige"
        }
      }
    }
  }
 });

 //POUR LES KIDNAPPES

 new Chart(lineone,{
  type:'line',
  data: {
    labels:["1 nov 22", "8 nov 22", "15 nov 22","26 nov 22", "29 nov 22"],
    datasets:[{
    label:'# de kidnapés',
    data:[70, 5, 40, 17, 65],
    fill:true,
    backgroundColor:"purple",
    tension:0.1
  }]
},
  options:{
    elements:{
      point:{
        pointBorderColor:"#333"
      }
    },
    scales:{
      y:{
        ticks:{
          color:"beige"
        },
        suggestedMin:50,
        suggestedMax:100
      },
      x:{
        ticks:{
          color:"beige"
        }
      }
    }
  }
 });



//LINE POUR LES TUES 3 MOIS

new Chart(lineTrois,{
  type:'line',
  data: {
    labels:["3 nov 22", "10 nov 22", "19 nov 22","30 nov 22"],
    datasets:[{
    label:'# de tués',
    data:[5, 55, 15, 67],
    fill:true,
    backgroundColor:"yellow",
    tension:0.1
  }]
},
  options:{
    elements:{
      point:{
        pointBorderColor:"red"
      }
    },
    scales:{
      y:{
        ticks:{
          color:"beige"
        },
        suggestedMin:50,
        suggestedMax:100
      },
      x:{
        ticks:{
          color:"beige"
        }
      }
    }
  }
 });

 //POUR LES KIDNAPPES

 new Chart(lineTroisBis,{
  type:'line',
  data: {
    labels:["1 nov 22", "8 nov 22", "15 nov 22","26 nov 22", "29 nov 22"],
    datasets:[{
    label:'# de kidnapés',
    data:[70, 5, 40, 17, 65],
    fill:true,
    backgroundColor:"grey",
    tension:0.1
  }]
},
  options:{
    elements:{
      point:{
        pointBorderColor:"#333"
      }
    },
    scales:{
      y:{
        ticks:{
          color:"beige"
        },
        suggestedMin:50,
        suggestedMax:100
      },
      x:{
        ticks:{
          color:"beige"
        }
      }
    }
  }
 });







