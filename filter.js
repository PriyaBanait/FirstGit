//remove li tag by delete button
var form =document.getElementById('addForm');
var item=document.getElementById('items');
var filter=document.getElementById('filter');



//Form submit event
form.addEventListener('submit', addItem);
//delete event
item.addEventListener('click', removeItem);
//filter event
filter.addEventListener('keyup',filterItems);

//add item
function addItem(e){
    e.preventDefault();

    //get input value
    var newItem=document.getElementById('item').value;
    var description=document.getElementById('description').value;

    // create new element
    var li=document.createElement('li');

    //add class
    li.className='list-group-item';
    var node=document.createTextNode(" "+description);

    //add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(node);
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

//filter items
function filterItems(e){
    //convert text to lowercase
    var text=e.target.value.toLowerCase();
    var items=item.getElementsByTagName('li');
    //convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
       var child=item.childNodes[1].textContent;
        
        if(itemName.toLowerCase().indexOf(text)!=-1||child.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    
    })
}
