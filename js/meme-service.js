'use strict'


var gKEyWordsSearchCountMap = { 'funny': 0, 'cat': 0, 'baby': 0 }
var gImg = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
    { id: 1, url: 'img/2.jpg', keywords: ['funny', 'cat'] }
];

var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [{
        txt: '',
        size: 20,
        align: 'left',
        color: 'red'
    }]
}


function getMeme() {
    var meme = gImg[0].url
    return meme
}


function setLineTxt() {
    console.log('adding text')
    var text = document.querySelector('.textbox').value
    if (!text) return
    gMeme.lines.push({ txt: text, size: 20, align: 'left', color: 'red' })
    console.log(text)
    gCtx.font = '48px Impact'
    gCtx.fillStyle = 'white'
    gCtx.fillText(text, 10, 50)
        // deleteInput(text)

}


// function deleteInput(text) {
//     if (!text) return
//     else text 


// }