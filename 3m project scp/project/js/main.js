// RANDOM COLOR GENERATOR

const btnScp = document.querySelector('.btn-scp')
const btnChaos = document.querySelector('.btn-chaos')
const btnSnake = document.querySelector('.btn-snake')
const btnDoc = document.querySelector('.btn-doc')

const changeMain = document.querySelector('.change-main')
const mainBlock = document.querySelector('.main_block')

let visible = false

const updateContent = (htmlContent, backgroundImage) => {
    if (visible) {
        changeMain.innerHTML = ''
        mainBlock.style.backgroundImage = ''
        visible = false
    } else {
        changeMain.innerHTML = htmlContent;
        mainBlock.style.backgroundImage = backgroundImage ? `url(${backgroundImage})` : ''
        visible = true
    }
};

btnScp.onclick = () => {
    updateContent(`
        <h1 class="about-scp">Фонд SCP - Обезопасить, Удержать, Сохранить.</h1>
        <div class="main-scpImg">
            <img src="../images/scp.webp" alt="scp">
        </div>
    `)
}

btnChaos.onclick = () => {
    updateContent(`
        <h1 class="about-scp">Освободить. Разрушить. Устроить хаос.</h1>
        <div class="main-scpImg">
            <img src="../images/chaos-img.webp" alt="chaos">
        </div>
    `)
}

btnSnake.onclick = () => {
    updateContent(`
        <h1 class="about-scp">Длань Змея - Знание — это сила.</h1>
        <div class="main-scpImg">
            <img src="../images/snake.webp" alt="snake">
        </div>
    `)
}

btnDoc.onclick = () => {
    updateContent(`
        <h1 class="about-scp">Доктор Развлечудов - Улыбки на каждый дюйм.</h1>
        <div class="main-scpImg">
            <img src="https://sun9-23.userapi.com/impf/yhqPShRVybNdcFkUpHpMGu-a9GQsJ_4qTMnicA/H_WTZgu85ck.jpg?size=1400x1400&quality=96&sign=7b655b73e1ac58393c2820c9017682a7&type=none" alt="Доктор Развлечудов">
        </div>
    `)
}


// SLIDER BLOCK

const slides = document.querySelectorAll('.slide')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')
let index = 0

const hideSlide = () => {
    slides.forEach((slide) => {
        slide.style.opacity = 0
        slide.classList.remove('active_slide')
    })
}
const showSlide = (i = 0) => {
    slides[i].style.opacity = 1
    slides[i].classList.add('active_slide')
}


hideSlide()
showSlide(index)

const autoSlider = (i = 0) => {
    setInterval(() => {
        i++
        if (i > slides.length - 1) {
            i = 0
        }
        hideSlide()
        showSlide(i)
    }, 10000)
}

next.onclick = () => {
    index < slides.length - 1 ? index++ : index = 0
    hideSlide()
    showSlide(index)
}

prev.onclick = () => {
    index > 0 ? index-- : index = slides.length - 1
    hideSlide()
    showSlide(index)
}

autoSlider(index)
