$(function() {
  $("#preloader").css("display", "none");

  $("#message").on("focus", function() {
    $("#helpForm")
      .text("Warning: the message must be more than 40 characters!")
      .css("color", "orange");
  });
  $("#message").on("blur", function() {
    $("#helpForm").text("");
  });

  $("#message").on("keyup", checkAll);

  $("form").on("submit", function(event) {
    event.preventDefault();
    checkAll();
  });

  function checkAll() {
    const messageVal = $("#message").val();
    const messageCharacters = messageVal.length;
    if (messageCharacters < 40) {
      $("#helpForm")
        .text("Please enter more than 40 characters!")
        .css("color", "red");
    } else {
      $("#helpForm")
        .text("If you are ready, send your message...")
        .css("color", "green");
    }
  }
  //the end
});
