'use strict'
const form = document.querySelector('.form');
const ulParentWrapper = document.querySelector('.js--todos-wrapper');
const formInputArr = JSON.parse(localStorage.getItem('todo-list')) || [];
console.log(formInputArr);

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formInput = document.querySelector('.form__input').value;

    if (formInput.trim() !== '') {
        const appendIt = document.createElement('li');
        appendIt.innerHTML = '<input type="checkbox">' + formInput + ' <button class="todo-item__delete">Видалити</button>';
        appendIt.classList.add('todo-item');
        ulParentWrapper.append(appendIt);
        formInputArr.push(formInput);
        localStorage.setItem('todo-list', JSON.stringify(formInputArr));
    }        
});

ulParentWrapper.onclick = (event) => {
    if( event.target.classList.contains('todo-item__delete')) {
        event.target.parentElement.remove();
    }
}

ulParentWrapper.onchange = (event) => {
    if (event.target.checked) {
        event.target.parentElement.classList.add('todo-item--checked')
        localStorage.setItem('todo-list', JSON.stringify(formInputArr));
    } else {
        event.target.parentElement.classList.remove('todo-item--checked')
    } 
}

if (formInputArr.length > 0 ) {
    for ( let i = 0; i < formInputArr.length; i++) {
        const appendItem = document.createElement('li');
     appendItem.innerHTML = '<input type="checkbox">' + formInputArr[i] + ' <button class="todo-item__delete">Видалити</button>';
     appendItem.classList.add('todo-item');
         ulParentWrapper.append(appendItem)
    }
 }
