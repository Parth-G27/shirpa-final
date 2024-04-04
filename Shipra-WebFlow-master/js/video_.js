function openPopup(videoId) {
    var popupContainer = document.getElementById('popup-container');
    var youtubeIframe = document.getElementById('youtube-iframe');

    youtubeIframe.src = "https://www.youtube.com/embed/" + videoId;
    popupContainer.classList.add('show');
}

function closePopup() {
    var popupContainer = document.getElementById('popup-container');
    var youtubeIframe = document.getElementById('youtube-iframe');

    youtubeIframe.src = "";
    popupContainer.classList.remove('show');
}

var popupButtons = document.querySelectorAll('.play-button');
popupButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var videoId = this.getAttribute('data-video-id');
        openPopup(videoId);
    });
});



// Video One
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video-one');
  
    // Add event listener to loop the video
    video.addEventListener('ended', function () {
      video.currentTime = 0; // Reset the video to the beginning
      video.play(); // Start playing again
    });
  
    // Add a function to play the video
    function playVideo() {
      video.play();
    }
  
    // Add a function to pause the video
    function pauseVideo() {
      video.pause();
    }
  
    // Optionally, you can add play/pause controls or triggers
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
  
    playButton.addEventListener('click', playVideo);
    pauseButton.addEventListener('click', pauseVideo);
  });
  