const elements = {
    startBtm : document.querySelector('.js-start'),
    container: document.querySelector('.js-container'),
}

elements.startBtm.addEventListener('click', startGame);
function startGame() {
    const promises = [...elements.container.children].map((_) => createPromise()
    );
    Promise.allSettled(promises).then((items) => {
        items.forEach((item, idx) => {
            elements.container.children[idx].textContent = ''
            setTimeout(() => { 
                elements.container.children[idx].textContent = item.value || item.reason;
            }, 1000 * (idx + 1));
        })
    })
}

function createPromise() { 
    return new Promise((resolve, reject) => {
        const random = Math.random();
        if (random < 0.5) {
            resolve('🍒');
        } else {
            reject('🍌')
        }
    })
}