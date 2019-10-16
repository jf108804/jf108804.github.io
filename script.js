$(function() {
    // Add a click() method for #login-show
    $("#estimate-show").click(function() {
      $(".estimate").fadeIn();
    });
    $("#form-button").click(function() {
      $(".estimate").fadeIn();
    });
    $(".close-modal").click(function() {
        $(".estimate").fadeOut();
      });
    const oneDay = 24 * 60 * 60 * 1000;

function diffDays() {
  const date1 = new Date($("#dateInput1").val());
  const date2 = new Date($("#dateInput2").val());
  const diff = (date2 - date1) / oneDay;

  return diff;
}

function sum() {
  const days = diffDays();
  console.log("days", days);
  $("#total").text(days);

  // Calculate cost (2 price tiers, standard and rush prices)
  const words = parseFloat($("#word").val() || "0");
  console.log("words", words);

  const perDay = words / days;
  console.log("perDay", perDay);

  const add = perDay < 5000 ? words * 3 : words * 5;

  console.log("add", add);
  $("#result").text("   ¥" + add).css("color", "green");
}

  $(function() {
  $("input").change(sum);
});
  });