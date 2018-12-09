var the_value = [];
$(document).ready(function() {
  $("#forms").click(function(event) {
    $('.radio input:checked').each(function() {
      the_value.push($(this).val());
      event.preventDefault();
    });
    var total = 0;
    for (var i = 0; i < the_value.length; i++) {
      total += the_value[i] << 0;
    }
    $("#result").val(total);
  });
  $("#forms").click(function(event) {
    $("#quiz").fadeOut('slow');
    $("#quiz-results").fadeIn('slow');
  });
  $("#back").click(function(event) {
    $("#quiz-results").fadeOut('slow');
    $("#quiz").fadeIn('slow');
  });
});
