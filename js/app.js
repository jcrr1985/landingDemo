/* eslint-disable eol-last */
var cardArray = document.getElementsByClassName('card');
for (let i = 0; i < cardArray.length; i++) {
  cardArray[i].classList.add('wow', 'bounceIn');
}

// .classList.add('colorGrey')

// cardArray[0].children[0].children[2].style.display = 'none';

var fraseArray = document.getElementsByClassName('frase');

var authorArray = document.getElementsByClassName('author');

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(function (json) {
    for (let i = 0; i < fraseArray.length; i++) {
      fraseArray[i].innerHTML = json[i].body;
    }
  });

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < authorArray.length; i++) {
      authorArray[i].innerHTML = json[i].name;
    }
  });