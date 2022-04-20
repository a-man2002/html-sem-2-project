let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}





function myFunction(){
    
}

function package(val){
    let message = ''
   if(val==1){
       message = '<h3>Silver Package</h3>'+'<div> Months: 1 </div>'+'<div> Price: 3000 </div>'+'<div> Description: In this package you will get 1 month membership at 3000 rupees </div>';
       document.getElementById('body-bar').innerHTML=message
   }
   else if(val==2){
    message = '<h3>Platinium Package</h3>'+'<div> Months: 6 </div>'+'<div> Price: 6000 </div>'+'<div> Description: In this package you will get 6 months membership at 4000 rupees </div>'
    document.getElementById('body-bar').innerHTML=message
   }
   else if(val==3){
    message = '<h3>Diamond Package</h3>'+'<div> Months: 12 </div>'+'<div> Price: 8000 </div>'+'<div> Description: In this package you will get 12 months membership at 8000 rupees </div>'
    document.getElementById('body-bar').innerHTML=message
   }
   else if(val==4){
    message = '<h3>Gold Package</h3>'+'<div> Months: 24 Months </div>'+'<div> Price: 12000 </div>'+'<div> Description: In this package you will get 24 months membership at 12000 rupees </div>'
    document.getElementById('body-bar').innerHTML=message

   }

   
}


function galleryImages(){
    let images = [
        'https://thumbs.dreamstime.com/b/muscular-athletic-bodybuilder-fitness-model-posing-exercis-weights-exercises-gym-64856941.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTgr2rKcz2CpBObFDEjghsUd2upixjol-vbOdb-UXp3nx_1phTTmFgwJAd_cpAhFxERG4&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUxiIwYkGIQXsJOxAYt3Ji6EbTNErpVjsBA1f8BXntHoIx0FSKJesBgYZP7yT0Ln7TwTk&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIJjS-2y12_PrC9nvkjmtjSwxjDpiIvniHe49FVh3IK-SOwz0XqigMIOjSsLrtI0kCaDs&usqp=CAU',
        'https://samuelallenscott.net/wp-content/uploads/2020/04/1586654275_maxresdefault.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqTgROoEiw1X0Ni07fnlyawszMhfcTgGLD2Q&usqp=CAU'
    ];

    images.forEach((ele)=>{
        document.getElementById('g-images').innerHTML +=`<span style='margin:5px; padding;5px'><img width='100px' height='100px' src=${ele}/></span>`;
    })
}

galleryImages();
