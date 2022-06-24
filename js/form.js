/**
 * Branche l'événement CHANGE sur le calendrier
 */

document.querySelector('#dob').addEventListener(
    'change',
    function () {
        document.querySelector('#age').textContent = age(this.value) + ' ans';
    }
);

/**
 * Branche l'événement CHANGE sur le curseur du salaire
 */

document.querySelector('#salary').addEventListener(
    'mousemove',
    function () {
        document.querySelector('#salaryVal').textContent = this.value + ' EUR bruts mensuels'
    }
);

/**
 * Gestion du dark mode
 */

document.querySelector('#dark').addEventListener(
    'click',
    function () {
        document.body.className = 'dark';
    }
);

document.querySelector('#light').addEventListener(
    'click',
    function () {
        document.body.className = 'light';
    }
);

/**
 * Gestion du click/change sur la case à cocher
 */

document.querySelector('#checkAll').addEventListener(
    'click',
    function () {

    }
);










