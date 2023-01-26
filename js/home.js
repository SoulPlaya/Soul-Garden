const explosionSound = new Audio('/assets/audio/explosion.ogg')

function playExplosion() {
    explosionSound.play()
    explosionSound.onended = function () {
        explosionSound.play()
    }
    
    const displayImage = Math.floor(Math.random() * 2)
    if (displayImage === 1) {
        document.body.style.backgroundImage = `url("/assets/img/EXPLOSION.jpg")`
    } else {
        document.body.style.backgroundImage = `url("/assets/img/BigEXPLOSION.jpg")`
    }

    alert('Watch out')
}