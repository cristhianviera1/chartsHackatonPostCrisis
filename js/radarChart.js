var colores = ["#275F72", "#F2D3B3", "#4F8EA6", "#F6898E", "#F4B7A2", "#477F6A", "#EBE09A", "#90A67E", "#DA5559", "#ED8D73"];

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
var coloresMedios = [];
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

/**Retos a tomar */
var retos = [];
var cantidadPorRetos = [];
var cantidadPorRetosMentores = [];

for (var i = 0; i < participantes.length; i++) {
  if (participantes[i]["Elija el reto en el que desea participar"] != "") {
    var tmpReto = participantes[i]["Elija el reto en el que desea participar"].split(/[/|]|,|-|;/);
    for (var j = 0; j < tmpReto.length; j++) {
      if (retos.indexOf(tmpReto[j].toLowerCase().trim()) == -1) {
        retos.push(tmpReto[j].toLowerCase().trim());
      }
    }
  }
}
for (var i = 0; i < participantes.length; i++) {
  for (var j = 0; j < retos.length; j++) {
    if (cantidadPorRetos[j] == undefined) {
      cantidadPorRetos[j] = 0;
    }
    if (participantes[i]["Elija el reto en el que desea participar"] != "") {
      var tmpCantidad = participantes[i]["Elija el reto en el que desea participar"].split(/[/|]|,|-|;/);
      for (var k = 0; k < tmpCantidad.length; k++) {
        if (retos[j] == tmpCantidad[k].toLowerCase().trim()) {
          cantidadPorRetos[j] += 1;
        }
      }

    }
  }
}
for (var i = 0; i < mentores.length; i++) {
  for (var j = 0; j < retos.length; j++) {
    if (cantidadPorRetosMentores[j] == undefined) {
      cantidadPorRetosMentores[j] = 0;
    }
    if (mentores[i]["Elija dos retos en los que le gustaría colaborar"] != "") {
      var tmpCantidad = mentores[i]["Elija dos retos en los que le gustaría colaborar"].split(/[/|]|,|-|;/);
      for (var k = 0; k < tmpCantidad.length; k++) {
        if (retos[j] == tmpCantidad[k].toLowerCase().trim()) {
          cantidadPorRetosMentores[j] += 1;
        }
      }

    }
  }
}


/** Etapas del hackaton por apoyar */
var etapas = [];
var cantidadEtapas = [];

for (var i = 0; i < mentores.length; i++) {
  if (mentores[i]["En cuáles etapas del Hackatón desearía colaborar"] != "") {
    var tmpEtapa = mentores[i]["En cuáles etapas del Hackatón desearía colaborar"].split(";");
    for (var j = 0; j < tmpEtapa.length; j++) {
      if (etapas.indexOf(tmpEtapa[j]) == -1) {
        etapas.push(tmpEtapa[j]);
      }
    }
  }
}
for (var i = 0; i < mentores.length; i++) {
  if (mentores[i]["En cuáles etapas del Hackatón desearía colaborar"] != "") {
    var tmpEtapa = mentores[i]["En cuáles etapas del Hackatón desearía colaborar"].split(";");
    for (var k = 0; k < tmpEtapa.length; k++) {
      for (var j = 0; j < etapas.length; j++) {
        if (cantidadEtapas[j] == undefined) {
          cantidadEtapas[j] = 0;
        }
        if (etapas[j] == tmpEtapa[k]) {
          cantidadEtapas[j] += 1;
        }
      }
    }
  }
}

/** Conocimiento a disposición */
var conocimientos = [];
var cantidadConocimientos = [];

for (var i = 0; i < mentores.length; i++) {
  if (mentores[i]["Conocimiento que pone a disposición"] != "") {
    var tmpConocimiento = mentores[i]["Conocimiento que pone a disposición"].split(";");
    for (var j = 0; j < tmpConocimiento.length; j++) {
      if (conocimientos.indexOf(tmpConocimiento[j]) == -1) {
        conocimientos.push(tmpConocimiento[j]);
      }
    }
  }
}
for (var i = 0; i < mentores.length; i++) {
  if (mentores[i]["Conocimiento que pone a disposición"] != "") {
    var tmpConocimiento = mentores[i]["Conocimiento que pone a disposición"].split(";");
    for (var k = 0; k < tmpConocimiento.length; k++) {
      for (var j = 0; j < conocimientos.length; j++) {
        if (cantidadConocimientos[j] == undefined) {
          cantidadConocimientos[j] = 0;
        }
        if (conocimientos[j] == tmpConocimiento[k]) {
          cantidadConocimientos[j] += 1;
        }
      }
    }
  }
}

/** Tiempo disponible para el hackaton */

var tiempos = [];
var cantidadTiempos = [];

for (var i = 0; i < mentores.length; i++) {
  if (mentores[i]["¿Qué tiempo dispone para colaborar durante el hackatón?"] != "") {
    var tmpTiempo = mentores[i]["¿Qué tiempo dispone para colaborar durante el hackatón?"].split(";");
    for (var j = 0; j < tmpTiempo.length; j++) {
      if (tiempos.indexOf(tmpTiempo[j]) == -1) {
        tiempos.push(tmpTiempo[j]);
      }
    }
  }
}
for (var i = 0; i < mentores.length; i++) {
  if (mentores[i]["¿Qué tiempo dispone para colaborar durante el hackatón?"] != "") {
    var tmpTiempo = mentores[i]["¿Qué tiempo dispone para colaborar durante el hackatón?"].split(";");
    for (var k = 0; k < tmpTiempo.length; k++) {
      for (var j = 0; j < tiempos.length; j++) {
        if (cantidadTiempos[j] == undefined) {
          cantidadTiempos[j] = 0;
        }
        if (tiempos[j] == tmpTiempo[k]) {
          cantidadTiempos[j] += 1;
        }
      }
    }
  }
}



var mostrarPorcentajes = function (value, ctx) {
  let sum = 0;
  let dataArr = ctx.chart.data.datasets[0].data;
  dataArr.map(data => {
    sum += data;
  });
  let percentage = (value * 100 / sum).toFixed(2) + "%";
  return percentage;
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
      },
      plugins: {
        datalabels: {
          display: false
        }
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
      },
      plugins: {
        datalabels: {
          formatter: mostrarPorcentajes,
          backgroundColor: "rgba(0, 0, 0, .5)",
          color: '#fff',
          font: {
            weight: "bold",
            size: "22"
          }
        }
      }
    }
  });

  var sharedEvent = new Chart($("#chartStudyField"), {
    type: 'horizontalBar',
    data: {
      labels: retos,
      datasets: [
        {
          label: "Participantes " + participantes.length,
          backgroundColor: colores[0],
          data: cantidadPorRetos
        },
        {
          label: "Mentores " + mentores.length,
          backgroundColor: colores[1],
          data: cantidadPorRetosMentores
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Campos elegidos a participar'
      },
      plugins: {
        datalabels: {
          display: false
        }
      }
    }
  });
  var stageHackaton = new Chart($("#chartStageHackaton"), {
    type: 'doughnut',
    data: {
      labels: etapas,
      datasets: [
        {
          label: "Mentores",
          backgroundColor: colores,
          data: cantidadEtapas
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Etapas por apoyar en el Hackaton'
      },
      plugins: {
        datalabels: {
          formatter: mostrarPorcentajes,
          backgroundColor: "rgba(0, 0, 0, .5)",
          color: '#fff',
          font: {
            weight: "bold",
            size: "22"
          }
        }
      }
    }
  });

  var knowledge = new Chart($("#chartKnowledge"), {
    type: 'doughnut',
    data: {
      labels: conocimientos,
      datasets: [
        {
          label: "Conococimientos a aportar",
          backgroundColor: colores,
          data: cantidadConocimientos
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Conocimientos para aportar'
      },
      plugins: {
        datalabels: {
          formatter: mostrarPorcentajes,
          backgroundColor: "rgba(0, 0, 0, .5)",
          color: '#fff',
          font: {
            weight: "bold",
            size: "22"
          }
        }
      }
    }
  });

  var timeAvailable = new Chart($("#chartTimeAvaialable"), {
    type: 'horizontalBar',
    data: {
      labels: tiempos,
      datasets: [
        {
          label: "Conococimientos a aportar",
          backgroundColor: colores,
          data: cantidadTiempos
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'Tiempo disponible'
      },
      plugins: {
        datalabels: {
          formatter: mostrarPorcentajes,
          backgroundColor: "rgba(0, 0, 0, .5)",
          align: "right",
          color: '#fff',
          font: {
            weight: "bold",
            size: "22"
          }
        }
      }
    }
  });
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
















