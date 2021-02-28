const videoPlayer = document.getElementById('videoPlayer')

console.log(videoPlayer)

videoPlayer.setVideo = () => {
    videoPlayer.controls = false
    videoPlayer.muted = true
    switch(map.currentMarker) {
        case 1:
            videoPlayer.src = "soundvisualizer/final/hiking_animated.mp4"
            break;
        case 2:
            videoPlayer.src = "soundvisualizer/final/idea_animated.mp4"
            break;
        case 3:
            videoPlayer.src = "soundvisualizer/final/hiking_animated.mp4"
            break;
        case 4:
            videoPlayer.src = "soundvisualizer/final/intro_animated.mp4"
            break;
        default: 
            return
    }
}
