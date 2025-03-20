let theme = false;
let themeButton = document.querySelector('.theme__button');
let profileTitle = document.querySelector('.profile__title');
let detailsNumber = document.querySelectorAll('.details__number');
let navLink = document.querySelectorAll('.nav__link');
let linkActive = document.querySelector('.nav__active');
let menu = document.querySelector('.menu');
let menuButtons = document.querySelectorAll('.menu__button');
let menuActive = document.querySelector('.menu__active');

function changeTheme() {
  theme = !theme;
  console.log(theme);
  if (theme) {
    document.body.style.backgroundColor = '#0C151D';
    document.body.style.color = '#A3ABB2';
    themeButton.style.backgroundColor = '#171F26';
    profileTitle.style.color = '#F1F2F4';
    detailsNumber.forEach((num) => (num.style.color = '#A3ABB2'));
    navLink.forEach((link) => (link.style.backgroundColor = '#171F26'));
    linkActive.style.backgroundColor = '#FFE071';
    linkActive.style.color = '#3D3D3D';
    menu.style.backgroundColor = '#171F26';
    menuButtons.forEach((button) => (button.style.backgroundColor = '#171F26'));
    menuButtons.forEach((button) => (button.style.color = '#A3ABB2'));
    menuActive.style.backgroundColor = '#0C151D';
    console.log('escuro');
  } else {
    document.body.style.backgroundColor = '#E9EBEC';
    document.body.style.color = '#575757';
    themeButton.style.backgroundColor = '#FFFFFF';
    profileTitle.style.color = '#3D3D3D';
    detailsNumber.forEach((num) => (num.style.color = '#3D3D3D'));
    navLink.forEach((link) => (link.style.backgroundColor = '#FFFFFF'));
    linkActive.style.backgroundColor = '#FBD144';
    menu.style.backgroundColor = '#FFFFFF';
    menuButtons.forEach((button) => (button.style.backgroundColor = '#FFFFFF'));
    menuButtons.forEach((button) => (button.style.color = '#19191B'));
    menuActive.style.backgroundColor = '#D7D7D7';
    console.log('claro');
  }
}