var k=0;
var timer;

function startslideshow(index) {
k=index;
Slideshow();
document.getElementById('imagini').style.display = 'none';
document.getElementById('slideshow').style.display = 'block';
starttimer();
}

function Slideshow(){

var i;
var slides = document.getElementsByClassName('slide');


for (i = 0; i < slides.length; i++){
slides[i].style.display = 'none';
}


slides[k].style.display = 'block';
k++;


if(k>=slides.length){
k=0;
}
}

function starttimer(){
timer = setInterval(Slideshow, 3000);
}
