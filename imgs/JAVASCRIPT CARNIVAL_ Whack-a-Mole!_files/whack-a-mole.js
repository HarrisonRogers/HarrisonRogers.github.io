// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

import { getRandomNumber } from './random-number.js'

let cells = document.querySelectorAll('td')
let randomIndex = getRandomNumber(0, cells.length)
let randomCell = cells[randomIndex]
let img = document.createElement('img')

function moleInRandomCell(cell) {
  img.setAttribute('id', 'mole')
  img.setAttribute('src', 'mole.png')
  cell.appendChild(img)
}

function whackedMole() {
  console.log('Clicked')
}

img.addEventListener('click', whackedMole)

moleInRandomCell(randomCell)
