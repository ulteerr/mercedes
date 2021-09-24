const createMessage = document.querySelector('.message')

const messageMail = () => {
    createMessage.classList.remove('hidden')
    createMessage.addEventListener('click', (event) => {
        const target = event.target
        if (target.classList.contains('overlay') ||
            target.classList.contains('modal__close')) {
            createMessage.classList.add('hidden')
        }
    })
}

export {messageMail}