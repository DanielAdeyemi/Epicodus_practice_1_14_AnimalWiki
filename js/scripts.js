$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    let button = $("input:radio[name=animal]:checked").val();
    if (button === "Snake") {
      $("#turtles").hide();
      $("#cougars").hide();
      $("#snakes").show();
    } else if (button === "Turtle") {
      $("#snakes").hide();
      $("#cougars").hide();
      $("#turtles").show();
    } else {
      $("#turtles").hide();
      $("#snakes").hide();
      $("#cougars").show();
    }
  });
});