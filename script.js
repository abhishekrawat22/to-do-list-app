let addBtn = document.querySelector(".add-btn");
let newTodo = document.querySelector("#new-todo");
let inputWrapper = document.querySelector('.to-do__input-wrapper');
let listWrapper = document.querySelector(".to-do__lists");
let deleteBtn = document.querySelectorAll('.delete-btn');
let i = 1;

addBtn.addEventListener('click', () => {
    if (newTodo.value != '') {
        inputWrapper.classList.remove('error');

        let listItem = document.createElement('div');
        listItem.classList.add('to-do__list');
        listWrapper.appendChild(listItem);

        let listInputWrap = document.createElement('div');
        listInputWrap.classList.add('list');
        listItem.appendChild(listInputWrap);

        // let inputField = document.createElement('input');
        // inputField.setAttribute('type', 'text');
        // inputField.setAttribute('name', 'list');
        // inputField.setAttribute('id', `input${i}`);
        // listInputWrap.appendChild(inputField);
        // i++;

        let inputField = document.createElement('input');
        inputField.setAttribute('type', 'checkbox');
        inputField.setAttribute('name', 'list');
        inputField.setAttribute('id', `input${i}`);
        listInputWrap.appendChild(inputField);

        let labelEle = document.createElement('label');
        // labelEle.setAttribute('for', `input${i}`);
        labelEle.textContent = newTodo.value;
        listInputWrap.appendChild(labelEle);
        inputField.value = labelEle.textContent;
        i++;

        let editEle = document.createElement('button');
        editEle.classList.add('edit-btn');
        editEle.textContent = 'Edit';
        listItem.appendChild(editEle);
        editEle.addEventListener('click', () => {
            listInputWrap.classList.toggle('editing');
            listInputWrap.classList.contains('editing') ? (editEle.textContent = "Update", labelEle.setAttribute('contenteditable', 'true'), labelEle.focus()) : (editEle.textContent = "Edit", labelEle.setAttribute('contenteditable', 'false'));
        })

        let deleteEle = document.createElement('button');
        deleteEle.classList.add('delete-btn');
        deleteEle.textContent = 'Delete';
        listItem.appendChild(deleteEle);
        deleteEle.addEventListener('click', () => {
            deleteEle.parentNode.remove();
        })

        newTodo.value = "";
    }
    else {
        inputWrapper.classList.add('error');
    }
})
