// pegando o ID img lá da div class carrossel do index 
const imgs = document.getElementById("img");

// querySelectorAll para pegar elemento de imagem(img) dentro do ID "#img"
const img = document.querySelectorAll("#img img");

let idx = 0;

function carrossel(){
    idx++;
    if(idx>img.length - 1){
        idx = 0;
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`; 
}

setInterval(carrossel, 3000);
