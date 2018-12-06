let index = 0;
let main = document.querySelector('.content');
let links = document.querySelectorAll('.navMenuitem');
let linksArray = [];

links.forEach( (item) => {
  item.addEventListener('click', (e) => {
    index = linksArray.indexOf(item);
    activate(index);
  });
  linksArray.push(item);
});

const pijlLinks = document.querySelector('.nav__pijl__links');
const pijlRechts = document.querySelector('.nav__pijl__rechts');

const activate = (num) => {
  deleteActive();
  toonVerbergPijlen();
  linksArray[num].classList.add('navActive');
  main.style.marginLeft = (-100 * num) + 'vw';
}

const deleteActive = () => {
  linksArray.forEach( (item) => {
    item.classList.remove('navActive');
  });
}

//script pijltjes
// functie om de volgende section te activeren
const volgende = () => {
  if ( index < linksArray.length-1) {
    index++;
  } else {
    index = 0;
  }
  activate(index);
}

const vorige = () => {
if ( index > 0 ) {
  index--;
} else {
  index = linksArray.length-1;
}
  activate(index);
}
const toonVerbergPijlen = () => {
  if (index == 0 ) {
    pijlLinks.style.display = 'none';
  } else {
    pijlLinks.style.display = 'block';
  }

  if (index == linksArray.length -1 ) {
    pijlRechts.style.display = 'none';
  } else {
    pijlRechts.style.display = 'block';
  }
}

pijlRechts.addEventListener('click', volgende);
pijlLinks.addEventListener('click', vorige);

//toetsenbord events
document.addEventListener('keyup', (e) => {
  if ( e.keyCode == 39 || e.keyCode == 32 ) {
    volgende();
  }
  if ( e.keyCode == 37 ) {
    vorige();
  }
})

activate(index);
