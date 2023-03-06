
var header=document.getElementById('main-header');
header.style.borderBottom='solid 3px #000';
var item=document.getElementsByClassName('title');
item[0].style.fontWeight='bold';
item[0].style.color='green';
var item2=document.getElementsByClassName('list-group-item');
item2[2].style.backgroundColor='green';
for(let i=0;i<item2.length;i++){
    item2[i].style.fontWeight='bold';
    item2[i].style.color='yellow';
}
var item3=document.getElementsByClassName('group-item');
item3[0].style.fontWeight='bold';
item3[0].style.color='yellow';

var item4=document.getElementsByTagName('li');
item4[4].style.backgroundColor='black'