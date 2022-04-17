'use strict'
let gElCanvas
let gCtx
let gStartPos
let gHasMeme = false
let gisMeme = new Image()

function onImgSelect(imgURL) {
    saveMeme(imgURL)
    clearText()
    var block = document.querySelector('.canvas1')
    block.style.display = 'flex'
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    gHasMeme = false
    block.scrollIntoView();
    addListeners()
    resizeCanvas()
    renderMeme(imgURL)
}

function renderMeme(img) {
    if (!gHasMeme) {
        gisMeme.src = img
        gisMeme.onload = () => {
            gCtx.drawImage(gisMeme, 0, 0, gElCanvas.width, gElCanvas.height);
            loadLines()
            gHasMeme = true

        }
    } else {
        gCtx.drawImage(gisMeme, 0, 0, gElCanvas.width, gElCanvas.height);
        loadLines()

    }
}

function loadLines() {
    const meme = getMeme()
    let lines = meme.lines
    lines.forEach((line) => drawText(line))
    const line = getSelectedLine()
    if (!line) return
    highlightLine(line)
}

function drawText(line) {
    const x = line.posx
    const y = line.posy
    gCtx.font = line.size
    gCtx.textAlign = line.align
    gCtx.font = ` 48px ${line.font}`
    gCtx.strokeStyle = line.stroke
    gCtx.lineWidth = 2
    gCtx.fillStyle = line.fill
    gCtx.fillText(line.txt, x, y)
    gCtx.strokeText(line.txt, x, y)

}

function addListeners() {
    addMouseListeners()
    addTouchListeners()
    window.addEventListener('resize', () => {
        resizeCanvas()
        renderMeme()
    })
}

function onDown(ev) {
    ev.preventDefault()
    const pos = getEvPos(ev)
    if (!isTextClicked(pos)) return
    renderMeme()
    setTextDrag(true)
    gStartPos = pos
    gElCanvas.style.cursor = 'grabbing'

}

function onMove(ev) {
    const line = getSelectedLine()
    if (!line) return
    if (!line.isDrag) return
    const pos = getEvPos(ev)
    const dx = pos.x - gStartPos.x
    const dy = pos.y - gStartPos.y
    moveTextPos(dx, dy)
    gStartPos = pos
    renderMeme()
}

function onUp() {
    setTextDrag(false)
    gElCanvas.style.cursor = 'default'
}

function OnSetLineTxt() {
    var text = document.querySelector('.textbox').value
    setLineTxt(text)
    renderMeme()
}

function onDeleteText() {
    console.log('Deleting...')
    deleteText()
    renderMeme()
}

function onChangeLine() {
    console.log('changing line..')
    let line = changeLines()
    console.log(line)
    document.querySelector('.textbox').value = line.txt
    highlightLine(line)
    renderMeme()
}

function onMoveLineUD(mov) {
    console.log('direction ' + mov)
}

function onIncFont() {
    console.log('increasing fonts size...')
}

function onDecFont() {
    console.log('decreasing fonts size...')
}

function onUpdateFont(font) {
    console.log('changing font...' + font)
    changefont(font)
    renderMeme()
}

function onChangeColor(color) {
    console.log(color)
    onChangeColor(color)
    renderMeme()

}

function highlightLine(line) {
    const x = line.posx
    const y = line.posy
    let len = gCtx.measureText(line.txt)
    console.log(len)
    let fontHeight = len.fontBoundingBoxAscent + len.fontBoundingBoxDescent;
    gCtx.beginPath()
    gCtx.lineWidth = '2'
    gCtx.strokeStyle = 'white'
    gCtx.rect(x, y, len.width, -fontHeight + 10)
    gCtx.stroke()
}