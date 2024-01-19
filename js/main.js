var imgList = Array.from(document.getElementsByClassName("imgItem"));
var containerLight = document.querySelector("#container-light");
var card = document.querySelector("#card");
var close = document.querySelector("#close");
var prev = document.querySelector("#prev");
var next = document.querySelector("#next");
var currentIndex ;

for(var i=0; i<imgList.length ; i++){
    imgList[i].addEventListener("click" , function(e){

        currentIndex = imgList.indexOf(e.target);
        console.log(currentIndex);
        var imgSrc = e.target.getAttribute('src');
        containerLight.classList.replace('d-none', 'd-flex');
        card.style.backgroundImage = `url(${imgSrc})`;
       
    })
}
// close.addEventListener('click' , function(){
//     containerLight.classList.replace('d-flex' , 'd-none');
// })

// next.addEventListener('click' , function(){
//     currentIndex++;
//     var imgSrc = imgList[currentIndex].getAttribute('src');
//     console.log(imgSrc)
//     card.style.backgroundImage = `url(${imgSrc})`;
// });

// prev.addEventListener('click' , function(){
//     currentIndex--;
//     var imgSrc = imgList[currentIndex].getAttribute('src');
//     console.log(imgSrc)
//     card.style.backgroundImage = `url(${imgSrc})`;
// });

function slide(i){
    currentIndex =currentIndex + i;
    if(currentIndex == -1){
        currentIndex =imgList.length -1;
    }
    if(currentIndex == imgList.length){
        currentIndex =0;
    }
    var imgSrc = imgList[currentIndex].getAttribute('src');
    card.style.backgroundImage =`url(${imgSrc})`;
}
function closeSlide(){
    containerLight.classList.replace('d-flex' , 'd-none');
 }
prev.addEventListener('click' , function(){
  slide(-1)
});
next.addEventListener('click' , function(){
    slide(+1)
  });
close.addEventListener('click' , closeSlide);

document.addEventListener('keydown' , function(e){
    if(e.key == "ArrowRight"){
        slide(+1)
    }
    if(e.key == "ArrowLeft"){
        slide(+1)
    }
    if(e.key == "Escape"){
        closeSlide()
    }
  })