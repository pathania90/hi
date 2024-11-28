document.getElementById('btn').onclick = changeColor;   
let body = document.getElementsByTagName('body')
function changeColor() {
    document.body.style.color = "purple";
    return false;
} 