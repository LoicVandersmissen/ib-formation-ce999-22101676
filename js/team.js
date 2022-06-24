/**
 * Gestion d'événements en DOM-0
 */

// window.onload = function () {
//     alert('Welcome!');
// };

document.querySelector('h2:first-of-type').onclick = function () {
    alert('DOM-0 : ' + this.textContent);
}

document.querySelector('h2:nth-of-type(2)').onclick = function () {
    alert('DOM-0 : ' + this.textContent);
}

document.querySelector('h2:last-of-type').onclick = function () {
    alert('DOM-0 : ' + this.textContent);
}

/**
 * Gestion dévénements en DOM-2
 */

// Fin de chargement du document
window.addEventListener(
    'DOMContentLoaded',
    function () {
        // Clic sur n'importe quel h2
        let aElts = document.querySelectorAll('h2');
        for (let i = 0; i < aElts.length; i++) {
            aElts[i].addEventListener(
                'click',
                function () {
                    alert('DOM-2 : ' + this.textContent)
                }
            );
        }
    },
);

/**
 * Calcule le total
 */

document.querySelector('#calc').addEventListener(
    'dblclick',
    function () {
        let aElts = document.querySelectorAll('table tbody tr td:last-of-type');
        let total = 0;
        // for (let i = 0; i < aElts.length; i++) {
        //     total += parseInt(aElts[i].textContent);
        // }
        aElts.forEach(element => {
            total += parseInt(element.textContent);
        });
        document.querySelector('#result').textContent = total;
    }
);