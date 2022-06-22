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

/**
 * Variables composées ou array (tableau)
 */
let matrix = [];
console.log(typeof matrix);

let course = [
    'CE999',
    "Développement web",
    5,
    true
];
course[10] = 'Lesly';
course[4] = ['HTML5', 'CSS3', 'JS'];
course.push(attendance); // ajout en fin de tableau (file)
course.unshift('2022-06-20T09:30:00') // ajout en début de tableau (pile)
console.log(course);

/**
 * Objets globaux : String, Number, Boolean, Array, Date, Regexp, Math, Function,..., Object
 */

// String
let p1 = 'Margaux';
let p2 = new String('Margaux');
console.log(p1 == p2); // compare les valeurs
console.log(p1 === p2); // compare strictement les valeurs et les types
console.log(typeof p1);
console.log(typeof p2);

// Boolean
let b1 = false; // false
let b2 = new Boolean(false); // false
let b3 = ''; // false
let b4 = 0; // false
let b5 = null; // false
let b6 = 'Loïc'; // true

// Math (non instanciable)
console.log(Math.PI);
console.log(Math.round(Math.PI)); // entier le plus proche
console.log(Math.ceil(5.00000001)); // 6
console.log(Math.floor(5.9999999991)); // 5
console.log(Math.PI.toFixed(5));
console.log(Math.random());
console.log(Math.max(2000, 100, 30, 0, -20));

let numbers = [2000, 100, 30, 0, -20];
console.log(Math.min.apply(null, numbers));

// Date : timestamp (à partir du 01/01/1970)
console.log(new Date());
console.log(new Date(-123456789));
console.log(new Date(123456789));
console.log(new Date(1998, 6, 12, 22, 45, 01)); // 0=Janvier, 1=Février,..., 11=Décembre
console.log(new Date('7/2/2000 22:45:02')); // 2 juillet 2000
console.log(new Date('December 18, 2022 20:45:04 GMT+0200'));
console.log(new Date('2018-07-15T12:45:03.123')); // universel car ISO

/**
 * Structures de contrôle
 */

// if
// si nb de participants est > 10 alors plus de stagiaires
let part = 9;
if (part < 4) {
    console.info('Il reste encore beaucoup de places.');
} else if (part < 7) {
    console.info('Il reste encore quelques places.');
} else if (part < 10) {
    console.info('Il ne reste plus beaucoup de places.');
} else {
    console.warn('Attention le nb de participants est dépassé.');
}

// switch
// conversion du if en switch


