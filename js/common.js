$(function () {
    /* Скролл до инстограмма
     =========================*/

    $('.page-header__my-life').on('click', function () {
        var instagramOffset = $('.instagram').offset().top;

        $('html, body').animate({
            scrollTop: instagramOffset - 300
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

    /* Модальное окно
     =========================*/
    var widthModal = $('.modal').innerWidth()/2;
    $('.modal').css({
        'marginLeft': '-' + widthModal + 'px'
    });
    $('#contact').on('click', function (e) {
        e.preventDefault();
        $('.modal').fadeIn();
        $('body').append('<div class="overlay"></div>').addClass('open-modal') //Скрываем скролл

    });
    $('.btn_red, .overlay').on('click', function (e) {
        e.preventDefault();
        $('.modal').fadeOut();
        $('body').removeClass('open-modal') //Проявляем скролл
        $('.overlay').remove();
    });
    $('body').on('click', '.overlay', function () {
        $('.modal').fadeOut();
        $('body').removeClass('open-modal') //Проявляем скролл
        $('.overlay').remove();
    });

    /* Аккардион
     =========================*/
    /*$('.faq-title').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if(!$this.hasClass('active')) {
            $('.faq-content').slideUp();
            $this.removeClass('active')
        }
        $this.toggleClass('active');
        $this.next().slideToggle(500)
    })*/

    $('.faq-title').on('click', function (e) {
        e.preventDefault();
        var $this = $(this),
            answerId = $this.attr('href');

        if(!$this.hasClass('active')) {
            $('.faq-content').slideUp();
            $this.removeClass('active')
        }
        $this.toggleClass('active');
        $(answerId).slideToggle(500)
    });

    /* Всплывающая подсказка
     =========================*/
    $('.popup-linck').hover(function () {
        var $this = $(this),
            popupId = $this.attr('href');
        $(popupId).fadeIn();
    }, function () {
        $('.popup').fadeOut();
    })

    /* Masonry
     =========================*/

    $('.page-content__wrapper').masonry({
        itemSelector: '.page-content__block',
        columnWidth: 400,
        gutter: 40

    });
    
});