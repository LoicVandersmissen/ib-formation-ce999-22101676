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
    function(){
        document.querySelector('#salaryVal').textContent=this.value + ' EUR bruts mensuels'
    }
);