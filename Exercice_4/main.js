let mdp = document.querySelector('#password')
let cmdp = document.querySelector('#confirmPassword')
let verif = document.querySelector('#verif')

verif.addEventListener('click', ()=>{
    if(mdp.value === cmdp.value){
        mdp.classList.add('green')
        cmdp.classList.add('green')
    }else {
        mdp.classList.add('red')
        cmdp.classList.add('red')
    }
});