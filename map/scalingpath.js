const PATH = "M76.43,412.13l36.5,21.18a4.57,4.57,0,0,1,1.11.9l25.79,28.24a4.71,4.71,0,0,1,1.06,4.43l-9.5,34.46a4.71,4.71,0,0,0,5.39,5.88l30.39-5.56a4.73,4.73,0,0,1,4.2,1.31L209,540.85a4.69,4.69,0,0,1,1.2,2.08l15.2,55.33a4.61,4.61,0,0,1,0,2.39l-8.18,32.93a4.91,4.91,0,0,1-.15.51l-6.93,18.62a4.68,4.68,0,0,1-.83,1.41l-20.54,24.14a4.62,4.62,0,0,0-1.07,2.33l-8.18,53a4.61,4.61,0,0,0,.08,1.85l14.07,56.71a4.67,4.67,0,0,0,1.31,2.26l51.9,49.91a4.59,4.59,0,0,0,1.74,1.06L311,866.75a4.78,4.78,0,0,0,2.46.16l58.59-11.81a4.72,4.72,0,0,0,2-.91l37.88-29.81a6.29,6.29,0,0,0,.47-.43l43.86-45.38a4.69,4.69,0,0,1,2.46-1.35l52.47-10.57a4.76,4.76,0,0,1,1.88,0l81.54,16.91a5.65,5.65,0,0,1,.8.24l52.84,21.29a4.63,4.63,0,0,0,3.28.09l59.76-20.44a4.72,4.72,0,0,0,3.19-4.46V768.22a4.73,4.73,0,0,1,1.15-3.09l31.55-36.49a4,4,0,0,1,.46-.46l36.21-31.77a4.7,4.7,0,0,1,3.11-1.17h43.08a4.74,4.74,0,0,1,2.68.83l20.74,14.3a4.74,4.74,0,0,0,2.68.83h25.91a4.72,4.72,0,0,1,3.24,1.29l36.85,34.81a4.71,4.71,0,0,0,7.42-5.6h0a4.71,4.71,0,0,1-.53-2.18v-28a3.86,3.86,0,0,0,0-.58l-4.72-38.08a4.9,4.9,0,0,0-.58-1.74l-14-24.64a4.31,4.31,0,0,0-.42-.63l-24.77-30.89a4.87,4.87,0,0,1-.86-1.66l-9.2-32.49a4.7,4.7,0,0,0-.93-1.75l-25.39-30.22a4.73,4.73,0,0,1-1-2.14L825.56,434.41a4.71,4.71,0,0,1,0-1.5l5.77-44.17a4.73,4.73,0,0,1,1.53-2.91l30.2-26.9a4.17,4.17,0,0,0,.36-.37l60-66.54a4.68,4.68,0,0,1,1.74-1.21l15.59-6.28a4.76,4.76,0,0,0,2.48-2.32L961,245.58a4.71,4.71,0,0,0-6.71-6.06l-29.33,18.06a4.63,4.63,0,0,1-1.68.63l-47.19,8.12a4.66,4.66,0,0,1-3.46-.76l-24.47-16.79a4.81,4.81,0,0,1-1.29-1.33l-14.39-22.31a4.76,4.76,0,0,0-2.61-2l-29.51-8.81a4.68,4.68,0,0,1-2.68-2.06l-17.75-29.05a4.64,4.64,0,0,0-2.26-1.91L761.94,175a4.84,4.84,0,0,0-2.32-.31l-60.69,7.2a5.25,5.25,0,0,1-.56,0H647.59a4.72,4.72,0,0,0-4.6,3.7L629.23,248a5.44,5.44,0,0,1-.15.54l-17,48.86-12,31.34a4.77,4.77,0,0,1-.59,1.09l-24.76,34a4.71,4.71,0,0,1-4.52,1.88L432,344.64a4.71,4.71,0,0,1-4-4.66V308.82a4.71,4.71,0,0,0-1-2.91L373.5,237.59a4.34,4.34,0,0,0-.7-.72l-27.05-22.51a4.47,4.47,0,0,1-1-1.17L328.62,186.8a4.71,4.71,0,0,0-7.19-1l-21.22,19.34q-.16.15-.3.3l-28.8,31.42a5.09,5.09,0,0,1-.69.62L231.2,266.19a4.64,4.64,0,0,0-1.09,1.12L203.3,306.08a4.74,4.74,0,0,1-2,1.64L151.54,329.2l-.41.2L113.81,350a5,5,0,0,0-.49.31L84.46,371.27a4.73,4.73,0,0,0-1.8,2.64l-8.43,33A4.69,4.69,0,0,0,76.43,412.13Z"

let WIDTH;
let HEIGHT;
let WIDTHSMALL
let HEIGHTSMALL

window.onresize = () => {
    if (window.innerWidth >= 1350 && window.innerWidth <= 1380) {
        WIDTH = 52
        HEIGHT = 52
        WIDTHSMALL = 63
        HEIGHTSMALL = 63
    } else if (window.innerWidth >= 1001 && window.innerWidth <= 1050) {
        WIDTH = 44
        HEIGHT = 44
    } else if (window.innerWidth >= 960 && window.innerWidth <= 1000) {
        WIDTH = 73
        HEIGHT = 73
        WIDTHSMALL = 50
        HEIGHTSMALL = 44
    } else if (window.innerWidth >= 1900 && window.innerWidth <= 2000) {
        WIDTH = 36
        HEIGHT = 36.5
        WIDTHSMALL = 92
        HEIGHTSMALL = 92
    } else if (window.innerWidth >= 2001 && window.innerWidth <= 2400) {
        WIDTH = 31
        HEIGHT = 31
        WIDTHSMALL = 113
        HEIGHTSMALL = 113
    } else if (window.innerWidth >= 2401 && window.innerWidth <= 2500) {
        WIDTH = 27.4
        HEIGHT = 27.4
        WIDTHSMALL = 130
        HEIGHTSMALL = 130
    } else if (window.innerWidth >= 2501 && window.innerWidth <= 2600) {
        WIDTH = 27.4
        HEIGHT = 27.4
        WIDTHSMALL = 125
        HEIGHTSMALL = 125
    } else {
        WIDTH = 50
        HEIGHT = 50
        WIDTHSMALL = 80
        HEIGHTSMALL = 80
    }
    responsivePath = new Meanderer({
        path: PATH,
        width: WIDTH,
        height: HEIGHT
    })
    responsivePathSmall = new Meanderer({
        path: PATH,
        width: WIDTHSMALL,
        height: HEIGHTSMALL
    })
    // Generate a new scaled path when required. Here we are using ResizeObserver
    // with a container that uses viewport units
    setPath = () => {
        const scaledPath = responsivePath.generatePath(
            CONTAINER.offsetWidth,
            CONTAINER.offsetHeight
        )
        const scaledPathSmall = responsivePathSmall.generatePath(
            CONTAINERSMALL.offsetWidth,
            CONTAINERSMALL.offsetHeight
        )
        // Here, we apply the path to an element through a CSS variable.
        // And then an element picks up on that. We could apply the motion path straight to the element though.
        CONTAINER.style.setProperty("--path", `"${scaledPath}"`)
        CONTAINERSMALL.style.setProperty("--path", `"${scaledPathSmall}"`)
        // CONTAINERGPS.style.setProperty("--path", `"${scaledPath}"`)
    }
    
}


if (window.innerWidth >= 1350 && window.innerWidth <= 1380 ) {
    WIDTH = 52
    HEIGHT = 52
    WIDTHSMALL = 63
    HEIGHTSMALL = 63
} else if (window.innerWidth >= 1001 && window.innerWidth <= 1050) {
    WIDTH = 44
    HEIGHT = 44
} else if (window.innerWidth >= 960 && window.innerWidth <= 1000) {
    WIDTH = 73
    HEIGHT = 73
    WIDTHSMALL = 50
    HEIGHTSMALL = 44
} else if (window.innerWidth >= 1900 && window.innerWidth <= 2000) {
    WIDTH = 36
    HEIGHT = 36.5
    WIDTHSMALL = 92
    HEIGHTSMALL = 92
} else if (window.innerWidth >= 2001 && window.innerWidth <= 2400) {
    WIDTH = 31
    HEIGHT = 31
    WIDTHSMALL = 113
    HEIGHTSMALL = 113
} else if (window.innerWidth >= 2401 && window.innerWidth <= 2500) {
    WIDTH = 27.4
    HEIGHT = 27.4
    WIDTHSMALL = 130
    HEIGHTSMALL = 130
} else if (window.innerWidth >= 2501 && window.innerWidth <= 2600) {
    WIDTH = 27.4
    HEIGHT = 27.4
    WIDTHSMALL = 125
    HEIGHTSMALL = 125
} else {
    WIDTH = 50
    HEIGHT = 50
    WIDTHSMALL = 80
    HEIGHTSMALL = 80
}

const CONTAINER = document.getElementById('gps')
const CONTAINERSMALL = document.getElementById('gps-small')

let responsivePath = new Meanderer({
    path: PATH,
    width: WIDTH,
    height: HEIGHT
})

let responsivePathSmall = new Meanderer({
    path: PATH,
    width: WIDTHSMALL,
    height: HEIGHTSMALL
})
// Generate a new scaled path when required. Here we are using ResizeObserver
// with a container that uses viewport units
let setPath = () => {
    const scaledPath = responsivePath.generatePath(
        CONTAINER.offsetWidth,
        CONTAINER.offsetHeight
    )
    const scaledPathSmall = responsivePathSmall.generatePath(
        CONTAINERSMALL.offsetWidth,
        CONTAINERSMALL.offsetHeight
    )
    // Here, we apply the path to an element through a CSS variable.
    // And then an element picks up on that. We could apply the motion path straight to the element though.
    CONTAINER.style.setProperty("--path", `"${scaledPath}"`)
    CONTAINERSMALL.style.setProperty("--path", `"${scaledPathSmall}"`)
    // CONTAINERGPS.style.setProperty("--path", `"${scaledPath}"`)
}
// Set up our Resize Observer that will get the ball rolling
const SizeObserver = new ResizeObserver(setPath)
// Observe! Done!
SizeObserver.observe(CONTAINER)