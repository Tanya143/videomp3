// Replace 'YOUR_API_KEY' with your actual API key
const apiKey = 'YOUR_API_KEY';
const videoId = 'YOUR_UNLISTED_VIDEO_ID';

// Load the YouTube API asynchronously
function loadYouTubeAPI() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
}

// Callback function called when the YouTube API is ready
function onYouTubeIframeAPIReady() {
    const player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: videoId,
        playerVars: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'fs': 1,
            'modestbranding': 1
        },
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Callback function called when the player is ready
function onPlayerReady(event) {
    // You can perform additional actions when the player is ready
}

// Callback function called when the player's state changes
function onPlayerStateChange(event) {
    // You can perform additional actions based on player state changes
}

// Load the YouTube API and initialize the player
loadYouTubeAPI();
