'use strict'
var gGal = []
var idx;


function init() {
    console.log('loading...')
    renderGallery()
}



function createGallery() {
    idx = 1;
    for (var i = 0; i < 10; i++) {
        gGal.push(`img/${idx}.jpg`)
        idx++

    }
    return gGal
}


function renderGallery() {
    var pics = createGallery()
    var strHtmls = pics.map(pic => `
    <img onclick="onImgSelect(this)" src=${pic}>
    `)
    document.querySelector('.gallery-container').innerHTML = strHtmls.join('')
}




// var imgN = new Image()
// imgN.src = img