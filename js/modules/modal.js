const modalBtn = document.querySelectorAll('.more')
const modalBlock = document.querySelector(".modal")

const modal = () => {
    modalBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            modalBlock.classList.remove('hidden')
        })
    })
    modalBlock.addEventListener('click', (event) => {
        const target = event.target
        if (target.classList.contains('overlay') ||
            target.classList.contains('modal__close')) {
            modalBlock.classList.add('hidden')
        }
    })
}

export {modal}