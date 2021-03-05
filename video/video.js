const videoPlayer = document.getElementById("videoPlayer");
videoPlayer.controls = false;
videoPlayer.muted = true;
console.log(videoPlayer);
const logoAnimated = document.getElementById('intro-animated')
console.log(logoAnimated)

videoPlayer.setVideo = () => {
  videoPlayer.controls = false;
  videoPlayer.muted = true;
  switch (map.currentMarker) {
    case 1:
      videoPlayer.src = "soundvisualizer/final/hiking_animated.mp4";
      break;
    case 2:
      videoPlayer.src = "soundvisualizer/final/idea_animated.mp4";
      break;
    case 3:
      videoPlayer.src = "soundvisualizer/final/what-is-track.mp4";
      break;
    case 4:
      videoPlayer.src = "soundvisualizer/final/added-value.mp4";
      break;
    default:
      return;
  }
};

logoAnimated.addEventListener('click', () => {
  logoAnimated.play()
  
  console.log('click')
})

logoAnimated.addEventListener('ended', () => {
  document.getElementById('map').scrollIntoView({behavior: 'smooth'})
  const logoStill = document.getElementById('logo-hero').innerHTML = '<object class="logo-hero" id ="logo-hero-still" width="1920px" height="auto" data = "assets/img/track_logo_still.png" type = "image/png"></object >'
  console.log(logoStill)
})