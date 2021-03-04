$(window).on('load', function() {
    var preloader = $('#bgpreloader');
    var spinner = preloader.find('.preloader');
    spinner.fadeOut();
    preloader.fadeOut('slow', function() { preloader.remove(); });
    var color;
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i))
        color = '#000000';
    else
        color = '#ffffff';
    Particles.init({
        selector: '.background',
        color: color,
        connectParticles: true,
        maxParticles: 70
    });
});

$(document).ready(function() {
    
    document['oncontextmenu'] = function() {return false;}
    document['onselectstart'] = function() {return false;}
    $('.links > a, i').mousedown(function() {
        $(this).hide(0, function() {
            $(this).fadeTo(0, 1);
        });
    });
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome) {
        $('#iframeAudio').remove();
    } else {
        $('#playAudio').remove();
    }
});