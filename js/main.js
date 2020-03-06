jQuery(document).ready(function( $ ) {

  // Smooth scroll for the menu and links with .scrollto classes
  $('.smothscroll').on('click', function(e) {
    e.preventDefault();
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {

        $('html, body').animate({
          scrollTop: target.offset().top - 53
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $('.carousel').carousel({
    interval: 3500
  });

  var skillColor = "#33E1ED"
  var emptyColor = "#95a5a6"

  var skillLevel = 100
  var doughnutData = [{
      value: skillLevel,
      color: skillColor
    },
    {
      value: 100-skillLevel,
      color: emptyColor
    }
  ];
  var myDoughnut = new Chart(document.getElementById("skill1").getContext("2d")).Doughnut(doughnutData);

  var skillLevel = 75
  var doughnutData = [{
      value: skillLevel,
      color: skillColor
    },
    {
      value: 100-skillLevel,
      color: emptyColor
    }
  ];
  var myDoughnut = new Chart(document.getElementById("skill2").getContext("2d")).Doughnut(doughnutData);

  var skillLevel = 80
  var doughnutData = [{
      value: skillLevel,
      color: skillColor
    },
    {
      value: 100-skillLevel,
      color: emptyColor
    }
  ];
  var myDoughnut = new Chart(document.getElementById("skill3").getContext("2d")).Doughnut(doughnutData);

  var skillLevel = 80
  var doughnutData = [{
      value: skillLevel,
      color: skillColor
    },
    {
      value: 100-skillLevel,
      color: emptyColor
    }
  ];
  var myDoughnut = new Chart(document.getElementById("skill4").getContext("2d")).Doughnut(doughnutData);

  var skillLevel = 75
  var doughnutData = [{
      value: skillLevel,
      color: skillColor
    },
    {
      value: 100-skillLevel,
      color: emptyColor
    }
  ];
  var myDoughnut = new Chart(document.getElementById("skill5").getContext("2d")).Doughnut(doughnutData);

  var skillLevel = 100
  var doughnutData = [{
      value: skillLevel,
      color: skillColor
    },
    {
      value: 100-skillLevel,
      color: emptyColor
    }
  ];
  var myDoughnut = new Chart(document.getElementById("skill6").getContext("2d")).Doughnut(doughnutData);
});
