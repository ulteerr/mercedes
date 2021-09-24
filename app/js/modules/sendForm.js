import {messageMail} from "./messageMail.js";

const formDrive = document.querySelector('.form-test-drive')


const sendForm = () => {
    formDrive.addEventListener('submit', (event) => {
        event.preventDefault()
        let data = {}
        for (let {name, value} of formDrive.elements) {
            if (name) {
                data[name] = value
            }
        }
        const er1 = document.querySelector('.error_one')
        if (data.name === '' || data.name === ' ') {
            er1.innerHTML = 'Заполните поле «Имя»'
            return false

        } else if (data.name.length < 3) {
            er1.innerHTML = 'Ваше имя слишком короткое'
            return false
        } else {
            er1.innerHTML = ''

        }
        const er2 = document.querySelector('.error_two')
        if (data.mail != null && data.mail.length === 0) {
            er2.innerHTML = 'Заполните поле «Электронная почта»'
            return false
        } else if (!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(data.mail))) {
            er2.innerHTML = 'Введите правильный адрес электронный почты'
            return false
        } else {
            er2.innerHTML = ''
        }
        const er3 = document.querySelector('.error_three')
        if (data.phone != null && data.phone.length === 0) {
            er3.innerHTML = 'Введите номер телефона'
            return false
        } else if (data.phone.length < 7) {
            er3.innerHTML = 'Номер телефона слишком короткий'
            return false
        } else {
            er3.innerHTML = ''
        }


        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data)
        })
            .then(response => {
                if (response.status === 200 || response.status === 201) {
                    return response.json()
                } else {
                    throw new Error(response.status)
                }
            })
            .then(data => {
                messageMail()
                formDrive.reset()
            })
            .catch(error => {
                alert('Произошла ошибка, статус' + error.message)
            })
    })
}

export {sendForm}