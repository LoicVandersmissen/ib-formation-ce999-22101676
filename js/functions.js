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