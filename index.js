var buttonIntro = document.getElementById('buttonIntro');
var parent = document.getElementById('parent');
var child1 = document.getElementById('child1');
var child2 = document.getElementById('child2');
var child3 = document.getElementById('child3');
var buttonSubmit = document.getElementById('buttonSubmit');

buttonIntro.addEventListener('click',function(e){
    child1.classList.add('hidden');
    child2.classList.remove('hidden');
});

buttonSubmit.addEventListener('click',function(e){
    child2.classList.add('hidden');
    child3.classList.remove('hidden');
});

Sortable.create(list, {
    animation: 200,
    ghostClass: "sortable"
});
