//function addingEventListener() {}

const input = document.getElementById('button')

clickMessage = function() { 
    alert('I was clicked') 
};


function addingEventListener() {
    input.addEventListener('click', clickMessage);
};