const iconMenu = document.querySelector('.menu__icon')
const menuBody = document.querySelector('.menu__navbar')
if(iconMenu) {
  iconMenu.addEventListener('click', () => {
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  })
}