var colores = ["#275F72","#F2D3B3","#4F8EA6","#F6898E","#F4B7A2"];

function getRandomColor() {
  return colores[Math.floor(Math.random() * colores.length)];
}


/**PROVINCIA */
var provincias = [];
var mentoresProvincia = [];
var participantesProvincia = [];
var totalMentores = 0;
var totalParticipantes = 0;
/**Agregamos todas las provincias registradas por Mentores y Participantes */
for (var i = 0; i < mentores.length; i++) {
  if (provincias.indexOf(mentores[i]["Provincia"]) === -1 && mentores[i]["Provincia"] != "") {
    provincias.push(mentores[i]["Provincia"]);
  }
}
for (var i = 0; i < participantes.length; i++) {
  if (provincias.indexOf(participantes[i]["Provincia"]) === -1 && participantes[i]["Provincia"] != "") {
    provincias.push(participantes[i]["Provincia"]);
  }
}
/**Agregamos la información del número de participantes */
for (var i = 0; i < provincias.length; i++) {
  for (var j = 0; j < mentores.length; j++) {
    if (mentores[j]["Provincia"] == provincias[i]) {
      if (mentoresProvincia[i] == undefined) {
        mentoresProvincia[i] = 0;
      }
      mentoresProvincia[i] += 1;
    }
  }
  for (var j = 0; j < participantes.length; j++) {
    if (participantes[j]["Provincia"] == provincias[i]) {
      if (participantesProvincia[i] == undefined) {
        participantesProvincia[i] = 0;
      }
      participantesProvincia[i] += 1;
    }
  }
}
for (var i = 0; i < mentoresProvincia.length; i++) {
  totalMentores += mentoresProvincia[i];
}
for (var i = 0; i < participantesProvincia.length; i++) {
  totalParticipantes += participantesProvincia[i];
}
/**MEDIO */

var medios = [];
var numeroMedio = [];
var coloresMedios =[];
for (var i = 0; i < participantes.length; i++) {
  if (medios.indexOf(participantes[i]["¿Por qué medio se enteró de este evento?"]) === -1 && participantes[i]["¿Por qué medio se enteró de este evento?"] != "") {
    medios.push(participantes[i]["¿Por qué medio se enteró de este evento?"]);
  }
}
for (var i = 0; i < mentores.length; i++) {
  if (medios.indexOf(mentores[i]["¿Cómo se enteró de este evento?"]) === -1 && mentores[i]["¿Cómo se enteró de este evento?"] != "") {
    medios.push(mentores[i]["¿Cómo se enteró de este evento?"]);
  }
}
for (var i = 0; i < medios.length; i++) {
  //coloresMedios.push(getRandomColor());
  for (var j = 0; j < participantes.length; j++) {
    if (participantes[j]["¿Por qué medio se enteró de este evento?"] == medios[i]) {
      if (numeroMedio[i] == undefined) {
        numeroMedio[i] = 0;
      }
      numeroMedio[i] += 1;
    }
  }
  for (var j = 0; j < mentores.length; j++) {
    if (mentores[j]["¿Cómo se enteró de este evento?"] == medios[i]) {
      if (numeroMedio[i] == undefined) {
        numeroMedio[i] = 0;
      }
      numeroMedio[i] += 1;
    }
  }
}

function dibujarCharts() {
  var peopleProvnce = new Chart($("#chartPeopleProvince"), {
    type: 'horizontalBar',
    data: {
      labels: provincias,
      datasets: [
        {
          label: "Mentores " + totalMentores.toString(),
          backgroundColor: "#3e95cd",
          data: mentoresProvincia
        }, {
          label: "Participantes " + totalParticipantes.toString(),
          backgroundColor: "#8e5ea2",
          data: participantesProvincia
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Participantes y Mentores por Provincia'
      }
    }
  });

  var sharedEvent = new Chart($("#chartSharedEvent"), {
    type: 'doughnut',
    data: {
      labels: medios,
      datasets: [
        {
          label: "Alcance logrado " + totalMentores.toString(),
          backgroundColor: colores,
          data: numeroMedio
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Alcance de redes'
      }
    }
  });
  console.log(numeroMedio);
}
dibujarCharts();
function changeActiveChart(div, modal, show) {
  $("#" + modal).modal({ backdrop: 'static', keyboard: false })
  if (show) {
    $("#replace" + div).after($("#" + div));
    active = false;
  } else {
    $("#screen" + div).after($("#" + div));
    active = true;
  }
  dibujarCharts();
}
















