const btns = document.querySelectorAll('.feature__link')
const lists = document.querySelectorAll('.feature-sub')


const accordion = () => {
    btns.forEach((btnItem, index) => {
        btnItem.addEventListener('click', () => {
            if (btnItem.classList.value == 'feature__link feature__link_active') {
                btnItem.classList.remove('feature__link_active')
                lists[index].classList.add('hidden')
            } else {
                btns.forEach((btnItem) => {
                    btnItem.classList.remove('feature__link_active')
                })
                btnItem.classList.add('feature__link_active')

                lists.forEach((listItem) => {
                    listItem.classList.add('hidden');
                })
                lists[index].classList.remove('hidden');
            }
        })
    })
}

export {accordion}
