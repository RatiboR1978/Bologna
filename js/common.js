$(function () {
    /* Скролл до инстограмма
     =========================*/

    $('.page-header__my-life').on('click', function () {
        var instagramOffset = $('.instagram').offset().top;

        $('html, body').animate({
            scrollTop: instagramOffset
        }, 500)
    })

    /* Фиксация меню
     =========================*/

    var headerH = $('.page-header').height(),
        navH = $('.page-header__wrap').innerHeight();
    $(document).on('scroll', function () {
        var documentScroll = $(this).scrollTop();
        if (documentScroll > headerH) {
            $('.page-header__wrap').addClass('page-header__wrap-fixed');
            $('.page-header').css('paddingTop', navH);
        } else {
            $('.page-header__wrap').removeClass('page-header__wrap-fixed');
            $('.page-header').removeAttr('style');
        }
    })



});