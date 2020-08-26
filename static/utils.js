//Preloader
$(window).on("load", function() {
  $(".status").fadeOut();
  $(".preloader")
    .delay(1000)
    .fadeOut("slow");
});

// Dropdown Menu Fade
jQuery(document).ready(function() {
  $(".dropdown").hover(
    function() {
      $(".dropdown-menu", this)
        .stop()
        .fadeIn("fast");
    },
    function() {
      $(".dropdown-menu", this)
        .stop()
        .fadeOut("fast");
    }
  );
});

// Dropdown Menu Fade end

// Back to top

$("#top-scrolltop").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

$(".back-to-top").addClass("hidden-top");
$(window).scroll(function() {
  if ($(this).scrollTop() === 0) {
    $(".back-to-top").addClass("hidden-top");
  } else {
    $(".back-to-top").removeClass("hidden-top");
  }
});

// Dropdown Menu Fade
jQuery(document).ready(function() {
  $(".dropdown").hover(
    function() {
      $(".dropdown-menu", this)
        .stop()
        .fadeIn("fast");
    },
    function() {
      $(".dropdown-menu", this)
        .stop()
        .fadeOut("fast");
    }
  );
});

// Dropdown Menu Fade end

// Back to top

$("#top-scrolltop").on("click", function() {
  $("html, body").animate({ scrollTop: 0 }, 500);
});

$(function($) {
  "use strict";

  $(".back-to-top").addClass("hidden-top");
  $(window).scroll(function() {
    if ($(this).scrollTop() === 0) {
      $(".back-to-top").addClass("hidden-top");
    } else {
      $(".back-to-top").removeClass("hidden-top");
    }
  });

  $(".back-to-top").click(function() {
    $("body,html").animate({ scrollTop: 0 }, 1200);
    return false;
  });
});

// sticky_header
$(window).scroll(function() {
  var width = $(window).width();

  if ($(this).scrollTop() > 211 || width == 1024 || width == 1366) {
    $(".navbar-area").addClass("is-sticky");
    $(".lg-tablet").hide();
  } else {
    $(".navbar-area").removeClass("is-sticky");
    $(".lg-tablet").show();
  }
});

$(function() {
  var width = $(window).width();
  if (width == 1024 || width == 1366) {
    $(".lg-tablet").hide();
  } else {
    $(".lg-tablet").show();
  }
});

//mobile menu script

function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// Scroll to specific values
// scrollTo is the same
window.scroll({
  top: 0,
  left: 0,
  behavior: "smooth"
});

// Scroll certain amounts from current position
window.scrollBy({
  top: 0, // could be negative value
  left: 0,
  behavior: "smooth"
});

$(document).ready(function() {
  $(function() {
    $("a[href*=#]:not([href=#])").click(function() {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var n = $(this.hash);
        if (
          ((n = n.length ? n : $("[name=" + this.hash.slice(1) + "]")),
          n.length)
        )
          return (
            $("html, body").animate({ scrollTop: n.offset().top - 58 }, 1e3), !0
          );
      }
    });
  }),
    $(".nav-item a").click(function() {
      $(".nav-item a").removeClass("active"), $(this).addClass("active");
    });
});

$(function() {
  $("#datetimepicker1").datetimepicker();
});
