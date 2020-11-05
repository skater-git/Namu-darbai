var tr;
var tekstas;
var indexId;
var inputas = document.getElementById('task');
let body = document.querySelector('body');
let editIndex;
let kitasModalas = document.querySelector('.kitasModalas')
let slots = document.getElementById('slots');
let task = document.getElementById('slot_todo');
let button = document.getElementById('new_task');
let innerSlots = Array.from(document.querySelectorAll('.inner_slot'));
let innerSlot = document.querySelector('.inner_slot');
let garsas = new Audio('sounds/sound2.mp3');
let randomId = Math.random() * 1000;
slots.addEventListener('dragstart', function (e) {
    if (e.target.classList.contains('task')) {
        e.dataTransfer.setData('elementoId', e.target.id);
    }
});

innerSlots.forEach((item) => {
  
    item.addEventListener('dragover', function (e) {
        if (!e.target.classList.contains('inner_slot')) {
            return;
        }
        e.preventDefault();
    });
    item.addEventListener('drop', function (e) {
        var elementoId = e.dataTransfer.getData('elementoId');
        var elementas = document.getElementById(elementoId);
 
        e.target.appendChild(elementas);
        garsas.play();
        e.preventDefault();
    });
});
button.addEventListener('click', function(){
    var newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = 'Nauja uzduotis';
    newTask.setAttribute('draggable', true);
    newTask.setAttribute('id', Math.random() * 100);
    var redaguotiButton = document.createElement('button');
    redaguotiButton.classList.add('redaguoti');
    redaguotiButton.innerHTML = 'redaguoti';
    var trintiButton = document.createElement('button');
    trintiButton.classList.add('trinti');
    trintiButton.innerHTML = 'X';
    newTask.appendChild(trintiButton);
    newTask.appendChild(redaguotiButton);
    task.prepend(newTask);
})
body.addEventListener('click', function(e){
    if (e.target.classList.contains('trinti')){
        tr = e.target.parentElement;
        tr.remove();
    }
})

body.addEventListener('click' , function(event) {
    if (event.target.classList.contains('redaguoti')) {
    kitasModalas.classList.add('modalas-aktyvus');
    indexId = event.target.parentElement.id;
     tr = event.target.parentElement;
    }
});
body.addEventListener('click' , function(e) {
    if (e.target.id == 'siusti') {
        tr.remove();
        tr = inputas.value;
    newTask = document.createElement('div');
    newTask.classList.add('task');
    newTask.innerHTML = (tr);
    newTask.setAttribute('draggable', true);
newTask.setAttribute('id', Math.random() * 100);
var redaguotiButton = document.createElement('button');
redaguotiButton.classList.add('redaguoti');
redaguotiButton.innerHTML = 'redaguoti';
var trintiButton = document.createElement('button');
trintiButton.classList.add('trinti');
trintiButton.innerHTML = 'X';
newTask.appendChild(trintiButton);
newTask.appendChild(redaguotiButton);
task.prepend(newTask);
    kitasModalas.classList.remove('modalas-aktyvus');
    }
});
