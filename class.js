var item=document.getElementsByClassName('title');
item[0].style.fontWeight='bold';
item[0].style.color='green';
var item2=document.getElementsByClassName('list-group-item');
item2[2].style.backgroundColor='green';
for(let i=0;i<item2.length;i++){
    item2[i].style.fontWeight='bold';
    item2[i].style.color='yellow';
}