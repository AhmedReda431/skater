$(function () {
  $(".hidden-icon").click(function () {
    $("nav .navBar .links ul li").toggleClass("active");
  });

  $(".wrapper").click(function () {
    if ($("nav .navBar .links ul li").hasClass("active")) {
      $("nav .navBar .links ul li").removeClass("active");
    }
  });
  $(window).on("scroll", function () {
    var sc = $(window).scrollTop();
    if (sc > 1000) {
      $(".scrollButton").fadeIn(1000);
    } else {
      $(".scrollButton").fadeOut(1000);
    }
  });
  $(".scrollButton").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000, function () {
      $(".scrollButton").fadeOut(1000);
    });
  });

  $(".search").click(function (e) {
    e.preventDefault()
    $(".searchPage").slideDown(500, function () {
      $("body").css({overflowY: "hidden" });
      $(".times").click(function () {
        $(".searchPage").slideUp(500);
        $("body").css({ overflowY: "scroll" });
      });
    });
  });

  $num = $(".ui-card").length;
  $even = $num / 2;
  $odd = ($num + 1) / 2;

  if ($num % 2 == 0) {
    $(".ui-card:nth-child(" + $even + ")").addClass("active");
    $(".ui-card:nth-child(" + $even + ")")
      .prev()
      .addClass("prev");
    $(".ui-card:nth-child(" + $even + ")")
      .next()
      .addClass("next");
  } else {
    $(".ui-card:nth-child(" + $odd + ")").addClass("active");
    $(".ui-card:nth-child(" + $odd + ")")
      .prev()
      .addClass("prev");
    $(".ui-card:nth-child(" + $odd + ")")
      .next()
      .addClass("next");
  }

  $(".ui-card").click(function () {
    $slide = $(".active").width();
    // console.log($(".active").position().left);

    if ($(this).hasClass("next")) {
      $(".container")
        .stop(false, true)
        .animate({ left: "-=" + $slide });
    } else if ($(this).hasClass("prev")) {
      $(".container")
        .stop(false, true)
        .animate({ left: "+=" + $slide });
    }

    $(this).removeClass("prev next");
    $(this).siblings().removeClass("prev active next");

    $(this).addClass("active");
    $(this).prev().addClass("prev");
    $(this).next().addClass("next");
  });

  // Keyboard nav
  $("html body").keydown(function (e) {
    if (e.keyCode == 37) {
      // left
      $(".active").prev().trigger("click");
    } else if (e.keyCode == 39) {
      // right
      $(".active").next().trigger("click");
    }
  });
});
