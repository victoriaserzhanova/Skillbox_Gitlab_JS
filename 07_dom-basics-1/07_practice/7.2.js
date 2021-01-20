let body = document.body;
body.children[0].style.color = 'red';

body.children[1].innerHTML = 'change color';

let h1 = body.children[0];
h1.parentNode.style.backgroundColor = 'yellow';
