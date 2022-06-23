/**
 * Objet littéral
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
actress.sayHello = function(){
    if (this.french){
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