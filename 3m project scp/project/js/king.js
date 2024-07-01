
const kingBlock = document.querySelector('.kingBlock')
const defaultUserPhoto = 'https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'
const url = '../data/king.json'


const loadCard = async () => {
    try {
        const response = await fetch(url)
        const data = await response.json()
        data.forEach(scp => {
            const kingCard = document.createElement('div')
            kingCard.classList.add('scpCard');
            kingCard.innerHTML = `
            <div class="scpImage">
                <img src="${scp.photo || defaultUserPhoto}" alt="${scp.name}">
             </div>
             <h2>${scp.scp}</h2>
             <h2>${scp.name}</h2>
             <h3>${scp.type}</h3>
             <p>${scp.title}</p>
             `
            kingBlock.append(kingCard)
        })
    } catch (e) {
        console.log('not', e)
    }
}
loadCard()
// fetch(url).then(response => response.json()).then(data => {
//     data.forEach(scp => {
//         const scpCard = document.createElement('div');
//         scpCard.classList.add('scpCard');
//         scpCard.innerHTML = `
//                     <div class="scpImage">
//                         <img src="${scp.photo}" alt="${scp.name}">
//                     </div>
//                     <h2>${scp.id}</h2>
//                     <h3>${scp.name}</h3>
//                     <span>${scp.status}</span>
//                 `;
//         scpContainer.append(scpCard);
//     });
// });