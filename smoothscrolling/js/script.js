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

const activate = (num) => {

  deleteActive();

  linksArray[num].classList.add('navActive');

  main.style.marginLeft = (-100 * num) + 'vw';
}

const deleteActive = () => {
  linksArray.forEach( (item) => {
    item.classList.remove('navActive');
  });
}

activate(index);
