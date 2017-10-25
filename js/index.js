$(function() {
  $("#list").css("display", "none");

  $("#comcell").on("tap", function() {
    $("#list").fadeIn();
    $("#list li").each(function() {
        $(this).on("tap", function() {
          $(this).children("img").removeClass("gou").parent().siblings().children().addClass("gou");
          $("#comcell").html($(this).text());
          $("#list").fadeOut();
        })
      }

    )

  })



  $("#comper1").on("change", function() {

    var regex = /^1[34578]\d{9}$/;
    var b = regex.test($(this).val());
    if (!b) {
      $("#comper1-warn").html("请重新输入");
    } else {
      $("#comper1-warn").html("");
    }
  });
  $("#comper2").on("change", function() {

    var regex = /^1[34578]\d{9}$/;

    var b = regex.test($(this).val());
    if (!b) {
      $("#comper2-warn").html("请重新输入");
    } else {
      $("#comper2-warn").html("");
    }
  });


})


