import './public/css/style.css'
import viteLogo from '/img/favicon-32x32.png'
import mobile_divider from '/img/pattern-divider-mobile.svg'
import desktop_divider from '/img/pattern-divider-desktop.svg'
import dice from '/img/icon-dice.svg'
import { AdviceUI } from './public/js/ui'



document.querySelector('#app').innerHTML = `
<!-- This code displays an article card with advice and button. -->
<article class="card">
  <!-- The span class displays the advice number. -->
  <h1 class="adivce-id">ADVICE #<span id="slip-id"></span></h1>
  <!-- The paragraph class displays the actual advice. -->
  <p class="adivce" id="advice">
    Loding...
  </p>
  <!-- The picture element with a source media query and desktop/Mobile images. -->
  <picture>
    <source media="(min-width:650px)" srcset="${desktop_divider}">
    <img class="divider" src="${mobile_divider}" alt="image of a divider">
  </picture>
  <!-- The button class containing an image of a dice. -->
  <button class="dice" type="button">
    <img src="${dice}" alt="image of a dice">
  </button>
</article>
`
AdviceUI(document.querySelector("article"))

