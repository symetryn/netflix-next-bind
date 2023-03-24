


document.addEventListener('keypress', (event) => {
    var name = event.key;
    if (name === "n") {
        const nextButton = document.querySelector('[data-uia="control-next"]');
        nextButton?.click()

        const nextSeamlessButton = document.querySelector('[data-uia="next-episode-seamless-button"]');
        nextSeamlessButton?.click()
    }
}, false);