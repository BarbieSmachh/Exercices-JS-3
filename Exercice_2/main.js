let afficher = document.querySelector('#href1')
let masquer = document.querySelector('#href2')
let texte = document.querySelector('#text')

masquer.addEventListener("click" ,function(){
    texte.style.display = "none"
});

afficher.addEventListener("click" ,function(){
    texte.style.display = "block"
});