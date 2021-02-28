const barHeight = 8
const barWidth = 2
const mediaControls = false


const currentWave = document.getElementById('currentWave')
const playBtn = document.getElementById('playBtn')
const pauseBtn = document.getElementById('pauseBtn')
const skip1 = document.getElementById('skip1')
const skip2 = document.getElementById('skip2')
const gps_marker2 = document.getElementById('gps')
const visualizer = document.getElementById('visualizerContainer')
console.log(visualizer)
// const running = gps_marker2.style.animationPlayState === 'running'

playBtn.onclick = () => {
    console.log(map.currentMarker)
    visualizer.track.play()
    videoPlayer.play()
    switch (map.currentMarker) {
        case 1:
            gps_marker2.style.display = 'block'
            if (gps_marker2.style.animationPlayState === 'paused') {
                gps_marker2.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animation = `marker1to2 ${visualizer.track.getDuration()}s ease-in-out forwards`
            }
            break;
        case 2:
            gps_marker2.style.display = 'block'
            if (gps_marker2.style.animationPlayState === 'paused') {
                gps_marker2.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animation = `marker2to3 ${visualizer.track.getDuration()}s ease-in-out forwards`
            }
            break;
        case 3:
            gps_marker2.style.display = 'block'
            if (gps_marker2.style.animationPlayState === 'paused') {
                gps_marker2.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animation = `marker3to4 ${visualizer.track.getDuration()}s ease-in-out forwards`
            }
            break;
        case 4:
            gps_marker2.style.display = 'block'
            if (gps_marker2.style.animationPlayState === 'paused') {
                gps_marker2.style.animationPlayState = 'running'
            } else {
                gps_marker2.style.animation = `marker4to1 ${visualizer.track.getDuration()}s ease-in-out forwards`
            }
            break;
    }
}

skip1.onclick = () => {
    track1.setCurrentTime(13)
    track1.play()
    gps_marker2.style.display = 'block'
    gps_marker2.style.animation = `marker1-1to2 ${visualizer.track1.getDuration() - visualizer.track.getCurrentTime()}s ease-out forwards`
}

skip2.onclick = () => {
    track1.setCurrentTime(25)
    track1.play()
    gps_marker2.style.display = 'block'
    gps_marker2.style.animation = `marker1-2to2 ${visualizer.track.getDuration() - visualizer.track.getCurrentTime()}s ease-out forwards`
}

pauseBtn.onclick = () => {
    visualizer.track.pause()
    videoPlayer.pause()
    switch (map.currentMarker) {
        case 1:
            gps_marker2.style.display = 'block'
            gps_marker2.style.animation = `marker1to2 ${visualizer.track.getDuration()}s ease-in-out forwards`
            gps_marker2.style.animationPlayState = 'paused'
            break;
        case 2:
            gps_marker2.style.display = 'block'
            gps_marker2.style.animation = `marker2to3 ${visualizer.track.getDuration()}s ease-in-out forwards`
            gps_marker2.style.animationPlayState = 'paused'
            break;
        case 3:
            gps_marker2.style.display = 'block'
            gps_marker2.style.animation = `marker3to4 ${visualizer.track.getDuration()}s ease-in-out forwards`
            gps_marker2.style.animationPlayState = 'paused'
            break;
        case 4:
            gps_marker2.style.display = 'block'
            gps_marker2.style.animation = `marker4to1 ${visualizer.track.getDuration()}s ease-in-out forwards`
            gps_marker2.style.animationPlayState = 'paused'
            break;
    }
}

visualizer.track = WaveSurfer.create({
    container: '#currentWave',
    waveColor: '#937E74',
    progressColor: '#445957',
    barHeight: barHeight,
    barWidth: barWidth,
    mediaControls: mediaControls,
    hideScrollbar: true
});

visualizer.track.on('seek', () => {
    console.log('interaction')
    console.log(visualizer.track.getCurrentTime())
    videoPlayer.currentTime = visualizer.track.getCurrentTime()
})

visualizer.loadWave = () => {
    switch (map.currentMarker) {
        case 1:
            visualizer.track.load('soundvisualizer/final/hiking_animated.mp4');
            visualizer.track.on('finish', () => {
                console.log('fnished')
                map.currentMarker = 2
                console.log(map.currentMarker)
            })
            break;
        case 2:
            visualizer.track.load('soundvisualizer/final/idea_animated.mp4');
            visualizer.track.on('finish', () => {
                console.log('fnished')
                map.currentMarker = 3
                console.log(map.currentMarker)
            })
            break;
        case 3:
            visualizer.track.load('soundvisualizer/final/intro_animated.mp4');
            visualizer.track.on('finish', () => {
                console.log('fnished')
                map.currentMarker = 4
                console.log(map.currentMarker)
            })
            break;
        case 4:
            visualizer.track.load('soundvisualizer/final/hiking_animated.mp4');
            visualizer.track.on('finish', () => {
                console.log('fnished')
                map.currentMarker = 1
                console.log(map.currentMarker)
            })
            break;
    }
}
