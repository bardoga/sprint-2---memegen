'use strict'
var gCtx
var gElCanvas

function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    renderMeme()

}

function renderMeme(img) {
    img = getMeme()
    console.log(img)
    renderImg(img)

}

function renderImg(img) {
    var imgN = new Image()
    imgN.src = img
    imgN.onload = () => {
        gCtx.drawImage(imgN, 0, 0, gElCanvas.width, gElCanvas.height);
        gCtx.font = '48px Impact'
        gCtx.fillStyle = 'white'
        gCtx.fillText(gMeme.lines[0].txt, 10, 50)
    }
}



// function drawText() {
//     gCtx.font = '48px Impact'
//     console.log(gMeme.lines[0].txt)
//     gCtx.fillText(gMeme.lines[0].txt, 10, 50)
// }


// function resizeCanvas() {
//     var elContainer = document.querySelector('#my-canvas')
//     gElCanvas.width = elContainer.offsetWidth
//     gElCanvas.height = elContainer.offsetHeight
// }