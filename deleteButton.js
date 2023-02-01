//Add delete button
var deleteButton=document.createElement('button')
var li=document.getElementsByClassName('list-group-item');
deleteButton.className='btn btn-danger btn-sm float-right delete';
deleteButton.appendChild(document.createTextNode('x'));
li[0].appendChild(deleteButton);
//Add edit button
var editButton=document.createElement('button');
editButton.className='btn';
var text=document.createTextNode('edit');
editButton.appendChild(text);
deleteButton.appendChild(editButton);


//remove li tag by delete button
var form =document.getElementById('addForm');
var item=document.getElementById('items');


//Form submit event
form.addEventListener('submit', addItem);
//delete event
item.addEventListener('click', removeItem);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem=document.getElementById('item').value;

    // create new element
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    //create delete btn element
    var deletebtn=document.createElement('button');
    //add class name to del btn
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    //append text node
    deletebtn.appendChild(document.createTextNode('x'));
    //append btn to li
    li.appendChild(deletebtn);
    //append li to list
    item.appendChild(li);
    
}
//remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure?')){
        var li=e.target.parentElement;
        item.removeChild(li);
    }
  }  
}
