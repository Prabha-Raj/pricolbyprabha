// hero_js 
var swiper = new Swiper(".pc_hero_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    }, 
});


// typing_effect 
var wordsToType = document.querySelector("span[words]").getAttribute("words").split(','),
    typer = document.querySelector("span[words]"),
    typingSpeed = (parseInt(typer.getAttribute('typing-speed')) || 70),
    typingDelay = (parseInt(typer.getAttribute('typing-delay')) || 700);

var currentWordIndex = 0, currentCharacterIndex = 0;

function type() {
    var wordToType = wordsToType[currentWordIndex % wordsToType.length];

    if (currentCharacterIndex < wordToType.length) {
        typer.innerHTML += wordToType[currentCharacterIndex++];
        setTimeout(type, typingSpeed);
    } else {

        setTimeout(erase, typingDelay);
    }

}
function erase() {
    var wordToType = wordsToType[currentWordIndex % wordsToType.length];
    if (currentCharacterIndex > 0) {
        typer.innerHTML = wordToType.substr(0, --currentCharacterIndex - 1);
        setTimeout(erase, typingSpeed);
    } else {

        currentWordIndex++;
        setTimeout(type, typingDelay);
    }

}

window.onload = function () {
    type();
}


// media_slider
var swiper = new Swiper(".pc_press_media_slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 1500,
        disableOnInteraction: false
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiper = new Swiper('.pc_press_media_slider', {
    slidesPerView: 1,  // Show only 1 slide at a time
    spaceBetween: 0,    // No space between slides
    loop: true,         // Loop slides
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        768: {  // For screens with a max-width of 768px (e.g., mobile view)
            slidesPerView: 1,  // Show 1 slide
            spaceBetween: 0,   // No space between slides
        },
        992: {  // For screens with a max-width of 992px (tablet view)
            slidesPerView: 2,  // Show 2 slides
            spaceBetween: 20,  // Space between slides
        }
    }
});
