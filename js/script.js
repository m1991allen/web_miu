//Initialize Swiper

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    }
});

//文字超過省略
$(function () {
    var len = 200; // 超過50個字以"..."取代
    $(".ellip").each(function (i) {
        if ($(this).text().length > len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, len - 1) + "...";
            $(this).text(text);
        }
    });
});


// about
$(document).ready(function () {
    $("#box1 .colorLayer").animate({ left: "0px" }, 300);
    $("#box1 .colorLayer").delay(400).animate({ left: "120px" }, 300);
    $("#box1 .title").animate({ left: "0px" }, 300);

    $("#box2 .colorLayer").delay(1000).animate({ left: "0px" }, 300);
    $("#box2 .colorLayer").delay(300).animate({ left: "270px" }, 300);
    $("#box2 .title").delay(1000).animate({ left: "0px" }, 300);


    $(".colorLayer2").delay(2300).animate({ left: "0px" }, 300);
    $("#box3 .image img").delay(2300).animate({ left: "0px" });
    $(".colorLayer2").delay(300).animate({ left: "400px" }, 300);
    $(".colorLayer2").delay(300).animate({ width: "0px" }, 300);


    $(".colorLayer3").delay(3500).animate({ left: "0px" }, 300);
    $("#box4 .info").delay(3500).animate({ left: "0px" });
    $(".colorLayer3").delay(300).animate({ left: "400px" }, 300);
    $(".colorLayer3").delay(300).animate({ width: "0px" }, 300);


    $(window).scroll(function () {

        if ($(this).scrollTop() >= 150 && $(this).scrollTop() <= 400) {

            $(".colorLayer4").delay(600).animate({ left: "0px" }, 300);
            $("#box5 .info").delay(600).animate({ left: "0px" });
            $(".colorLayer4").delay(300).animate({ left: "400px" }, 300);
            $(".colorLayer4").delay(300).animate({ width: "0px" }, 300);

            $(".colorLayer5").delay(1800).animate({ left: "0px" }, 300);
            $("#box6 .image img").delay(1800).animate({ left: "0px" });
            $(".colorLayer5").delay(300).animate({ left: "850px" }, 300);
            $(".colorLayer5").delay(300).animate({ width: "0px" }, 300);
        }
    });
});








