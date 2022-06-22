// Commentaire sur une seule ligne
// puis sur une autre

/* 
Commentaires 
sur
plusieurs
lignes
*/

/**
 * JavaDoc
 */

/**
 * Variables primitives ou scalaires : texte, nombre ou booléen (Vrai/Faux)
 */
nb = 11; // variable déclarée implicitement et globale : interdit !
nb = 'onze'; // JS faiblement typé

var boys = 9; // variable déclarée explicitement et globale : recommandé !
let girls = 2; // variable déclarée explicitement et locale : recommandé !

let code = 'CE999'; // type String
let desc = "Langages HTML5, CSS3 et JavaScript"; // type String
let duration = 35; // type Number
let isDev = true; // type Boolean
const attendance = 11; // constante
// attendance = boys + girls; // erreur car constante !

console.log(code); // affiche dans la console
console.log(desc);
console.log(isDev);
console.log(duration);

/**
 * Opérateurs arithmétiques : * / + - % (modulo)
 */
let i = 1, j = '2', k = 'trois';
let result = i + j + k; // concaténation
console.log(result);

j = 2;
k = 3;
let calc = i + j + k; // addition
console.log(calc);

let l = 4;
calc = i * j / k - l + 5; // priorités des opérations
console.log(calc);

let mod = l % k;
console.log(mod);

i = 0;
// i++ équivaut à i = i + 1
console.log(++i); // pré-incrémentation
console.log(i++); // post-incrémentation
console.log(i);

// Typage des variables : typeof et cast
let m;
console.log(typeof code);
console.log(typeof isDev);
console.log(typeof duration);
console.log(typeof (i / k));
console.log(typeof m);
console.log(typeof z);

// cast ou transtypage : parseInt et parseFloat
let n = '3 petits cochons', o = '250 nuances de gris', p = 'R2D2';
calc = parseInt(n) + parseInt(o);
console.log(calc);

calc = parseInt(n) + parseInt(o) + parseInt(p);
console.log(calc);

/**
 * Ecriture dans le document : Objet document
 */
document.write('<h1>' + code + ' - ' + desc + '</h1>');
document.write('<p>Durée : ' + duration + ' heures</p>');
document.write('<p>Public : ' + attendance + ' participants</p>');








