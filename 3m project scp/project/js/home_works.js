///////////////check email
const gmailInput = document.querySelector("#gmail_input")
const gmailButton = document.querySelector("#gmail_button")
const result = document.querySelector("#gmail_result")

const regExp = /\w@gmail.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        result.innerHTML = 'ok'
        result.style.color = 'green'
    } else {
        result.innerHTML = 'not ok'
        result.style.color = 'red'
    }
}

//////// SCP TYPES

const btnNorm = document.querySelector('.norm-scp');
const btnEvklid = document.querySelector('.evklid-scp');
const btnKeter = document.querySelector('.keter-scp');
const btnTaumiel = document.querySelector('.taumiel-scp');

const scpContainer = document.querySelector('.container-scp');
let visible = false;

const loadScpData = (url) => {
    if (visible) {
        scpContainer.innerHTML = '';
        visible = false;
    } else {
        fetch(url).then(response => response.json()).then(data => {
            data.forEach(scp => {
                const scpCard = document.createElement('div');
                scpCard.classList.add('scpCard');
                scpCard.innerHTML = `
                    <div class="scpImage">
                        <img src="${scp.photo}" alt="${scp.name}">
                    </div>
                    <h2>${scp.id}</h2>
                    <h3>${scp.name}</h3>
                    <span>${scp.status}</span>
                `;
                scpContainer.append(scpCard);
            });
        });
        visible = true;
    }
};

btnNorm.onclick = () => loadScpData('../data/scpNormal.json');
btnEvklid.onclick = () => loadScpData('../data/scpEvklid.json');
btnKeter.onclick = () => loadScpData('../data/scpKeter.json');
btnTaumiel.onclick = () => loadScpData('../data/scpTaumiel.json');

//Правило коробки: Если положить объект в коробку, убрать её подальше, и ничего плохого не случится, то это, скорее всего, «Безопасный».
//Правило коробки: Если положить объект в коробку, убрать её подальше, и нельзя заранее сказать, что случится, то это, вероятно, «Евклид».
//Правило коробки: Если положить объект в коробку, убрать её подальше, и будут катастрофические разрушения со множеством жертв, то это, должно быть, «Кетер».
//Правило коробки: Если объект и есть коробка, то это, не иначе, «Таумиэль».
///////////////////////move block//////////
const childBlock = document.querySelector('.child_block')
const parentBlock = document.querySelector('.parent_block')
const maxOffsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth
const maxOffsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight

let positionX = 0
let positionY = 0
const moveBlock = () => {
    if (positionX < maxOffsetWidth && positionY === 0){
        parentBlock.style.backgroundImage = 'url("../images/scp.webp")'
        parentBlock.style.backgroundRepeat = 'no-repeat';
        parentBlock.style.backgroundSize = 'contain';
        positionX++
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= maxOffsetWidth && positionY < maxOffsetHeight) {
        parentBlock.style.backgroundImage = 'url("../images/chaos-img.webp")'
        parentBlock.style.backgroundRepeat = 'no-repeat';
        parentBlock.style.backgroundSize = 'contain';
        positionY++
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }else if (positionX >= 0 && positionY <= maxOffsetHeight) {
        parentBlock.style.backgroundImage = 'url("../images/snake.webp")'
        parentBlock.style.backgroundRepeat = 'no-repeat';
        parentBlock.style.backgroundSize = 'contain';
        positionX--
        childBlock.style.left = `${positionX}px`
        setTimeout(moveBlock, 1)
    }else if (positionX <= 0 && positionY > 0) {
        parentBlock.style.backgroundImage = 'url("https://sun9-23.userapi.com/impf/yhqPShRVybNdcFkUpHpMGu-a9GQsJ_4qTMnicA/H_WTZgu85ck.jpg?size=1400x1400&quality=96&sign=7b655b73e1ac58393c2820c9017682a7&type=none")'
        parentBlock.style.backgroundRepeat = 'no-repeat';
        parentBlock.style.backgroundSize = 'contain';
        positionY--
        childBlock.style.top = `${positionY}px`
        setTimeout(moveBlock, 1)
    }
}
moveBlock()

///////// counter ////////////////
let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let seconds = document.getElementById("seconds");
let count = 0;
let intervalId;


start.onclick = () => {
    if (!intervalId){
        intervalId = setInterval(() => {
            count++
            seconds.innerHTML = count
        },1000)
    }
}

stop.onclick = () => {
    clearInterval(intervalId)
    intervalId = null
}

reset.onclick = () => {
    clearInterval(intervalId)
    intervalId = null
    count = 0
    seconds.innerHTML = count
}




