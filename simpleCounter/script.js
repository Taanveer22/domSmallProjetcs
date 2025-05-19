console.log('connected');

let total = 0;
let count = document.getElementById('count');

// plus btn clicked
function plusBtn(){
    console.log('plus btn clicked');
    total = total + 1;
    count.innerText = total;
}


// minus btn clicked
document.getElementById('minus-btn').addEventListener('click', function(event){
    console.log(event);
    console.log(event.target);
    total = total - 1;
    count.innerText = total;
})
