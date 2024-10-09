document.addEventListener("DOMContentLoaded", function () {
    "use strict";
    
    // WOW.js initialization
    new WOW().init();

    // Spinner function to hide spinner after the page loads
    const spinner = function () {
        setTimeout(function () {
            const spinnerElem = document.getElementById('spinner');
            if (spinnerElem) {
                spinnerElem.classList.remove('show');
            }
        }, 1);
    };
    spinner();

    // Sticky navbar on scroll
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 45) {
            navbar.classList.add('sticky-top', 'shadow-sm');
        } else {
            navbar.classList.remove('sticky-top', 'shadow-sm');
        }
    });

    // Dropdown hover functionality for large screens
    const dropdown = document.querySelectorAll('.dropdown');
    const dropdownToggle = document.querySelectorAll('.dropdown-toggle');
    const dropdownMenu = document.querySelectorAll('.dropdown-menu');
    const showClass = "show";

    const handleDropdownHover = function () {
        if (window.matchMedia("(min-width: 992px)").matches) {
            dropdown.forEach(function (dropdownItem) {
                dropdownItem.addEventListener('mouseenter', function () {
                    dropdownItem.classList.add(showClass);
                    dropdownItem.querySelector('.dropdown-toggle').setAttribute("aria-expanded", "true");
                    dropdownItem.querySelector('.dropdown-menu').classList.add(showClass);
                });

                dropdownItem.addEventListener('mouseleave', function () {
                    dropdownItem.classList.remove(showClass);
                    dropdownItem.querySelector('.dropdown-toggle').setAttribute("aria-expanded", "false");
                    dropdownItem.querySelector('.dropdown-menu').classList.remove(showClass);
                });
            });
        } else {
            dropdown.forEach(function (dropdownItem) {
                dropdownItem.removeEventListener('mouseenter', null);
                dropdownItem.removeEventListener('mouseleave', null);
            });
        }
    };
    window.addEventListener('load', handleDropdownHover);
    window.addEventListener('resize', handleDropdownHover);

    // Back to top button functionality
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', function () {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Testimonial carousel using Owl Carousel (requires Owl Carousel library)
    const testimonialCarousel = document.querySelector('.testimonial-carousel');
    if (testimonialCarousel) {
        $(testimonialCarousel).owlCarousel({
            autoplay: true,
            smartSpeed: 1000,
            center: true,
            margin: 24,
            dots: true,
            loop: true,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
});
