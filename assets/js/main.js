"use strict";

document.addEventListener('DOMContentLoaded', init);

function init() {
    document.querySelector('.skills').addEventListener('click', onSkillClick);
}

function onSkillClick(event) {
    if (event.target.tagName.toLowerCase() !== 'li') {
        return;
    }
    let text = event.target.innerText.replace('#', '%23');

    openLink('https://www.ecosia.org/search?q=' + text, '_blank');
}

function openLink(url, action = '_self') {
    window.open(url, action);
}
