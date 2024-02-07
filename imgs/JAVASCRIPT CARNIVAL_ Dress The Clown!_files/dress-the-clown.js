// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //
const head = document.getElementById('head')
const body = document.getElementById('body')
const shoes = document.getElementById('shoes')
let headIndex = 0

function changeClownHead() {
  let headSrc = './images/head' + headIndex + '.png'

  head.src = headSrc

  headIndex++
}

changeClownHead()
