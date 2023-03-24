


document.addEventListener('keypress', (event) => {
    var name = event.key;
    if (name === "n") {
        const nextButton = document.querySelector('[data-uia="control-next"]');
        nextButton.click()
    }
}, false);