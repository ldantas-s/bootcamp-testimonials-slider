const el = {
  btnPrev: document.querySelector('.testimonial-slider-controllers-left'),
  btnNext: document.querySelector('.testimonial-slider-controllers-right'),
  imagesSlider: document.querySelectorAll('.testimonial-slider-images__image'),
  contentsList: document.querySelectorAll('.testimonial-content'),
}
let countImages = 0;
let countContent = 0;
let imageSliderLive = el.imagesSlider;
let contentLive = el.contentsList;


el.btnNext.addEventListener('click', function(e) {

  nextImage();
  if (countContent < contentLive.length-1) {
    contentLive[countContent].style.opacity = '0';
    contentLive[countContent].style.transform = '';
    countContent++;
    contentLive[countContent].style.opacity = '1';
    contentLive[countContent].style.transform = 'scale(1)';
  }
});

el.btnPrev.addEventListener('click', function() {

  prevImage();
  if (countContent > 0) {
    contentLive[countContent].style.opacity = '0';
    contentLive[countContent].style.transform = '';
    countContent--;
    contentLive[countContent].style.opacity = '1';
    contentLive[countContent].style.transform = 'scale(1)';

  }
});


function nextImage() {

  if (!(countImages < el.imagesSlider.length-1)) {
    return;
  }  
  if (countImages === 0) {
    imageSliderLive[countImages].style.transform = 'translateX(-97vw)';
    countImages++;
    imageSliderLive[countImages].style.transform = 'translateX(-97vw)';
    return
  }
  imageSliderLive[countImages].style.transform = 'translateX(-194vw)';
  countImages++;
  imageSliderLive[countImages].style.transform = 'translateX(-97vw)';

}
function prevImage() {

  if (countImages < 1) {
    return;
  }
  if (countImages === 1) {
    imageSliderLive[countImages].style.transform = '';
    countImages--;
    imageSliderLive[countImages].style.transform = '';
    return;
  }
  imageSliderLive[countImages].style.transform = '';
  countImages--;
  imageSliderLive[countImages].style.transform = 'translateX(-97vw)';

}