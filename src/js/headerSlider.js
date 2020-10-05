window.addEventListener('DOMContentLoaded', () => {
    const sliderBlocks = document.getElementsByClassName('header_slider-wrapper');

    let currentSlide = 0;
    let slideInterval = setInterval( nextSlide , 4000);
    const lengthBlocks = sliderBlocks.length;



    function nextSlide() {
        //console.log(currentSlide);

        sliderBlocks[currentSlide].setAttribute('style', 'opacity: 0; z-index: -2; width: 100%; height: 100%');

        currentSlide = currentSlide+1;
        if ( currentSlide > lengthBlocks-1 ) {
            currentSlide = 0;
        }

        sliderBlocks[currentSlide].setAttribute('style', 'opacity: 1; z-index: -1; width: 106%; height: 106%');



        /*console.log(lengthBlocks);
        //console.log(currentSlide);

        if ( currentSlide > lengthBlocks ) {
            currentSlide = 0;
        }
        //sliderBlocks[currentSlide].classList.remove('header_slider-show');
        sliderBlocks[currentSlide].setAttribute('style', 'display: block;');
        //sliderBlocks[currentSlide].classList.add('header_slider-show');
        currentSlide = currentSlide+1;*/
    }
});