
$(function () {
    //文字超過省略
    var len = 200; // 超過50個字以"..."取代
    $(".ellip").each(function (i) {
        if ($(this).text().length > len) {
            $(this).attr("title", $(this).text());
            var text = $(this).text().substring(0, len - 1) + "...";
            $(this).text(text);
        }
    })

    //slide fixed/
    $(window).scroll(function () {
        let scrollVal = $(this).scrollTop();
        if (scrollVal > 100) {
            $('.top_menu').css('top', '100');
            $('.top_menu').css('transition', '.5s');

        }
    })

    //contact
    //material contact form
    $('.contact-form').find('.form-control').each(function () {
        var targetItem = $(this).parent();
        if ($(this).val()) {
            $(targetItem).find('label').css({
                'top': '10px',
                'fontSize': '14px'
            });
        }
    })
    $('.contact-form').find('.form-control').focus(function () {
        $(this).parent('.input-block').addClass('focus');
        $(this).parent().find('label').animate({
            'top': '10px',
            'fontSize': '14px'
        }, 300);
    })
    $('.contact-form').find('.form-control').blur(function () {
        if ($(this).val().length == 0) {
            $(this).parent('.input-block').removeClass('focus');
            $(this).parent().find('label').animate({
                'top': '25px',
                'fontSize': '18px'
            }, 300);
        }
    })

    // menu_mobile
    var burgerMenu = document.getElementById('burger-menu');
    var overlay = document.getElementById('menu');
    burgerMenu.addEventListener('click', function () {
        this.classList.toggle("close");
        overlay.classList.toggle("overlay");
    });

    //product carouselur
    $(".fancybox").fancybox({
        groupAttr: 'rel',
        openEffect: 'elastic',
        closeEffect: 'elastic',
        closeBtn: false,
        helpers: {
            title: {
                type: 'float'
            },
            button: {}
        }
    });
});
