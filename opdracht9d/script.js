window.addEventListener("load", function () {
  var myName = document.getElementById("myName");
  var letters = ["J", "a", "r", "i"];
  new Audio('media/Tommy Roe - Dizzy.mp3').play()

  function animate() {
    myName.innerHTML = "";
    for (let teller= 0; teller < letters.length; teller++) {
      var letter = document.createElement('span');
      letter.innerHTML = letters[teller];
      letter.style.color ="rgb(" + rndGetal() + "," + rndGetal() + ","  + rndGetal() + ")";
      myName.appendChild(letter);
    }
  }
  setInterval(animate, 100);

})

  function rndGetal() {
    return Math.floor(Math.random() * 255);
  }
