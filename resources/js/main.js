$(document).ready(function () {
  // .........................sticky menu 
  $(".js--services-section").waypoint(function(direction){
    if (direction=="down")
    {
      $("nav").addClass("sticky");
    }
    else
    {
      $("nav").removeClass("sticky");
    }

  });

  // ...................... mixitup(portfolilo sevction)-----
  // ...................... mixitup(portfolilo sevction)-----
  var mixer = mixitup(".container");
});
