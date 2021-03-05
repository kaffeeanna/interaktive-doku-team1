const barHeight = 8
const barWidth = 2
const mediaControls = false


const currentWave = document.getElementById('currentWave')
const playRateBtn = document.getElementById('playRateBtn')
playRateBtn.value = 1
const playPauseBtn = document.getElementById('playPauseBtn')
const muteBtn = document.getElementById('muteBtn')
// const skip1 = document.getElementById('skip1')
// const skip2 = document.getElementById('skip2')
const gps_marker2 = document.getElementById('gps')
const visualizer = document.getElementById('visualizerContainer')

playPauseBtn.onclick = () => {
    visualizer.track.playPause()
    switch (visualizer.track.isPlaying()){
        case true:
            videoPlayer.play()
            playPauseBtn.style.backgroundImage = 'url("../assets/img/pause-icon.svg")';
            switch (map.currentMarker) {
                case 1:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    if (gps_marker2.style.animationPlayState === 'paused') {
                        gps_marker2.style.animationPlayState = 'running'
                        gps_markerSmall.style.animationPlayState = 'running'
                    } else {
                        gps_marker2.style.animation = `marker1to2 ${3+ visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                        gps_markerSmall.style.animation = `marker1to2 ${3 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                    }
                    break;
                case 2:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    if (gps_marker2.style.animationPlayState === 'paused') {
                        gps_marker2.style.animationPlayState = 'running'
                        gps_markerSmall.style.animationPlayState = 'running'
                    } else {
                        gps_marker2.style.animation = `marker2to3 ${3 + visualizer.track.getDuration()}s ease-in-out forwards`
                        gps_markerSmall.style.animation = `marker2to3 ${3 + visualizer.track.getDuration()}s ease-in-out forwards`
                    }
                    break;
                case 3:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    if (gps_marker2.style.animationPlayState === 'paused') {
                        gps_marker2.style.animationPlayState = 'running'
                        gps_markerSmall.style.animationPlayState = 'running'
                    } else {
                        gps_marker2.style.animation = `marker3to4 ${3 + visualizer.track.getDuration()}s ease-in-out forwards`
                        gps_markerSmall.style.animation = `marker3to4 ${3 + visualizer.track.getDuration()}s ease-in-out forwards`
                    }
                    break;
                case 4:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    if (gps_marker2.style.animationPlayState === 'paused') {
                        gps_marker2.style.animationPlayState = 'running'
                        gps_markerSmall.style.animationPlayState = 'running'
                    } else {
                        gps_marker2.style.animation = `marker4to1 ${3 + visualizer.track.getDuration()}s ease-in-out forwards`
                        gps_markerSmall.style.animation = `marker4to1 ${3 + visualizer.track.getDuration()}s ease-in-out forwards`
                    }
                    break;
            }
            break;
        case false:
            videoPlayer.pause()
            playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            switch (map.currentMarker) {
                case 1:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    gps_marker2.style.animationPlayState = 'paused'
                    gps_markerSmall.style.animationPlayState = 'paused'
                    break;
                case 2:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    gps_marker2.style.animationPlayState = 'paused'
                    gps_markerSmall.style.animationPlayState = 'paused'
                    break;
                case 3:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    gps_marker2.style.animationPlayState = 'paused'
                    gps_markerSmall.style.animationPlayState = 'paused'
                    break;
                case 4:
                    gps_marker2.style.display = 'block'
                    gps_markerSmall.style.display = 'block'
                    gps_marker2.style.animationPlayState = 'paused'
                    gps_markerSmall.style.animationPlayState = 'paused'
                    break;
            }
            break;
    }
}

muteBtn.onclick = () => {
   visualizer.track.toggleMute()
    visualizer.track.getMute() ? muteBtn.style.backgroundImage = 'url("../assets/img/mute-icon.svg")' : muteBtn.style.backgroundImage = 'url("../assets/img/unmute-icon.svg")'
}

playRateBtn.onclick = () => {
    if (playRateBtn.value == 1){
        playRateBtn.style.backgroundImage = 'url("../assets/img/fasterRate-icon.svg")'
        playRateBtn.value = 1.25
    } else if (playRateBtn.value == 1.25){
        playRateBtn.style.backgroundImage = 'url("../assets/img/fastestRate-icon.svg")'
        playRateBtn.value = 1.5
    } else if (playRateBtn.value == 1.5) {
        playRateBtn.style.backgroundImage = 'url("../assets/img/slowestRate-icon.svg")'
        playRateBtn.value = 0.5
    } else if (playRateBtn.value == 0.5) {
        playRateBtn.style.backgroundImage = 'url("../assets/img/slowerRate-icon.svg")'
        playRateBtn.value = 0.75
    } else if (playRateBtn.value == 0.75) {
        playRateBtn.style.backgroundImage = 'url("../assets/img/normalRate-icon.svg")'
        playRateBtn.value = 1
    }
    visualizer.track.setPlaybackRate(playRateBtn.value)
    videoPlayer.playbackRate = playRateBtn.value
}

visualizer.track = WaveSurfer.create({
    container: '#currentWave',
    waveColor: '#937E74',
    progressColor: '#445957',
    barHeight: barHeight,
    barWidth: barWidth,
    mediaControls: mediaControls,
    hideScrollbar: true,
    responsive: true
});

visualizer.loadWave = () => {
    switch (map.currentMarker) {
        case 1:
            visualizer.track.load('soundvisualizer/final/hiking_animated.mp4');
            playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            visualizer.track.on('finish', () => {
                map.currentMarker = 2
                playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            })
            break;
        case 2:
            visualizer.track.load('soundvisualizer/final/idea_animated.mp4');
            playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            visualizer.track.on('finish', () => {
                map.currentMarker = 3
                playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            })
            break;
        case 3:
            visualizer.track.load('soundvisualizer/final/intro_animated.mp4');
            playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            visualizer.track.on('finish', () => {
                map.currentMarker = 4
                playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            })
            break;
        case 4:
            visualizer.track.load('soundvisualizer/final/hiking_animated.mp4');
            playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            visualizer.track.on('finish', () => {
                map.currentMarker = 1
                playPauseBtn.style.backgroundImage = 'url("../assets/img/play-icon.svg")';
            })
            break;
    }
}

visualizer.track.on('seek', () => {
    videoPlayer.currentTime = visualizer.track.getCurrentTime()
    gps_marker2.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    
    switch (map.currentMarker) {
        case 1:
            if (visualizer.track.isPlaying()) {
                gps_marker2.style.animation = `marker1to2 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_marker2.style.animationPlayState = 'running'
                
                gps_markerSmall.style.animation = `marker1to2 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_markerSmall.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animationPlayState = 'paused'
                gps_markerSmall.style.animationPlayState = 'paused'
            }
            break;
        case 2:
            if (visualizer.track.isPlaying()) {
                gps_marker2.style.animation = `marker2to3 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_marker2.style.animationPlayState = 'running'
                
                gps_markerSmall.style.animation = `marker2to3 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_markerSmall.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animationPlayState = 'paused'
                gps_markerSmall.style.animationPlayState = 'paused'
            }
            break;
        case 3:
            if (visualizer.track.isPlaying()) {
                gps_marker2.style.animation = `marker3to4 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_marker2.style.animationPlayState = 'running'
                
                gps_markerSmall.style.animation = `marker3to4 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_markerSmall.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animationPlayState = 'paused'
                gps_markerSmall.style.animationPlayState = 'paused'
            }
            break;
        case 4:
            if (visualizer.track.isPlaying()) {
                gps_marker2.style.animation = `marker4to1 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_marker2.style.animationPlayState = 'running'
                
                gps_markerSmall.style.animation = `marker4to1 ${5 + visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-in-out forwards`
                gps_markerSmall.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animationPlayState = 'paused'
                gps_markerSmall.style.animationPlayState = 'paused'
            }
            break;
    }
})