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
        let aChecks = document.querySelectorAll('#register input[type=checkbox][name^=job]');
        aChecks.forEach(elt => {
            elt.checked = this.checked;
        });
    }
);

/**
 * Remplissage de la liste des pays au chargement de la page
 */

window.addEventListener(
    'load',
    function () {
        // étape 1 : instanciation de l'objet AJAX
        let xhr = new XMLHttpRequest();
        // étape 2 : ouverture connexion vers serveur
        xhr.open('get', 'https://restcountries.com/v3.1/lang/fra?fields=cca2,translations');
        // étape 3 : envoi du formulaire
        xhr.send();
        // étape 4 : écoute du signal serveur
        xhr.addEventListener(
            'readystatechange',
            () => {
                if (xhr.readyState === 4 && (xhr.status === 0 || xhr.status === 200)) {
                    console.log(xhr.responseText);
                    // désérialise le contenu de la réponse
                    let data = JSON.parse(xhr.responseText), option;
                    // passe en revue chaque élément du tableau et crée l'option
                    data.forEach(elt => {
                        option = document.createElement('option');
                        option.value = elt.cca2;
                        option.textContent = elt.translations.fra.common;
                        document.querySelector('#country').appendChild(option);
                    });
                }
            }
        );
    }
);

/**
 * Stockage local (LocalStorage) du formulaire sous la forme d'un objet sérialisé (JSON)
 */

document.querySelector('#save').addEventListener(
    'click',
    function () {
        // récupère tous les inputs ayant un attribut name
        // let aElts=document.querySelectorAll('#register input:not([name=""])');
        let aElts = document.querySelectorAll('#register [name]'), data = {};

        // parcourt tous les inputs et alimente l'objet data
        aElts.forEach(elt => {
            data[elt.name] = elt.value;
        });
        console.log(data);

        // sérialise et stocke l'objet
        localStorage.setItem(document.querySelector('#fname').value, JSON.stringify(data));
    }
);