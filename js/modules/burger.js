const burgerBtn = document.querySelector('.humburger-menu')
const menuElem = document.querySelector('.menu')


const burger = () => {
    burgerBtn.addEventListener('click', () => {
        menuElem.classList.toggle('menu-active')
        burgerBtn.classList.toggle('humburger-menu-active')
    })
    menuElem.addEventListener('click', (event) => {
        const target = event.target
        if (target.classList.contains('menu-list__link')) {
            menuElem.classList.remove('menu-active')
            burgerBtn.classList.remove('humburger-menu-active')
        }
    })
}


export {burger}