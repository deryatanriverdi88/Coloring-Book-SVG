let drawing = document.querySelector('#drawing');
let selectColor = document.querySelector('#select-color');
let button = document.querySelector('button');
let color = selectColor.value

selectColor.addEventListener('change', function(event){
    color = event.target.value
})

drawing.addEventListener('click', function(event){
    event.target.style.fill = color;
})