let vert = document.querySelector('.green')
let rouge = document.querySelector(".red")
let bleu = document.querySelector(".blue")
let texte = document.querySelector("#text")
vert.addEventListener("click", ()=>{
    texte.classList.add('green2')
    texte.classList.remove('red2', 'blue2');  
});
rouge.addEventListener("click", ()=>{
    texte.classList.add('red2')
    texte.classList.remove('green2', 'blue2');
});
bleu.addEventListener("click", ()=>{
    texte.classList.add('blue2')
    texte.classList.remove('red2', 'green2');
});
