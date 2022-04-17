'use strict'

function init() {
    console.log('loading...')
    renderGallery()
}


function renderGallery() {
    let imgs = getImg()
    let strHtmls = ''
    imgs.forEach(img => {
        strHtmls += `
         <img onclick="onImgSelect('${img.url}',this)" class="galleryitem" src=${img.url}>
         `
    })
    document.querySelector('.gallery-container').innerHTML = strHtmls;
}


function OnscrollTop() {
    window.scrollTo(0, 0)
    var block = document.querySelector('.canvas1')
    block.style.display = 'none'
}