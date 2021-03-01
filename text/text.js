const m1 = {}
const m2 = {}
const m3 = {}
const m4 = {}

const markerInfo = {}
markerInfo.header = document.getElementById('titleDiv')
markerInfo.text = document.getElementById('textDiv')
console.log(markerInfo)

m1.title = "WANDERN"
m1.text = `Lange Zeit galt Wandern als ein Alte-Leute-Hobby. Aber das gehört der Vergangenheit an. In der heutigen Zeit – die Zeit des Perfektionismus – stehen wir immer häufiger unter Druck. Privat als auch beruflich.

Außerdem sind viele an ihren Schreibtisch für mehr als 8 Stunden regelrecht gefesselt. Vor allem jüngere Leute gehen daher immer häufiger raus in die Natur. Meistens sind sie allein oder zu zweit unterwegs. 

Sie wollen in ihrer Freizeit etwas Gutes für ihren Körper und Geist tun, sich etwas bewegen, neue Dinge entdecken und dabei auch noch etwas mitnehmen.`

m2.title = "IDEE"
m2.text =`Am Vorabend hast du dir eine Route ausgesucht, worauf sich ein paar Sehenswürdigkeiten befinden. 

Der Startpunkt ist leicht zu erreichen. Es ist Mittag. Du packst deine sieben Sachen zusammen und machst dich auf den Weg. Du bist extra ein wenig später losgefahren, um den Tag entspannt anzugehen und vor allem, um dir den Sonnenuntergang auf der Lichtung anzuschauen – ein Tipp eines Freunds. Eine unvergessliche Aussicht über das Tal in dem du lebst. 

Du bist am Parkplatz angekommen, schnappst dir deinen Rucksack, Smartphone in die Hosentasche, Kopfhörer auf und los geht’s. Mit deinem Handy navigierst du dich entlang der Route, damit du dich nicht verläufst. Du hast dir eine wirklich sehr schöne Route ausgesucht. Sie ist nicht so belebt, du hast deine Ruhe und machst alles in deiner Zeit. Das Licht bricht durch das Blätterdach der Bäume. Vögel zwitschern im Hintergrund und ein kleiner Bach ist zu hören. Schon nach wenigen Kilometern bist du an den ersten Punkt angekommen, denn du dir anschauen willst. Es ist eine Mühle. Von deinem Freund hast du erfahren, dass sie schon sehr alt ist und eine sehr interessante Hintergrund Geschichte hat. Genau konnte er sich aber leider nicht mehr erinnern, er meinte aber, an der Mühle selbst steht ihre Geschichte. 

Du stehst vor ihr. Du schaust dich um. Eine leichte Brise umschweift dein Gesicht. Du schaust nach rechts, dann nach links. An der Wand der Mühle entdeckst du eine Art Schaufenster. Du gehst darauf zu. Schon beim näher kommen erkennst du das Dilemma: Irgendwelche Jugendliche haben sich mal wieder als Spaßvögel dargestellt und das komplette Glas vollgetackt. Es ist kaum möglich zu erkennen, was hier steht. 

Aber zum Glück hast du dein Smartphone dabei und du hast mich: Track.`

m3.title = "TRACK"
m3.text = `Ich bin der digitale Tourguide, der dir das Leben erleichtert. 

Stelle dir ganz einfach vor: Es ist wie bei einem Museumsbesuch mit einem Audioguide, den du dir an der Kasse besorgen kannst. Nur, dass du mich nicht kaufen oder mich herumtragen musst. Dein Smartphone hast du eh immer dabei.

Lade dir einfach die App herunter. Getan? Sehr gut. Dann erzähle ich dir jetzt einfach mehr zu mir.`

m4.title ="MEHRWERT"
m4.text = `Erinnerst du dich noch an die Mühle? Du konntest das Schild nicht lesen.

Aber das ist kein Problem mehr.

Du hast einfach an mein Wissen angezapft und konntest dir sogar währenddessen die Gegend anschauen und in die Mühle gehen. Ich war bei dir. Aber jetzt geht es weiter, es sind noch ein paar Kilometer zu deinem Ziel: Die Lichtung.

Der Sonnenuntergang steht kurz bevor! Endlich! Du bist an deinem Ziel angekommen. Dein Freund hat nicht übertrieben. Es ist wunderschön. Die Lichtung ist zwar klein, aber durch ihre Lage kannst du das ganze Tal überblicken. Du genießt den Augenblick eine Weile, lässt deine Wanderung Revue passieren.

Du hast heute eine Menge neuer Dinge erfahren und hast auch großartige Fotos geschossen. Wenn du heute Abend zurück bist, kannst du dein persönliches Erlebnis mit deinen Freunden teilen.

Du siehst die Sonne hinter den Bergen verschwinden, die Vögel verstummen langsam und es wird dunkel.`

markerInfo.setInfo = () => {
    switch (map.currentMarker) {
        case 1:
            markerInfo.header.textContent = m1.title
            markerInfo.text.innerText = m1.text
            break
        case 2:
            markerInfo.header.textContent = m2.title
            markerInfo.text.innerText = m2.text
            break
        case 3:
            markerInfo.header.textContent = m3.title
            markerInfo.text.innerText = m3.text
            break
        case 4:
            markerInfo.header.textContent = m4.title
            markerInfo.text.innerText = m4.text
            break
        default:
            markerInfo.header.textContent = ""
            markerInfo.text.textContent = ""
            break
    }
}