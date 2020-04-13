$(function () {
    // Ibg
    function ibg() {

        $.each($('.ibg'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
            }
        });
    }
    ibg();
    // Burger

    $("#burger").on("click", function(event){
        event.preventDefault();
        $("#h-header").toggleClass("active");
        $(this).toggleClass("active");
        $("#header-menu").toggleClass("active");
        $("body").toggleClass("active");
    })
    // Smooth scroll

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        let blockScroll = $(this).data("scroll"),
            blockOffset = $(blockScroll).offset().top;

        $("#burger").removeClass("active");
        $("body").removeClass("active");
        $("#header-menu").removeClass("active");
        
        $("html,body").animate({
            scrollTop: blockOffset- 70
        },700);
    });

    // Header fixed

    let header = $("#h-header"),
        bannerH = $("#banner").innerHeight(),
        scrollOfsize = $(this).scrollTop();
        CheckScroll(scrollOfsize,bannerH);

    $(window).on("scroll resize",function(){
        scrollOfsize = $(this).scrollTop();
        CheckScroll(scrollOfsize,bannerH);
    });

    function CheckScroll(scrollOfsize,bannerH){
        if(scrollOfsize > bannerH){
            header.addClass("fixed");
        }
        else{
            header.removeClass("fixed");
        }
    }
    // Modal Close
    $("#m-close").on("click", function(event){
        event.preventDefault();
        
        $(".wedo-modal").toggleClass("close");
    });
    // SlickSlider
    $("#w-slider").slick({
        arrows:true,
        dots:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        easing:'ease',
        speed:1000,
    });
});