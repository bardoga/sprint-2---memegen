'use strict'

let gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{}]
}

function setLineTxt(text) {
    console.log(text)
    if (!text) return
    if (gMeme.lines.length === 0) {
        gCtx.fillStyle = 'white'
        gCtx.font = '48px impact'
        gCtx.fillText(text, 80, 50)
        gMeme.lines[0].txt = text
        gMeme.lines[0].posx = 80
        gMeme.lines[0].posy = 50
    } else {
        gCtx.fillText(text, 80, 450)
        gMeme.lines.push({
            txt: text,
            size: 20,
            align: 'left',
            color: 'white',
            posx: 80,
            posy: 450,
            isDrag: false,
            rectPos: 0,
        })
    }
}

function saveMeme(imgURL) {
    gMeme.selectedImgId = imgURL
}

function getMeme() {
    return gMeme
}

function deleteText() {
    if (!gMeme.lines.length) return
    let pos = gMeme.selectedLineIdx
    console.log(pos)
    if (pos >= 0) {
        gMeme.lines.splice(pos, 1)
        if (gMeme.lines.length) {
            gMeme.selectedLineIdx = gMeme.lines.length - 1
            return
        }
    }
    gMeme.selectedLine = gMeme.lines.length - 1
}

function changeLines() {
    if (gMeme.selectedLineIdx === -1) return null
    if (!gMeme.lines.length) return
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
        gMeme.selectedLineIdx = 0
        return gMeme.lines[gMeme.selectedLineIdx]
    }
    gMeme.selectedLineIdx++
        return gMeme.lines[gMeme.selectedLineIdx]
}

function getSelectedLine() {
    if (gMeme.selectedLineIdx === -1) return null
    return gMeme.lines[gMeme.selectedLineIdx]
}

function clearText() {
    gMeme = {
        selectedImgId: 0,
        selectedLineIdx: 0,
        lines: [{}]
    }
    return gMeme
}

function isTextClicked(pos) {
    return gMeme.lines.find((line, idx) => {
        const rectPos = line.rectPos
        console.log(rectPos)
        if (pos.x > rectPos.x &&
            pos.x < rectPos.x + rectPos.width &&
            pos.y > rectPos.y &&
            pos.y < rectPos.y + rectPos.height) {
            gMeme.selectedLineIdx = idx
            return true
        }
    })
}

function setTextDrag(val) {
    if (gMeme.selectedLineIdxIdx === -1) return null
    const pos = gMeme.selectedLineIdx
    gMeme.lines[pos].isDrag = val
}

function changefont(font) {
    console.log('testing')
    const pos = gMeme.selectedLineIdx
    if (pos < 0) return
    gMeme.lines[pos].font = font

}

function moveTextPos(dx, dy) {
    const pos = gMeme.selectedLineIdx
    gMeme.lines[pos].posx += dx
    gMeme.lines[pos].posy += dy
}

function onChangeColor(color) {
    console.log(color)
    const pos = gMeme.selectedLineIdx
    if (pos < 0) return
    gMeme.lines[pos].color = color
}