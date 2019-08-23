'use strict'

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate

var seconds_left = 10;
function countDown(){
  seconds_left --;
  document.getElementById("display").innerHTML = seconds_left;
  if (seconds_left>0){
    setTimeout(countDown, 1000)
  }
  else{
    setInterval (generateRandomNumber(), 5000);
  }
}

// var interval = setInterval(function() {
//   document.getElementById('display').innerHTML = seconds_left--;

//   if (seconds_left <0)
//   {
//      document.getElementById('display').innerHTML = generateRandomNumber();
//      clearInterval(interval);
//   }
// }, 1000);

  function generateRandomNumber() {
      
      var min = parseInt(document.getElementById('min').value);
      var max = parseInt(document.getElementById('max').value);
      var rand = Math.floor(Math.random()* (max - min + 1)) + min;
      document.getElementById('display').innerText = rand;
  }

  
console.log('Here\' s a hidden message');
