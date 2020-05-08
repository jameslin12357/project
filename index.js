var buttonIntro = document.getElementById('buttonIntro');
var parent = document.getElementById('parent');
var child1 = document.getElementById('child1');
var child2 = document.getElementById('child2');

var child3 = document.getElementById('child3');

buttonIntro.addEventListener('click',function(e){
    child1.classList.add('hidden');
    child2.classList.remove('hidden');
})