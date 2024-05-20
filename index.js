$("#error-message").fadeOut(0);
$("#error-message").slideUp(0);

$("#sign-up-button").click(function () {
  let input = $("#email").val();
  if (input === "" || validate(input) === false) {
    $("#email").addClass("sign-up__input-error");

    $("#error-message").slideUp();
    $("#error-message").slideDown();
    for (var count = 0; count < 3; count++) {
      $("#error-message").fadeIn();
      $("#error-message").fadeOut();
      $("#error-message").fadeIn();
    }
  } else {
    $("#email").removeClass("sign-up__input-error");

    $("#error-message").slideUp();
    $("#error-message").fadeOut();
  }
});

function validate(email) {
  var pattern = /^[\w]+[\.\w+]*[\w]+@[\w]+\.[\w]+[\.\w]*[\w]+$/;
  return pattern.test(email);
}
