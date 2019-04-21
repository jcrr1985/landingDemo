/* eslint-disable eol-last */
var cardArray = document.getElementsByClassName('card');
for (let i = 0; i < cardArray.length; i++) {
  cardArray[i].classList.add('animated', 'bounceIn');
}