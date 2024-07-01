const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneSpan = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = 'ok'
        phoneSpan.style.color = 'green'
    } else {
        phoneSpan.innerHTML = 'not ok'
        phoneSpan.style.color = 'red'
    }
}


///// TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabContentItems = document.querySelectorAll('.tab_content_item')
const tabParent = document.querySelector('.tab_content_items')

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none'
    })
    tabContentItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabContentItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent()

tabParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
}

const autoSlider = () => {
    let i = 0
    setInterval(() => {
        i++
        if (i > tabContentItems.length - 1) {
            i = 0
        }
        hideTabContent()
        showTabContent(i)
    }, 3000)
}
autoSlider()


// CONVERTER

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json')
        request.setRequestHeader('Content-type', 'application/json')
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response)
            switch (element.id) {
                case 'som':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    eurInput.value = (element.value * data.eur).toFixed(2)
                    break
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2)
                    eurInput.value = (data.usd / data.eur).toFixed(2)
                    break
                case 'eur':
                    usdInput.value = (data.eur / data.usd).toFixed(2)
                    somInput.value = (element.value * data.eur).toFixed(2)
                    break
            }

            element.value === '' && (targetElement.value = '')
            element.value === '' && (eurInput.value = '')
        }
    }
}

converter(usdInput, somInput)
converter(somInput, usdInput)
converter(eurInput, usdInput)

// DRY - don`t repeat yourself
// KISS - keep it simple, stupid!


// CARD SWITCHER
const cardBlock = document.querySelector('.card')
const btnNext = document.querySelector('#btn-next')
const btnPrev = document.querySelector('#btn-prev')
const cardNumber = 1
const loadCard = async (number) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${number}`)
        const data = await response.json()
        cardBlock.innerHTML = `
                <p>${data.title}</p>
                <p style="color: ${data.completed ? 'green' : 'red'}">${data.completed}</p>
                <span>${data.id}</span>
                `
    } catch (e) {
        console.log('not', e)
    }
}
loadCard(cardNumber)

btnNext.onclick = () => {
    cardNumber++
    if (cardNumber > 200) {
        cardNumber = 1
    }
    loadCard(cardNumber)
}

btnPrev.onclick = () => {
    cardNumber--
    if (cardNumber < 1) {
        cardNumber = 200
    }
    loadCard(cardNumber)
}

// WEATHER

const searchInput = document.querySelector('.cityName')
const temp = document.querySelector('.temp')
const city = document.querySelector('.city')

const URL = 'http://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'e417df62e04d3b1b111abeab19cea714'
const citySearch = () => {
    searchInput.oninput = (event) => {
        fetch(`${URL}?q=${event.target.value}&appid=${API_KEY}`)
            .then(response => response.json())
            .then(data => {
                city.innerHTML = data.name ? data.name : 'no'
                temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + '&deg;C' : '///'
            })
    }
}
citySearch()
