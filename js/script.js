$(document).ready(function () {

    const $productSliderWrapper = $('.cbox1 .product-slider-wrapper');
    const $productItems = $productSliderWrapper.find('.product-item');
    const $indicatorsContainer = $('.cbox1 .product-slider-indicators');
    const $dots = $indicatorsContainer.find('.dot');
    const $sliderContainer = $('.cbox1');

    const productCount = $productItems.length;

    const animationDuration = 500;
    const intervalTime = 6000;

    let currentProductIndex = 0;
    let autoSlideInterval;

    function initializeProductSlider() {
        if (productCount === 0) return;

        $productItems
            .hide()
            .css({
                opacity: 0,
                pointerEvents: 'none'
            });

        $productItems.eq(0)
            .show()
            .css({
                opacity: 1,
                pointerEvents: 'auto'
            });

        $dots.removeClass('active');
        $dots.eq(0).addClass('active');

        startAutoSlide();
    }

    function showProduct(index) {
        if (index < 0 || index >= productCount) return;
        if ($productItems.is(':animated')) return;
        if (index === currentProductIndex) return;

        $dots.removeClass('active');
        $dots.eq(index).addClass('active');

        $productItems.eq(currentProductIndex)
            .css('pointer-events', 'none')
            .animate({ opacity: 0 }, animationDuration, function () {
                $(this).hide();
            });

        $productItems.eq(index)
            .show()
            .animate({ opacity: 1 }, animationDuration, function () {
                $(this).css('pointer-events', 'auto');
                currentProductIndex = index;
            });
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);

        if (productCount > 1) {
            autoSlideInterval = setInterval(function () {
                const nextIndex = (currentProductIndex + 1) % productCount;
                showProduct(nextIndex);
            }, intervalTime);
        }
    }

    $dots.on('click', function () {
        const clickedIndex = $(this).index();
        showProduct(clickedIndex);
        startAutoSlide();
    });

    $sliderContainer.on('mouseenter', function () {
        clearInterval(autoSlideInterval);
    });

    $sliderContainer.on('mouseleave', function () {
        startAutoSlide();
    });

    initializeProductSlider();
});
