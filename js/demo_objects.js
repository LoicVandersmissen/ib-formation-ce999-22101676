/**
 * Objet littéral : JSON (JavaScript Object Notation)
 */

// Objet vide
let actress = {};

// Ajout de propriétés
actress.fname = 'Angelina';
actress.size = 1.69;
actress.french = false;
actress.kids = [
    { 'fname': 'Shiloh', 'age': 15, 'gender': 'M' },
    { 'fname': 'Vivienne', 'age': 13, 'gender': 'F' },
    { 'fname': 'Zahara', 'age': 16, 'gender': 'F', 'hobbies': ['Tennis', 'Harpe'] }
];
actress.husband = {
    'fname': 'Brad',
    'dob': '1963-12-18',
    'hair': 'Blond',
    'jobs': ['acteur', 'producteur', 'vigneron']
};

// Ajout d'une méthode
actress.sayHello = function () {
    if (this.french) {
        console.log('Salut');
    } else {
        console.log('Hello')
    }
};

// Tests
console.log(actress);
console.log(actress.kids[1].fname);
console.log(JSON.stringify(actress));
actress.sayHello();

/**
 * Objet avec constructeur : class (sauf pour IE)
 * @param string prenom prénom du contact
 * @param string ddn date de naissance du contact (Ex.: 1998-07-12)
 * @param number taille taille du contact
 */

class Contact {
    // Attributs publics
    fname = '';
    dob = '';

    // Attribut privé
    #size = 0;

    constructor(prenom, ddn, taille = 1.74) {
        this.fname = prenom;
        this.dob = ddn;

        // Attribut privé accessible uniquement par getter/setter
        this.#size = this.setSize(taille);
    }

    // getter (ou accesseur)
    getSize = function () {
        return this.#size;
    };

    // setter (ou mutateur)
    setSize = function (newSize) {
        if (isNaN(newSize)) {
            throw 'La taille doit être un nombre.';
        }
        if (newSize < .5 || newSize > 2.5) {
            throw 'La taille doit être comprise entre 50cm et 2m50.';
        }
        this.#size = newSize;
    };
}

// Check
let friend1 = new Contact('Rudy', '1990-07-06', 1.85);
friend1.fname = 'Loïc';
friend1.size = 1.85;
console.log(friend1);

let friend2 = new Contact('Hélène', '1999-02-08', 2.2);
console.log(friend2);

let friend3 = new Contact('Thomas', '1998-07-12');
friend3.setSize(1.75);
console.log(friend3.getSize());

/**
 * Objet avec constructeur : Function
 * @param string prenom prénom de la personne à créer
 * @param string ddn date de naissance de la personne à créer (Ex.: 1998-07-12)
 */

function Friend(prenom, ddn) {
    // Attributs publics
    this.fname = prenom;
    this.dob = ddn;

    // Attribut privé accessible uniquement via getters/setters (encapsulation)
    let size = new Number();

    // Getter (ou Accesseur)
    this.getSize = function () {
        return this.size;
    };

    // Setter (ou Mutateur)
    this.setSize = function (newSize) {
        if (isNaN(newSize)) {
            throw 'La taille doit être un nombre.';
        } else if (newSize < .5 || newSize > 2.5) {
            throw 'La taille doit être comprise entre 50cm et 2m50';
        } else {
            this.size = newSize;
        }
    };
}

// Tests
let friend4 = new Friend('Josias', '2013-12-11');
friend4.fname = 'Timothy';
console.log(friend4);

let friend5 = new Friend('Yves', '1996-08-04');
// friend5.setSize('coucou');
friend5.setSize(2.49);
console.log(friend5);