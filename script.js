const lightMode = document.getElementById('light-mode');
window.onscroll = function() {myFunctionOne()};
let counts=setInterval(updated);
let countsone=setInterval(updatedOne);
let countsTwo=setInterval(updatedTwo);
let countsThree=setInterval(updatedThree);
let countsFour=setInterval(updatedFour);
let upto=4900;
let uptoOne=149600;
let uptoTwo=1;
let uptoThree=878390;
let uptoFour=1;
var divs = ["graph0","graph1", "graph2", "graph3", "graph4", "graph5"];
var visibleId = null;
var divsQuestion = ["reponse0","reponse1", "reponse2", "reponse3", "reponse4", "reponse5"];
var visibleQuestId=null;
const ctx = document.getElementById('myChart');
const continent =document.getElementById('forContinent');
const ctxx =document.getElementById('myChartOne');








lightMode.addEventListener('change', () => {
  document.body.classList.toggle('light');
}) //Pour le light Mode


function updated (){
  var count =document.getElementById("numb");
  count.innerHTML=++upto;
  if (upto===5060)
  {
    clearInterval(counts);
  }
}

function updatedOne (){
  var count1 =document.getElementById("numb1");
  count1.innerHTML=++uptoOne;
  if (uptoOne===150000)
  {
    clearInterval(countsone);
  }
}

function updatedTwo (){
  var count2 =document.getElementById("numb2");
  count2.innerHTML=++uptoTwo;
  if (uptoTwo===3)
  {
    clearInterval(countsTwo);
  }
}

function updatedThree (){
  var count3 =document.getElementById("numb3");
  count3.innerHTML=++uptoThree;
  if (uptoThree===878421)
  {
    clearInterval(countsThree);
  }
}
function updatedFour (){
  var count4 =document.getElementById("numb4");
  count4.innerHTML=++uptoFour;
  if (uptoFour===2)
  {
    clearInterval(countsFour);
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

//BAR POUR LES PAYS
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['France','Canada','Haiti', 'Turquie', 'USA','Bresil','Cuba','Chili','Allemagne','Rep.Dom','Russie','Italie','RU'],
    datasets: [{
      label: '# ??tudiants universitaires haitiens par pays',
      data: [1685, 453, 150000, 51, 1066, 992, 131, 544, 19, 40000, 31, 74, 14],
      borderWidth: 1,
      backgroundColor:[
        "crimson",
        "lightgreen",
        "lightblue",
        "violet", 
        "gray",
        "pink",
        "whitesmoke",
        "yellow",
        "purple",
        "brown",
        "tan",
        "orange",
        "gold"
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax:150,
        ticks:{
          font: {
            size:10
          }
        }
       
      },
      x:{
        ticks:{
          font:{
            size:8
          }
          
        }
      }

    }
  }
});

//BAR POUR LES CONTINENTS
new Chart(continent, {
  type: 'bar',
  data: {
    labels: ['Europe','Am??rique', 'Asie', 'Afrique','Oc??anie'],
    datasets: [{
      label: '# ??tudiants haitiens universitaires par continent',
      data: [1786, 190000, 0, 0, 0],
      borderWidth: 1,
      backgroundColor:[
        "whitesmoke",
        "yellow",
        "purple",
        "brown",
        "crimson"
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax:100,
        ticks:{
          font: {
            size:10
          }
        }
       
      },
      x:{
        ticks:{
          font:{
            size:8
          }
          
        }
      }

    }
  }
});

//BAR POUR LES INSCRITS SUR ELITIS
new Chart(ctxx, {
  type: 'bar',
  data: {
    labels: ['France','Canada', 'Turquie', 'USA','Haiti','Bresil','Cuba','Chili','Allemagne','Rep.Dom','Russie','Italie','RU'],
    datasets: [{
      label: '# ??tudiants inscrits sur Elitis par pays',
      data: [3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      borderWidth: 1,
      backgroundColor:[
        "green",
        "lightblue",
        "lightyellow",
        "pink", 
        "red", 
        "fuschia",
        "magenta",
        "goldenrod",
        "cream",
        "forest",
        "ochre",
        "red",
        "blue"
      ]
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        suggestedMax:100,
        ticks:{
          font:{
            size:10
          }
        }
      },
      x:{
        ticks:{
          font:{
            size:8
          }
        }
      }
    }
  }
});

//LINE POUR LES inscrits ce MOIS

// new Chart(line,{
//   type:'line',
//   data: {
//     labels:["3 nov 22", "10 nov 22", "19 nov 22","30 nov 22"],
//     datasets:[{
//     label:'# inscrits',
//     data:[5, 55, 15, 67],
//     fill:true,
//     backgroundColor:"red",
//     tension:0.1
//   }]
// },
//   options:{
//     elements:{
//       point:{
//         pointBorderColor:"lightgreen"
//       }
//     },
//     scales:{
//       y:{
//         ticks:{
//           color:"beige"
//         },
//         suggestedMin:50,
//         suggestedMax:100
//       },
//       x:{
//         ticks:{
//           color:"beige"
//         }
//       }
//     }
//   }
//  });

 


//LINE POUR LES TUES 3 MOIS

// new Chart(lineTrois,{
//   type:'line',
//   data: {
//     labels:["3 nov 22", "10 nov 22", "19 nov 22","30 nov 22"],
//     datasets:[{
//     label:'# de tu??s',
//     data:[5, 55, 15, 67],
//     fill:true,
//     backgroundColor:"yellow",
//     tension:0.1
//   }]
// },
//   options:{
//     elements:{
//       point:{
//         pointBorderColor:"red"
//       }
//     },
//     scales:{
//       y:{
//         ticks:{
//           color:"beige"
//         },
//         suggestedMin:50,
//         suggestedMax:100
//       },
//       x:{
//         ticks:{
//           color:"beige"
//         }
//       }
//     }
//   }
//  });

//  //POUR LES KIDNAPPES

//  new Chart(lineTroisBis,{
//   type:'line',
//   data: {
//     labels:["1 nov 22", "8 nov 22", "15 nov 22","26 nov 22", "29 nov 22"],
//     datasets:[{
//     label:'# de kidnap??s',
//     data:[70, 5, 40, 17, 65],
//     fill:true,
//     backgroundColor:"grey",
//     tension:0.1
//   }]
// },
//   options:{
//     elements:{
//       point:{
//         pointBorderColor:"#333"
//       }
//     },
//     scales:{
//       y:{
//         ticks:{
//           color:"beige"
//         },
//         suggestedMin:50,
//         suggestedMax:100
//       },
//       x:{
//         ticks:{
//           color:"beige"
//         }
//       }
//     }
//   }
//  });


//REPONDRE A DES QUESTIONS DE L'UTILISATEUR
  


