// 1 way

/* const titleField = document.querySelector('#title');
const btn = document.querySelector('#btn');


btn.addEventListener('click', function () {
      console.log(titleField.value);
}); */


// 2nd way FormData

const todos = [{
    title: 'Meeting',
    description: 'There will be a meeting at 6pm today',
    createdAt: new Date().toString(),
    status: 'active'
}];
console.log(todos);

const todoForm = document.querySelector('#todoForm');
const btn = document.querySelector('#btn');


btn.addEventListener('click', function() {
    const form = new FormData(todoForm);
       
    for(var key of form.keys()) {
        console.log(form.get(key));
    }

});

/* function makeItem(title, description, status) {

    const outerRow = document.createElement('div');
    outerRow.classList.add('row', 'jumbotron', 'section');


}; */