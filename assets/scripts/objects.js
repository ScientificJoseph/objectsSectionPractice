const movieList = document.getElementById('movie-list');
movieList.style['background-color'] = 'red';
movieList.style.display = 'block'
let person = {
    'first name': 'Joseph',
    age: 50,
    hobbies: ['Music', 'Coding'],
    greet: function() {
        alert('Hey you!')
    }
};

// person.age = 51;
delete person.age;
// person.age = undefined;
// person.age = null
person.isAdmin = true;


console.log(person['first name']);

