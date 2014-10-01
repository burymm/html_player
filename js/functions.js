/**
 * Created by mbury on 10/1/2014.
 */



function clearVideo() {
    document.getElementById('video-player').pause();

    _($('#video-player source')).forEach(function(source) {
        source.removeAttribute('src');
    });

    document.getElementById('video-player').load();
}

function loadVideo(streams) {
    _(streams).forEach(function(stream) {
        var source = document.getElementById(stream.type + 'src');
        source.src = stream.url;
    });

    /*document.getElementById('video-player').load();*/
}
