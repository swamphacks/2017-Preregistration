$(document).ready(function() {
  var ctx = document.getElementById("participantsChart");
  var participantsChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ["2015", "2016", "2017"],
          datasets: [
            {
                label: 'UF',
                data: [80, 240, 300],
                backgroundColor: [
                    '#416fb3'              ]
            },
            {
                label: 'Other Florida',
                data: [15, 108, 140],
                backgroundColor: [
                    '#26b170'              ]
            },
            {
              label: 'Out-of-State',
              data: [2, 44, 70],
              backgroundColor: [
                  '#61cbed'
              ]
          }
  ]
      },
      options: {
          scales: {
              yAxes: [{
                  stacked: true
              }]
          }
      }
  });


  var schools = document.getElementById("schoolsChart");
  var schoolsChart = new Chart(schools, {
      type: 'radar',
      data: {
          labels: ["FSU", "FIU", "FIT", "UCF", "Embry-Riddle", "Stetson", "Georgia Tech", "Other Florida", "Other Out-of-State"],
          datasets: [
            {
                label: "2016",
                data: [45, 27, 4, 19, 4, 5, 36, 20, 10],
                backgroundColor: 'rgba(4, 16, 235, 1)'
            }
          ]
      },
      options: {
          scales: {
              yAxes: [{
                  stacked: true
              }]
          }
      }
  });
});
