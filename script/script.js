const carousel = document.getElementById("carousel");

const images = ["horse", "rio-grande", "rio-grande2", "sunset"];

function changeImage(){
    for (let i = 0; i < images.length; i++)
    {
        carousel.innerHTML = `<img src="images/${images[1]}.jpg" alt=""></img>`;
    }
}

document.body.onload = changeImage();