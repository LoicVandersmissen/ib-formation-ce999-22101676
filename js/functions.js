/**
 * Fonction qui dit bonjour en trois langues (FR, ES et EN)
 * @version 1.0
 * @author Lesly
 * @param {string} fname prénom à indiquer
 * @param {string} lang langue pratiquée
 */

function sayHello(fname, lang = 'FR') {
    if (lang === 'FR') {
        alert('Salut ' + fname);
    } else if (lang === 'ES') {
        alert('Hola ' + fname);
    } else {
        alert('Hi ' + fname);
    }
}

let sayHelloAgain = function (fname, lang = 'FR') {
    if (lang === 'FR') {
        alert('Salut ' + fname);
    } else if (lang === 'ES') {
        alert('Hola ' + fname);
    } else {
        alert('Hi ' + fname);
    }
};

/**
 * Fonction qui renvoie un prix TTC à partir du HT et du taux
 * @param {float} ht prix HT (doit être positif)
 * @param {float} taux taux de TVA (doit valoir 2.1%, 5.5%, 10% ou 20%)
 * @return {float} prix TTC
 */

function ttc(ht, taux = .2) {
    let vals = [.021, .055, .1, .2];
    if (isNaN(ht) || isNaN(taux)) {
        throw 'L\'un des deux paramètres n\'est pas un nombre.'
    } else {
        if (ht < 0) {
            throw 'Le prix HT doit être positif.';
        }
        if (!vals.includes(taux)) {
            throw "Le taux n'est pas correct.";
        }
        return ht * (1 + taux);
    }
}

/**
 * Fonction qui renvoie la différence en années entre deux dates données
 * @param {string|number} date1 première date
 * @param {string|number} date2 deuxième date
 * @return {number} âge en années
 */

function age(date1, date2 = new Date()) {
    let d1 = new Date(date1), d2 = new Date(date2);
    if (isNaN(d1) || isNaN(d2)) {
        throw "L'une des deux dates n'est pas correcte.";
    } else {
        return Math.floor(Math.abs((d1 - d2) / 1000 / 60 / 60 / 24 / 365.25));
    }
}