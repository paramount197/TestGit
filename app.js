'use strict'

let today = new Date()
let formatDate = today.toDateString()
let selectElement = document.getElementById('date')
selectElement.innerHTML = formatDate


  function generateRandomNumber() {
      var min = parseInt(document.getElementById('min').value);
      var max = parseInt(document.getElementById('max').value);
      var rand = Math.floor(Math.random()* (max - min + 1)) + min;
      document.getElementById('display').innerText = rand
  }

  
console.log('Here\' s a hidden message');
