let innerText = document.querySelector('#innerText');
let form = document.querySelector('form');
let items = document.querySelector('#items');
let completeItems = document.querySelector('#complete ul');

const createTask = function(inputText){
    let listItem = document.createElement('li');
    listItem.className = 'flex gap-2';
    let input = document.createElement('input');
    input.type='checkbox';
    let label = document.createElement('label');
    label.innerText = inputText;

    listItem.appendChild(input);
    listItem.appendChild(label);

    return listItem;
}

const addTask = function(event){
    event.preventDefault();
    if(innerText.value==''){
        alert('please complete Input then Submit');
    }else{
        let listItem =  createTask(innerText.value);
        items.appendChild(listItem);
        innerText.value = '';
    
        bindIncompleteTask(listItem,completeTask);
    }

}

const completeTask = function(){
    let listItem = this.parentNode;
    listItem.className = 'py-2 flex justify-between';
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete text-right text-white bg-red-500 px-2 rounded border border-red-700';
    deleteBtn.innerText='Delete';
    listItem.appendChild(deleteBtn);

    let checkbox = listItem.querySelector('input[type="checkbox"]');
    checkbox.remove();
    completeItems.appendChild(listItem);
    console.log(deleteBtn);
    // bind completeTask
    bindCompleteTask(listItem,delteItem);
}

const delteItem = function(){
    let itemCatch = this.parentNode;
    itemCatch.remove();
}

const bindIncompleteTask = function(selectedItem,checkBoxClick){
    let checkbox = selectedItem.querySelector('input[type="checkbox"]');
    checkbox.onchange = checkBoxClick;
}

const bindCompleteTask = function(selectedItem,deleteBtnClick){
    let checkbox = selectedItem.querySelector('.delete');
    checkbox.onclick = deleteBtnClick;
}

for(let i = 0; i<items.children.length; i++){
    bindIncompleteTask(items.children[i],completeTask);
}

for(let i = 0; i<completeItems.children.length; i++){
    bindCompleteTask(completeItems.children[i],delteItem);
}

form.addEventListener('submit',addTask);