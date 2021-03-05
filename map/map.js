const map = document.getElementById('map')
const mapSmall = document.getElementById('mapSmall')
const svgDoc = map.contentDocument;
const svgDocSmall = mapSmall.contentDocument;
const gps_marker = document.getElementById('gps')
const gps_markerSmall = document.getElementById('gps-small')
map.currentMarker = 1

svgDoc.getElementById('Pfad_16').style.fill = "#937E74"
svgDoc.getElementById('marker1-text').style.fill = "#445957"

svgDoc.getElementById('Pfad_16').style.cursor = 'pointer'
svgDoc.getElementById('marker1-text').style.cursor = 'pointer'
svgDoc.getElementById('Pfad_16-2').style.cursor = 'pointer'
svgDoc.getElementById('marker2-text').style.cursor = 'pointer'
svgDoc.getElementById('Pfad_16-3').style.cursor = 'pointer'
svgDoc.getElementById('marker3-text').style.cursor = 'pointer'
svgDoc.getElementById('Pfad_16-4').style.cursor = 'pointer'
svgDoc.getElementById('marker4-text').style.cursor = 'pointer'

svgDocSmall.getElementById('Pfad_16').style.fill = "#937E74"
svgDocSmall.getElementById('marker1-text').style.fill = "#445957"

svgDocSmall.getElementById('Pfad_16').style.cursor = 'pointer'
svgDocSmall.getElementById('marker1-text').style.cursor = 'pointer'
svgDocSmall.getElementById('Pfad_16-2').style.cursor = 'pointer'
svgDocSmall.getElementById('marker2-text').style.cursor = 'pointer'
svgDocSmall.getElementById('Pfad_16-3').style.cursor = 'pointer'
svgDocSmall.getElementById('marker3-text').style.cursor = 'pointer'
svgDocSmall.getElementById('Pfad_16-4').style.cursor = 'pointer'
svgDocSmall.getElementById('marker4-text').style.cursor = 'pointer'

svgDoc.getElementById('Pfad_16').addEventListener('mouseover', () => {
    if (map.currentMarker != 1) {
    svgDoc.getElementById('Pfad_16').style.fill = "#937E74"
    svgDoc.getElementById('marker1-text').style.fill = "#445957"
    }
})
svgDoc.getElementById('Pfad_16').addEventListener('mouseout', () => {
    if (map.currentMarker != 1) {
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"

    }
})
svgDoc.getElementById('marker1-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 1) {
    svgDoc.getElementById('Pfad_16').style.fill = "#937E74"
    svgDoc.getElementById('marker1-text').style.fill = "#445957"
    }
})
svgDoc.getElementById('Pfad_16').addEventListener('mouseout', () => {
    if (map.currentMarker != 1) {
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"
    }
})

svgDoc.getElementById('Pfad_16-2').addEventListener('mouseover', () => {
    if (map.currentMarker != 2){
    svgDoc.getElementById('Pfad_16-2').style.fill = "#937E74"
    svgDoc.getElementById('marker2-text').style.fill = "#445957"
    }
})
svgDoc.getElementById('Pfad_16-2').addEventListener('mouseout', () => {
    if (map.currentMarker != 2) {
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"
    }
})
svgDoc.getElementById('marker2-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 2) {
    svgDoc.getElementById('Pfad_16-2').style.fill = "#937E74"
    svgDoc.getElementById('marker2-text').style.fill = "#445957"
    }
})
svgDoc.getElementById('Pfad_16-2').addEventListener('mouseout', () => {
    if (map.currentMarker != 2) {
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"
    }
})

svgDoc.getElementById('Pfad_16-3').addEventListener('mouseover', () => {
    if (map.currentMarker != 3) {
        svgDoc.getElementById('Pfad_16-3').style.fill = "#937E74"
        svgDoc.getElementById('marker3-text').style.fill = "#445957"

    }
})
svgDoc.getElementById('Pfad_16-3').addEventListener('mouseout', () => {
    if (map.currentMarker != 3) {
        svgDoc.getElementById('Pfad_16-3').style.fill = "none"
        svgDoc.getElementById('marker3-text').style.fill = "#937E74"

    }
})
svgDoc.getElementById('marker3-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 3) {
        svgDoc.getElementById('Pfad_16-3').style.fill = "#937E74"
        svgDoc.getElementById('marker3-text').style.fill = "#445957"

    }
})
svgDoc.getElementById('Pfad_16-3').addEventListener('mouseout', () => {
    if (map.currentMarker != 3) {
        svgDoc.getElementById('Pfad_16-3').style.fill = "none"
        svgDoc.getElementById('marker3-text').style.fill = "#937E74"

    }
})

svgDoc.getElementById('Pfad_16-4').addEventListener('mouseover', () => {
    if (map.currentMarker != 4) {
        svgDoc.getElementById('Pfad_16-4').style.fill = "#937E74"
        svgDoc.getElementById('marker4-text').style.fill = "#445957"

    }
})
svgDoc.getElementById('Pfad_16-4').addEventListener('mouseout', () => {
    if (map.currentMarker != 4) {
        svgDoc.getElementById('Pfad_16-4').style.fill = "none"
        svgDoc.getElementById('marker4-text').style.fill = "#937E74"

    }
})
svgDoc.getElementById('marker4-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 4) {
        svgDoc.getElementById('Pfad_16-4').style.fill = "#937E74"
        svgDoc.getElementById('marker4-text').style.fill = "#445957"

    }
})
svgDoc.getElementById('Pfad_16-2').addEventListener('mouseout', () => {
    if (map.currentMarker != 2) {
        svgDoc.getElementById('Pfad_16-2').style.fill = "none"
        svgDoc.getElementById('marker2-text').style.fill = "#937E74"

    }
})

svgDocSmall.getElementById('Pfad_16').addEventListener('mouseover', () => {
    if (map.currentMarker != 1) {
        svgDocSmall.getElementById('Pfad_16').style.fill = "#937E74"
        svgDocSmall.getElementById('marker1-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16').addEventListener('mouseout', () => {
    if (map.currentMarker != 1) {
        svgDocSmall.getElementById('Pfad_16').style.fill = "none"
        svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"

    }
})
svgDocSmall.getElementById('marker1-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 1) {
        svgDocSmall.getElementById('Pfad_16').style.fill = "#937E74"
        svgDocSmall.getElementById('marker1-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16').addEventListener('mouseout', () => {
    if (map.currentMarker != 1) {
        svgDocSmall.getElementById('Pfad_16').style.fill = "none"
        svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"

    }
})

svgDocSmall.getElementById('Pfad_16-2').addEventListener('mouseover', () => {
    if (map.currentMarker != 2) {
        svgDocSmall.getElementById('Pfad_16-2').style.fill = "#937E74"
        svgDocSmall.getElementById('marker2-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16-2').addEventListener('mouseout', () => {
    if (map.currentMarker != 2) {
        svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
        svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"

    }
})
svgDocSmall.getElementById('marker2-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 2) {
        svgDocSmall.getElementById('Pfad_16-2').style.fill = "#937E74"
        svgDocSmall.getElementById('marker2-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16-2').addEventListener('mouseout', () => {
    if (map.currentMarker != 2) {
        svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
        svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"

    }
})

svgDocSmall.getElementById('Pfad_16-3').addEventListener('mouseover', () => {
    if (map.currentMarker != 3) {
        svgDocSmall.getElementById('Pfad_16-3').style.fill = "#937E74"
        svgDocSmall.getElementById('marker3-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16-3').addEventListener('mouseout', () => {
    if (map.currentMarker != 3) {
        svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
        svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"

    }
})
svgDocSmall.getElementById('marker3-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 3) {
        svgDocSmall.getElementById('Pfad_16-3').style.fill = "#937E74"
        svgDocSmall.getElementById('marker3-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16-3').addEventListener('mouseout', () => {
    if (map.currentMarker != 3) {
        svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
        svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"

    }
})

svgDocSmall.getElementById('Pfad_16-4').addEventListener('mouseover', () => {
    if (map.currentMarker != 4) {
        svgDocSmall.getElementById('Pfad_16-4').style.fill = "#937E74"
        svgDocSmall.getElementById('marker4-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16-4').addEventListener('mouseout', () => {
    if (map.currentMarker != 4) {
        svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
        svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"

    }
})
svgDocSmall.getElementById('marker4-text').addEventListener('mouseover', () => {
    if (map.currentMarker != 4) {
        svgDocSmall.getElementById('Pfad_16-4').style.fill = "#937E74"
        svgDocSmall.getElementById('marker4-text').style.fill = "#445957"

    }
})
svgDocSmall.getElementById('Pfad_16-2').addEventListener('mouseout', () => {
    if (map.currentMarker != 2) {
        svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
        svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"

    }
})

gps_marker.style.display = 'none'
gps_markerSmall.style.display = 'none'

const marker1 = svgDoc.getElementById('Marker1')
marker1.addEventListener("click", () => {
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    visualizer.track.stop()
    switch (map.currentMarker) {
        case 2:
            gps_marker.style.animation = "marker1to2 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker1to2 3s ease-in-out reverse"
            break
        case 3:
            gps_marker.style.animation = "marker3to1 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker3to1 3s ease-in-out forwards"
            break
        case 4:
            gps_marker.style.animation = "marker4to1 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker4to1 3s ease-in-out forwards"
            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"
            break
    }
    map.currentMarker = 1
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-3').style.fill = "none"
    svgDoc.getElementById('marker3-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-4').style.fill = "none"
    svgDoc.getElementById('marker4-text').style.fill = "#937E74"
    
    svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
    svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
    svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
    svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
})

const marker1Small = svgDocSmall.getElementById('Marker1')
marker1Small.addEventListener("click", () => {
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    visualizer.track.stop()
    switch (map.currentMarker) {
        case 2:
            gps_marker.style.animation = "marker1to2 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker1to2 3s ease-in-out reverse"
            break
        case 3:
            gps_marker.style.animation = "marker3to1 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker3to1 3s ease-in-out forwards"
            break
        case 4:
            gps_marker.style.animation = "marker4to1 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker4to1 3s ease-in-out forwards"
            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"
            break
    }
    map.currentMarker = 1
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-3').style.fill = "none"
    svgDoc.getElementById('marker3-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-4').style.fill = "none"
    svgDoc.getElementById('marker4-text').style.fill = "#937E74"
    
    svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
    svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
    svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
    svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
})

const marker2 = svgDoc.getElementById('Marker2')
marker2.addEventListener("click", () => {
    visualizer.track.stop()
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    switch (map.currentMarker) {
        case 1:
            gps_marker.style.animation = "marker1to2 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker1to2 3s ease-in-out forwards"
            break
        case 3:
            gps_marker.style.animation = "marker2to3 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker2to3 3s ease-in-out reverse"
            break
        case 4:
            gps_marker.style.animation = "marker2to4 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker2to4 3s ease-in-out reverse"
            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"
            break
    }
    map.currentMarker = 2
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    svgDoc.getElementById('Pfad_16-4').style.fill = "none"
    svgDoc.getElementById('marker4-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-3').style.fill = "none"
    svgDoc.getElementById('marker3-text').style.fill = "#937E74"
    
    svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
    svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16').style.fill = "none"
    svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
    svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
})

const marker2Small = svgDocSmall.getElementById('Marker2')
marker2Small.addEventListener("click", () => {
    visualizer.track.stop()
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    switch (map.currentMarker) {
        case 1:
            gps_marker.style.animation = "marker1to2 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker1to2 3s ease-in-out forwards"
            break
        case 3:
            gps_marker.style.animation = "marker2to3 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker2to3 3s ease-in-out reverse"
            break
        case 4:
            gps_marker.style.animation = "marker2to4 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker2to4 3s ease-in-out reverse"

            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"
            break
    }
    map.currentMarker = 2
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    
    svgDoc.getElementById('Pfad_16-4').style.fill = "none"
    svgDoc.getElementById('marker4-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-3').style.fill = "none"
    svgDoc.getElementById('marker3-text').style.fill = "#937E74"
    
    svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
    svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16').style.fill = "none"
    svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
    svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
})

const marker3 = svgDoc.getElementById('Marker3')
marker3.addEventListener("click", () => {
    visualizer.track.stop()
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    switch (map.currentMarker) {
        case 1:
            gps_marker.style.animation = "marker1to3 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker1to3 3s ease-in-out forwards"
            break
        case 2:
            gps_marker.style.animation = "marker2to3 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker2to3 3s ease-in-out forwards"
            break
        case 4:
            gps_marker.style.animation = "marker3to4 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker3to4 3s ease-in-out reverse"
            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"
            break
    }
    map.currentMarker = 3
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    svgDoc.getElementById('Pfad_16-4').style.fill = "none"
    svgDoc.getElementById('marker4-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"  
    
    svgDocSmall.getElementById('Pfad_16').style.fill = "none"
    svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
    svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
    svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
})

const marker3Small = svgDocSmall.getElementById('Marker3')
marker3Small.addEventListener("click", () => {
    visualizer.track.stop()
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    switch (map.currentMarker) {
        case 1:
            gps_marker.style.animation = "marker1to3 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker1to3 3s ease-in-out forwards"

            break
        case 2:
            gps_marker.style.animation = "marker2to3 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker2to3 3s ease-in-out forwards"
            break
        case 4:
            gps_marker.style.animation = "marker3to4 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker3to4 3s ease-in-out reverse"
            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"

            break
    }
    map.currentMarker = 3
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    svgDocSmall.getElementById('Pfad_16').style.fill = "none"
    svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
    svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
    svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
    
    svgDoc.getElementById('Pfad_16-4').style.fill = "none"
    svgDoc.getElementById('marker4-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"  
})

const marker4 = svgDoc.getElementById('Marker4')
marker4.addEventListener("click", () => {
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    visualizer.track.stop()
    switch (map.currentMarker) {
        case 1:
            gps_marker.style.animation = "marker4to1 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker4to1 3s ease-in-out reverse"
            break
        case 2:
            gps_marker.style.animation = "marker2to4 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker2to4 3s ease-in-out forwards"
            break
        case 3:
            gps_marker.style.animation = "marker3to4 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker3to4 3s ease-in-out forwards"
            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"
            break
    }
    map.currentMarker = 4
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-3').style.fill = "none"
    svgDoc.getElementById('marker3-text').style.fill = "#937E74"
    
    svgDocSmall.getElementById('Pfad_16').style.fill = "none"
    svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
    svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
    svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
})

const marker4Small = svgDocSmall.getElementById('Marker4')
marker4Small.addEventListener("click", () => {
    gps_marker.style.display = 'block'
    gps_markerSmall.style.display = 'block'
    visualizer.track.stop()
    switch (map.currentMarker) {
        case 1:
            gps_marker.style.animation = "marker4to1 3s ease-in-out reverse"
            gps_markerSmall.style.animation = "marker4to1 3s ease-in-out reverse"
            break
        case 2:
            gps_marker.style.animation = "marker2to4 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker2to4 3s ease-in-out forwards"
            break
        case 3:
            gps_marker.style.animation = "marker3to4 3s ease-in-out forwards"
            gps_markerSmall.style.animation = "marker3to4 3s ease-in-out forwards"
            break
        default:
            gps_marker.style.display = 'none'
            gps_marker.style.animation = "none"
            gps_markerSmall.style.display = 'none'
            gps_markerSmall.style.animation = "none"
            break
    }
    map.currentMarker = 4
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    svgDocSmall.getElementById('Pfad_16').style.fill = "none"
    svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
    svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
    svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
    svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
    
    svgDoc.getElementById('Pfad_16').style.fill = "none"
    svgDoc.getElementById('marker1-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-2').style.fill = "none"
    svgDoc.getElementById('marker2-text').style.fill = "#937E74"
    svgDoc.getElementById('Pfad_16-3').style.fill = "none"
    svgDoc.getElementById('marker3-text').style.fill = "#937E74"
})

gps_marker.addEventListener("webkitAnimationEnd", () => {
    gps_marker.style.display = 'none'
    gps_markerSmall.style.display = 'none'
    switch (map.currentMarker) {
        case 1:
            svgDoc.getElementById('Pfad_16-2').style.fill = "none"
            svgDoc.getElementById('marker2-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-3').style.fill = "none"
            svgDoc.getElementById('marker3-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-4').style.fill = "none"
            svgDoc.getElementById('marker4-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16').style.fill = "#937E74"
            svgDoc.getElementById('marker1-text').style.fill = "#445957"
            
            svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
            svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
            svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
            svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16').style.fill = "#937E74"
            svgDocSmall.getElementById('marker1-text').style.fill = "#445957"
            break;
        case 2:
            svgDoc.getElementById('Pfad_16').style.fill = "none"
            svgDoc.getElementById('marker1-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-3').style.fill = "none"
            svgDoc.getElementById('marker3-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-4').style.fill = "none"
            svgDoc.getElementById('marker4-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-2').style.fill = "#937E74"
            svgDoc.getElementById('marker2-text').style.fill = "#445957"
            
            svgDocSmall.getElementById('Pfad_16').style.fill = "none"
            svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
            svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
            svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-2').style.fill = "#937E74"
            svgDocSmall.getElementById('marker2-text').style.fill = "#445957"
            break;
        case 3:
            svgDoc.getElementById('Pfad_16-2').style.fill = "none"
            svgDoc.getElementById('marker2-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16').style.fill = "none"
            svgDoc.getElementById('marker1-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-4').style.fill = "none"
            svgDoc.getElementById('marker4-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-3').style.fill = "#937E74"
            svgDoc.getElementById('marker3-text').style.fill = "#445957"
            
            svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
            svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16').style.fill = "none"
            svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-4').style.fill = "none"
            svgDocSmall.getElementById('marker4-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-3').style.fill = "#937E74"
            svgDocSmall.getElementById('marker3-text').style.fill = "#445957"
            break;
        case 4:
            svgDoc.getElementById('Pfad_16-2').style.fill = "none"
            svgDoc.getElementById('marker2-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-3').style.fill = "none"
            svgDoc.getElementById('marker3-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16').style.fill = "none"
            svgDoc.getElementById('marker1-text').style.fill = "#937E74"
            svgDoc.getElementById('Pfad_16-4').style.fill = "#937E74"
            svgDoc.getElementById('marker4-text').style.fill = "#445957"
            
            svgDocSmall.getElementById('Pfad_16-2').style.fill = "none"
            svgDocSmall.getElementById('marker2-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-3').style.fill = "none"
            svgDocSmall.getElementById('marker3-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16').style.fill = "none"
            svgDocSmall.getElementById('marker1-text').style.fill = "#937E74"
            svgDocSmall.getElementById('Pfad_16-4').style.fill = "#937E74"
            svgDocSmall.getElementById('marker4-text').style.fill = "#445957"
            break;
    }
    visualizer.loadWave()
    videoPlayer.setVideo()
    markerInfo.setInfo()
    document.getElementById('poi').scrollIntoView({ behavior: 'smooth' })
})
