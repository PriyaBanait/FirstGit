//Traversing the DOM
var list=document.querySelector('#items');
//parentNode
console.log(list.parentNode);
list.parentNode.style.backgroundColor='grey';
console.log(list.parentNode.parentNode.parentNode);
//parentElement
console.log(list.parentElement);
list.parentElement.style.backgroundColor='grey';
console.log(list.parentElement.parentElement.parentElement);

//childNodes
console.log(list.childNodes);

console.log(list.children);
console.log(list.children[1]);
list.children[1].style.backgroundColor='yellow';

//FirstChild
console.log(list.firstChild);
//firstElementChild
console.log(list.firstElementChild);
list.firstElementChild.textContent='Hello 1';

//LastChild
console.log(list.lastChild);
//lastElementChild
console.log(list.lastElementChild);
list.lastElementChild.textContent='Hello 4';

//nextSibling
console.log(list.nextSibling);
//nextElementSibling
console.log(list.nextElementSibling);

//previouSibling
console.log(list.previousSibling);
//previousElementSibling
console.log(list.previousElementSibling);
list.previousElementSibling.style.color='green';

//createElement
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello1';
//add attribute
newDiv.setAttribute('title','hello Div');
console.log(newDiv);

//add HEllo word before Item Lister
//create a text node
var newDivText=document.createTextNode('Hello world');
newDiv.appendChild(newDivText);
var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize='30px';
container.insertBefore(newDiv, h1);

//add HEllo word before Item 1
var parent=document.getElementById('items');
var li=document.createElement('li');
var newLiText=document.createTextNode('Hello world');
li.appendChild(newLiText)
console.log(li);
parent.appendChild(li);
parent.insertBefore(li, parent.getElementsByTagName('li')[0]);