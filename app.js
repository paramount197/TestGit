'use strict'

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

// var timer = 10;

// var interval = setInterval(function() {
//     timer--;
//     $('.timer').text(timer);
//     if (timer === 0) clearInterval(interval);
// }, 1000);

function generateRandomNumber() {
    var min = parseInt(document.getElementById('min').value);
    var max = parseInt(document.getElementById('max').value);
    var rand = Math.floor(Math.random()* (max - min + 1)) + min;
    document.getElementById('display').innerText = rand
  }

// var timeleft = 10;
// var downloadTimer = setInterval(function(){
//   document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
//   timeleft -= 1;
//   if(timeleft <= 0){
//     clearInterval(downloadTimer);
//     document.getElementById("countdown").innerHTML = generateRandomNumber()
//   }
// }, 1000);
console.log('Here\' s a hidden message');
