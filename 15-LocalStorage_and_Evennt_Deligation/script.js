const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = [];

function addItem(e){
    e.preventDefault();
    const item = {
        text: 'Item Name',
        done: false
    }
}

addItems.addEventListener('submit', addItem);