// this is a logic of  run the slider

let indexing =1 ;

runslider(indexing);

function pushslider(n){
    runslider(indexing+=n)
}

function runslider(n){
    let i;
    let slides = document.getElementsByClassName("slides");
    
    // run slider form right to left
    if(n>slides.length){
        indexing=1;
       

    }
    // run slider from left to right
    if(n<1){
        indexing=slides.length;
    }
    // fun slider using for loop

    for (i=0; i<slides.length;i++){
        // when for is runing so all the image is hide and showing when click the btns
        slides[i].style.display="none";
                
    }

    // this is a 1st slider image to be show on web
    // so give a css display block property
    slides[indexing-1].style.display="block";

    
}