let offsetTop = $("#s2").offset().top;
$(window).scroll(function () {
  let windowScroll = $(window).scrollTop();
  if (windowScroll > offsetTop - 70) {
    $(".navbar").css("backgroundColor", "rgba(0,0,0,.7)");
    $("#btnUp").fadeIn(500);
  } else {
    $(".navbar").css("backgroundColor", "transparent");
    $("#btnUp").fadeOut(500);
  }
});
$("a[href^='#']").click(function (e) {
  let linkHref = $(e.target).attr("href");
  let scrollOffset = $(linkHref).offset().top;
  $("html,body").animate({ scrollTop: scrollOffset }, 300);
});
$("#btnUp").click(function () {
  $("html,body").animate({ scrollTop: 0 }, 300);
});
$(document).ready(function () {
  $("#loading .sk-chase").fadeOut(1000, function () {
    $("#loading").fadeOut(2000, function () {
      $("#loadin").remove();
      $("body").css("overflow", "auto");
    });
  });
});
$("#sideBar i").click(function () {
  let width = $("#box").outerWidth();
  if ($("#sideBar").css("left") == "0px") {
    $("#sideBar").animate({ left: `-${width}` }, 1000);
  } else {
    $("#sideBar").animate({ left: `0` }, 1000);
  }
});
let colorSpan = $("#sideBar span");
for (let i = 0; i < colorSpan.length; ++i) {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  colorSpan.eq(i).css("backgroundColor", `rgb(${red},${blue},${green})`);
}
colorSpan.click(function (e) {
  let color = $(e.target).css("backgroundColor");
  $(".change").css("color", color);
});
// Counter
let counter1 = document.getElementById("counterP1");
let c1 = 0;
let interv1 = setInterval(increaseCounter1, 50);
function increaseCounter1() {
  c1++;
  counter1.innerHTML = c1;
  if (c1 == 100) {
    clearInterval(interv1);
  }
}



let counter2 = document.getElementById("counterP2");
let c2 = 0;
let interv2 = setInterval(increaseCounter2, 50);
function increaseCounter2() {
  c2++;
  counter2.innerHTML = c2;
  if (c2 == 250) {
    clearInterval(interv2);
  }
}




let counter3 = document.getElementById("counterP3");
let c3 = 0;
let interv3 = setInterval(increaseCounter3, 50);
function increaseCounter3() {
  c3++;
  counter3.innerHTML = c3;
  if (c3 == 650) {
    clearInterval(interv3);
  }
}





let counter4 = document.getElementById("counterP4");
let c4 = 0;
let interv4 = setInterval(increaseCounter4, 50);
function increaseCounter4() {
  c4++;
  counter4.innerHTML = c4;
  if (c4 == 34) {
    clearInterval(interv4);
  }
}
