/**
 * Created by mbury on 10/1/2014.
 */


/*
* stop playing video and remove all links from video player
* */
function clearVideo() {
    document.getElementById('video-player').pause();
    _($('#video-player source')).forEach(function(source) {
        source.removeAttribute('src');
    });
    document.getElementById('video-player').load(); // unload video from player
}

/*
* update links to video player
* */

function loadVideo(streams) {
    _(streams).forEach(function(stream) {
        var source = document.getElementById(stream.type + 'src');
        source.src = stream.url;
    });
}
