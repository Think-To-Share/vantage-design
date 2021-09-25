import { tns } from 'tiny-slider/src/tiny-slider'

if (document.querySelector('.testimonials-section')) {
    tns({
        container: '.testimonials-section .testimonials',
        items: 1,
        nav: false,
        controlsContainer: '.testimonials-section .testimonial-nav',
        autoplay: true,
        autoplayButtonOutput: false,
    })
}
