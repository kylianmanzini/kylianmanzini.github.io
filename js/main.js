$('#works-link').on("click", function() {
    $('.works-container').show();
    $('.about-container').hide();
    $('.contact-container').hide();
})
$('#about-link').on("click", function() {
    $('.works-container').hide();
    $('.about-container').show();
    $('.contact-container').hide();
})
$('#contact-link').on("click", function() {
    $('.works-container').hide();
    $('.about-container').hide();
    $('.contact-container').show();
})
$('.link').on("click", function() {
    $('.link').removeClass("active");
    $(this).toggleClass("active");
})

$('.work').on("click", function() {
    $('.darken').show()
    $('body').css("overflow", "hidden")
    $('.work-show').show()

    var el = $(this)
    var show = $('.work-show-content')
    var imgSrc = $(this).children('div').children('img').attr("src")
    var imgAlt = $(this).children('div').children('img').attr("alt")

    show.children('h3').html(el.children('h3').html())
    show.children('p').html(el.children('p').html())
    show.children('div').children('img').attr("src", imgSrc)
    show.children('div').children('img').attr("alt", imgAlt)
})

$('.close').on("click", function() {
    $('.darken').hide();
    $('body').css("overflow", "scroll")
    $('.work-show').hide();
})