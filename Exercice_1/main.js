let bordurerouge = document.querySelector('#image1')
console.log(bordurerouge)
bordurerouge.addEventListener("mouseover", function(){
    bordurerouge.style.border = "3px solid red";
});

bordurerouge.addEventListener("mouseout", function() {
    bordurerouge.style.border = "none";
  });