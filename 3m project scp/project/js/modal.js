// //MODAL
//
// const modalTriggerButton = document.querySelector('#btn-get')
// const modal = document.querySelector('.modal')
// const modalCloseButton = document.querySelector('.modal_close')
//
// const openModal = () => {
//     modal.style.display = 'block'
//     document.body.style.overflow = 'hidden'
//
// }
// setTimeout(openModal,10000)
//
// const closeModal = () => {
//     modal.style.display = 'none'
//     document.body.style.overflow = ''
// }
//
// modalTriggerButton.onclick = () => {
//     openModal()
// }
// modalCloseButton.onclick = () => {
//     closeModal()
// }
//
// modal.onclick = (event) => {
//     if (event.target === modal)
//     closeModal()
// }
//
//
//
// function autoOpenModal() {
//     if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 1) {
//         openModal();
//         window.removeEventListener('scroll', autoOpenModal);
//     }
// }
// window.addEventListener('scroll', autoOpenModal);
//
//
// // POST DATA TELEGRAM BOT
//
// const form = document.querySelector('form')
// const token = '7330549624:AAE330q4vz5C-RkYHzFUJMvpBRQbUCvTxCM'
// const chat_id = '@adina_lesson7_bot'
// const API = `https://api.telegram.org/bot${token}/sendMessage`
//
// form.onsubmit = async (event) => {
//     event.preventDefault()
//
//     const {name, phone} = Object.fromEntries(new FormData(event.target).entries())
//     const text = `name: ${name}\nphone: ${phone}`
//
//     await fetch(API, {
//         method: 'POST',
//         headers: {'Content-type': 'application/json'},
//         body: JSON.stringify({
//             chat_id: chat_id, text
//         })
//     })
// }
//
