let bar=document.getElementById('bar')
let items=document.querySelector('.items1')
function colors(color){
    document.body.style.background=color
}
bar.onclick=function(){
    if(items.style.display === 'flex'){
        items.style.display='none'
    }else{
        items.style.display="flex"
    }
}