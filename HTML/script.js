// Array de URLs de imágenes
var imageUrls = [
    "../IMAGES/image1.jpg",
    "../IMAGES/image2.jpg",
    "../IMAGES/image3.jpg",
    "../IMAGES/image4.jpg",
    "../IMAGES/image5.jpg",

];

// Obtener el contenedor donde se agregarán las imágenes
var imageListContainer = document.getElementById("imageList");

// Recorrer el array de URLs y crear elementos <img>
imageUrls.forEach(function(url) {
    var img = document.createElement("img");
    img.src = url;
    imageListContainer.appendChild(img);
});


var scrollAmount = 20;
var scrollInterval;

function startScrolling(direction) {
    scrollInterval = setInterval(function() {
        imageListContainer.scrollBy({
            left: direction * scrollAmount,
            behavior: 'smooth'
        });
    }, 10); 
}


function stopScrolling() {
    clearInterval(scrollInterval);
}

document.getElementById("scrollLeft").addEventListener("mouseover", function() {
    startScrolling(-1); 
});

document.getElementById("scrollRight").addEventListener("mouseover", function() {
    startScrolling(1); 
});

document.getElementById("scrollLeft").addEventListener("mouseout", stopScrolling);
document.getElementById("scrollRight").addEventListener("mouseout", stopScrolling);



var imageList = document.querySelectorAll('.imageList img');
var mainImage = document.querySelector('.item img');

imageList.forEach(function(img) {
    img.addEventListener('click', function() {
        var imageUrl = img.src;    
        mainImage.src = imageUrl;
    });
});


const addButton = document.getElementById("addButton");
const lessButton = document.getElementById("lessButton");
const number = document.getElementById("number");

let count = 0;

function updateNumberDisplay() {
    number.textContent = count;
}

addButton.addEventListener('click', function() {
    if(count > 0)
        count--;
    updateNumberDisplay();
});

lessButton.addEventListener('click', function() {
    count++;
    updateNumberDisplay();
});

const cartButton = document.getElementById("cartButton");

cartButton.addEventListener("click", function() {
    if(count > 0)
        restaurarContenido();
    
});



var modal = document.getElementById("productModal");
var btn = document.getElementById("cartModal");
var btnClose = document.getElementById("closebtn")

btn.onclick = function() {
    modal.style.display = "block";
}

btnClose.onclick = function() {
    cambiarContenido();
    modal.style.display = "none";

}


function cambiarContenido() {
    var productInfo = document.getElementById('productoInfo');

    var nuevoHTML = `
        <div style="text-align: center; margin-top: 0px;">
            <p style="font-family: Verdana; font-size: 12px;">No hay productos</p>
           
        </div>
    `;

    productInfo.innerHTML = nuevoHTML;
}

function restaurarContenido() {
    var productInfo = document.getElementById('productoInfo');
    
    var resultado = count * 150;

    var contenidoOriginal = `
        <div style="display: flex; gap: 12px;">
            <img id="product-image" src="../IMAGES/image1.jpg" height="80">
            <div style="display: block; margin: 5px 0px 0px 0px">
                <p id="product-name" style="text-align: left; font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14px; color: red; font-weight: bold; margin: 5px 0px 0px 0px;">Dell XPS 13 </p>
                <p id="product-description" style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 12px; text-align: left; margin: 5px 0px 0px 0px">
                ${count} x 150 
                </p>
                <p id="product-price" style="font-family: Verdana, Geneva, Tahoma, sans-serif; font-size: 14px; color: gray; font-weight: bold; text-align: left; margin: 5px 0px 0px 0px">
                ${resultado} $ </p>
            </div>
        </div>
    `;

    productInfo.innerHTML = contenidoOriginal;
}