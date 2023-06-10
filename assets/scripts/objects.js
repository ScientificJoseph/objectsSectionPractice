const movieList = document.getElementById('movie-list');
movieList.style['background-color'] = 'red';
movieList.style.display = 'block'

const userKeyName = 'level';
// const userKeyName = prompt('Enter the keyname')

let person = {
    'first name': 'Joseph',
    age: 50,
    hobbies: ['Music', 'Coding'],
    [userKeyName]: 5,
    greet: function() {
        alert('Hey you!')
    },
    1.5: 'hello'
};

// person.age = 51;
delete person.age;
// person.age = undefined;
// person.age = null
person.isAdmin = true;

const keyName = 'first name'
console.log(`${keyName}: ${person[keyName]}`)

// console.log(person['first name']);
console.log(person[keyName]) //with quotes means you looking for a property in the objext with keyName as the key/(name). witout means ur looking for the value of the the const keyName to be a property in the person object. the above notation would yield that properties value. 
console.log(person[1.5]);
console.log(person)
console.log(person['userKeyName'])

