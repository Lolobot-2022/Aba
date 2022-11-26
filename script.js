const lightMode = document.getElementById('light-mode');
window.onscroll = function() {myFunctionOne()};
let counts=setInterval(updated);
let countsone=setInterval(updatedOne);
let upto=4900;
let uptoOne=1;
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
  var count2 =document.getElementById("numb2");
  count2.innerHTML=++uptoOne;
  if (uptoOne===3)
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

//BAR POUR LES PAYS
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['France','Canada', 'Turquie', 'Etats-Unis','Bresil','Cuba','Chili','Allemagne','Russie','Italie','Royaume-Uni'],
    datasets: [{
      label: '# étudiants haitiens par pays',
      data: [1685, 453, 51, 1066, 992, 131, 544, 19, 31, 74, 14],
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
        "tan"
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
            size:10
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
    labels: ['Europe','Amérique', 'Asie', 'Afrique','Océanie'],
    datasets: [{
      label: '# étudiants haitiens par continent',
      data: [1786, 3186, 0, 0, 0],
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
            size:10
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
    labels: ['France','Canada', 'Turquie', 'Etats-Unis','Haiti','Bresil','Cuba','Chili','Allemagne','Rep.Dominicaine','Russie','Italie','Royaume-Uni'],
    datasets: [{
      label: '# étudiants inscrits sur Elitis par pays',
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
            size:10
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
//     label:'# de tués',
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
//     label:'# de kidnapés',
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
  


