jQuery(document).ready(function ($) {
    $(window).resize(function () {
        if ($(window).width() < 650) {
            $('#logo,#glyphicons').attr('class', 'col-xs-12').css({ 'text-align': 'center' });
            $('.glyphicon').css({ 'float': 'none' });
            $('#pre-menu').css({ 'height': '12em' });
        }
        else {
            $('#logo').attr('class', 'col-xs-3');
            $('#glyphicons').attr('class', 'col-xs-9');
            $('.glyphicon').css('float', 'right');
            $('#pre-menu').css('height', '6em');
        }
    });
    if ($(window).width() < 650) {
        $('#logo,#glyphicons').attr('class', 'col-xs-12').css({ 'text-align': 'center' });
        $('.glyphicon').css({ 'float': 'none' });
        $('#pre-menu').css({ 'height': '12em' });
    }
});