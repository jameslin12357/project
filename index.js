var buttonIntro = document.getElementById('buttonIntro');
var parent = document.getElementById('parent');
var child1 = document.getElementById('child1');
var child2 = document.getElementById('child2');

var child3 = document.getElementById('child3');
var buttonOptions = document.getElementsByClassName('buttonOptions');
buttonIntro.addEventListener('click',function(e){
    child1.classList.add('hidden');
    child2.classList.remove('hidden');
})

for (let i = 0; i < buttonOptions.length; i++){
    buttonOptions[i].addEventListener('drag',function(e){
        e.target.classList.add('active');
    });
    buttonOptions[i].addEventListener('dragend',function(e){
        e.target.classList.remove('active');
    });
}
