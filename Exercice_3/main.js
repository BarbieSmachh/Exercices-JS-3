let vert = document.querySelector('.green')
let rouge = document.querySelector(".red")
let bleu = document.querySelector(".blue")
let texte = document.querySelector("#text")
vert.addEventListener("click", ()=>{
    texte.classList.toggle('green2');
});
rouge.addEventListener("click", ()=>{
    texte.classList.toggle('red2');
});
bleu.addEventListener("click", ()=>{
    texte.classList.toggle('blue2');
});
