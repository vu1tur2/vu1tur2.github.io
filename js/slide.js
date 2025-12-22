$(document).ready(function() {

    const $slideContainer = $('#slide');
    const $slides = $slideContainer.find('img');
    const slideCount = $slides.length;
    const animationDuration = 1000; 
    const intervalTime = 4000;

    const $dots = $('.main-slide-indicators').find('.main-dot');
    
    let currentSlide = 0;
    let autoSlideInterval; 
    let isAnimating = false;

    function initializeSlides() {
        if (slideCount === 0) return;

        $slides.css({
            'position': 'absolute',
            'opacity': 0,
            'left': '50%',
            'top': '44.7%',
            'transform': 'translate(-50%, -50%)',
            'width': '100%',
            'max-width' : '1200px',
            'height': '300px',
            'z-index': 1 
        });

        $slides.eq(0).css({ 'opacity': 1, 'z-index': 2 });
        $dots.eq(0).addClass('active');

        updateContainerHeight(); 
        startAutoSlide();
    }

    function updateContainerHeight() {
        const firstSlide = $slides.eq(0);
        if (firstSlide.length) {
            const slideHeight = firstSlide.get(0).offsetHeight;
            $slideContainer.css('height', slideHeight + 'px');
        }
    }

    function showSlide(nextIndex) {
        if (nextIndex < 0 || nextIndex >= slideCount || isAnimating) {
            return;
        }

        if (nextIndex === currentSlide) {
            startAutoSlide();
            return;
        }

        isAnimating = true;
        $dots.removeClass('active');
        $dots.eq(nextIndex).addClass('active');
        $slides.eq(currentSlide).animate({ opacity: 0 }, animationDuration).css('z-index', 1);
        $slides.eq(nextIndex).css('z-index', 2).animate({ opacity: 1 }, animationDuration, function() {
            currentSlide = nextIndex;
            isAnimating = false;
        });
    }

    function nextSlideAuto() {
        const nextSlideIndex = (currentSlide + 1) % slideCount;
        showSlide(nextSlideIndex);
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        
        if (slideCount > 1) {

            autoSlideInterval = setInterval(nextSlideAuto, intervalTime);
        }
    }

    $dots.on('click', function() {
        const clickedIndex = $(this).index();

        showSlide(clickedIndex);
        startAutoSlide();
    });

    $(window).on('load resize', updateContainerHeight);
    
    initializeSlides();
});
