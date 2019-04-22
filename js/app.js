/* eslint-disable eol-last */
var cardArray = document.getElementsByClassName('card');
for (let i = 0; i < cardArray.length; i++) {
    cardArray[i].classList.add('wow', 'bounceIn');
}



var fraseArray = document.getElementsByClassName('frase');

var authorArray = document.getElementsByClassName('author');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(function(json) {
        for (let i = 0; i < fraseArray.length; i++) {
            fraseArray[i].innerHTML = `"${json[i].body}"`;
        }
    });

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < authorArray.length; i++) {
            authorArray[i].innerHTML = json[i].name;
        }
    });

var changer1 = document.getElementById("changer1");
var changer2 = document.getElementById("changer2");
var changer3 = document.getElementById("changer3");
var changer4 = document.getElementById("changer3");

var r = document.getElementsByClassName('carousel-item');

console.log(r);

changer1.addEventListener('click', function() {
    for (let i = 0; i < r.length; i++) {
        r[i].classList.remove('active')
    }
    r[0].classList.add('active')
});
changer2.addEventListener('click', function() {
    for (let i = 0; i < r.length; i++) {
        r[i].classList.remove('active')
    }
    r[1].classList.add('active')
});
changer3.addEventListener('click', function() {
    for (let i = 0; i < r.length; i++) {
        r[i].classList.remove('active')
    }
    r[2].classList.add('active')
});
changer4.addEventListener('click', function() {
    for (let i = 0; i < r.length; i++) {
        r[i].classList.remove('active')
    }
    r[3].classList.add('active')
});