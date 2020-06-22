let SliderImg = document.getElementById("slider-img") ;
// SliderImg.src = "img/slider-img1.jpg";
let n = 0;
let listImg = ["img/slider-img.jpg", "img/slider-img1.jpg", "img/slider-img2.jpg", "img/slider-img3.jpg", "img/slider-img4.jpg", "img/slider-img5.jpg"]

let slider = document.querySelector(".slider");

function AnimeSlider(){
    n++;
    if(n==listImg.length) n=0;
    SliderImg.src = listImg[n];
}

slider.addEventListener("click",(event)=>{

    let target = event.target;

    if (target.matches(".ss-img1")) {
        n--;
        if (n==-1) {
            n=listImg.length-1;
        }
        
        SliderImg.src = listImg[n];
    }

    if (target.matches(".ss-img2")) {
        n++;
        if (n==listImg.length) {
            n=0;
        }
        
        SliderImg.src = listImg[n];
    }
    // console.log(target);
});

slider.addEventListener('mouseover',(event)=>{ clearInterval(idAnime);});
    
slider.addEventListener('mouseout',(event)=>{idAnime = setInterval(AnimeSlider,3000);});

let idAnime = setInterval(AnimeSlider,3000);