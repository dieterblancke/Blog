"use strict";
const DateTime = luxon.DateTime;

document.addEventListener('DOMContentLoaded', init);

function init() {
    let elements = document.getElementsByTagName('age');

    for (let element of elements) {
        loadAge(element);
    }
}

function loadAge(element) {
    if (!element.hasAttribute('birth')) {
        return;
    }
    const now = DateTime.local();
    const birth = DateTime.fromISO(element.getAttribute('birth'));
    const age = parseInt(now.diff(birth, 'years').years);

    element.innerText = age;
}
