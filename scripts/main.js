$(function (){
    var popupWrap = $('.popup-wrap');
    $('.app-pros li').on('click', function (event) {
        var current = $(event.target);
        var currentClass = current.attr('class').split(' ')[0];
        $('.app-pros li').removeClass('active');
        current.addClass('active');
        $('.app-text li').removeClass('active');
        $('.app-text').find('.' + currentClass + '-text').addClass('active');
    });
    $('.get-app').on('click', function (event) {
        event.preventDefault();
        popupWrap.fadeIn();
    });
    $('.close').on('click', function () {
        popupWrap.fadeOut();
    });
});

