$("#error-message").fadeOut(0);
$("#error-message").slideUp(0);
$("#success-message").slideUp(0);

$(window).resize(function () {
  let message_width =
    $(window).height() / 2 - $("#success-message").innerHeight() / 2;
  $("#success-message").css("top", message_width);
});

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

    $("#user-email").text(input);

    setTimeout(() => {
      $("#sign-up").fadeOut();
    }, 400);

    setTimeout(() => {
      $("#success-message").slideDown();
    }, 400);
  }
});

function validate(email) {
  var pattern = /^[\w]+[\.\w+]*[\w]+@[\w]+\.[\w]+[\.\w]*[\w]+$/;
  return pattern.test(email);
}

$("#success-message__button").click(function () {
  $("#success-message").slideUp();

  $("#email").val("");

  setTimeout(() => {
    $("#user-email").text("");
    $("#sign-up").fadeIn();
  }, 400);
});
