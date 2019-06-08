'use strict'

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

var timer = 10;

var interval = setInterval(function() {
    timer--;
    $('.timer').text(timer);
    if (timer === 0) clearInterval(interval);
}, 1000);
console.log('Here\' s a hidden message');
