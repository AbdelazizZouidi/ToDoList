const addButton = document.querySelector('.addButton');
var  input = document.querySelector('.input');
const container = document.querySelector('.container');

class item{
    constructor(itemName){
        //create the item div
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('item_input');
        input.type= "text";

        let itemBoxe = document.createElement('div');
        itemBoxe.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT.";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBoxe);

        itemBoxe.appendChild(input);
        itemBoxe.appendChild(editButton);
        itemBoxe.appendChild(removeButton);

        editButton.addEventListener('click',() => this.edit(input));

        removeButton.addEventListener('click', () => this.remove(itemBoxe));

        

    }
    edit(input){
        input.disabled =! input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}
function check(){
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}
addButton.addEventListener('click',check);
window.addEventListener('keydown', (e) =>{
    if(e.which == 13){
    check();
    }
})