 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // // Activate Bootstrap scrollspy on the main nav element
    // const mainNav = document.body.querySelector('#mainNav');
    // if (mainNav) {
    //     new bootstrap.ScrollSpy(document.body, {
    //         target: '#mainNav',
    //         offset: 74,
    //     });
    // };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive a.nav-link:not(.no-script)')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// Store all FAQ items in a variable for better performance
const faqItems = document.querySelectorAll('.faq-item');
let currentlyActiveItem = null;

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
 

    question.addEventListener('click', () => {
        // If this is the currently active item, close it
        if (item === currentlyActiveItem) {
            item.classList.remove('active');
            currentlyActiveItem = null;
        } 
        // Otherwise, close all and open this one
        else {
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
            });
            item.classList.add('active');
            currentlyActiveItem = item;
        }
    });
});

// document.querySelectorAll('.faq-item').forEach(item => {
//     const question = item.querySelector('.faq-question');
    
//     question.addEventListener('click', () => {
//         item.classList.toggle('active'); // Remove active class from all items
//         document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
//         // Add active class to the clicked item
//         item.classList.toggle('active');   
//         });

// });

document.querySelectorAll('.faq-container .faq-item').forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'transparent';
        e.target.style.setProperty('background-color', 'transparent', 'important');
                // Additional hover styles if needed
                e.target.style.setProperty('outline', 'none', 'important');
                e.target.style.setProperty('box-shadow', 'none', 'important');
    });

    // item.addEventListener('mouseleave', (e) => {
    //     // Restore original styles
    //     e.target.style.setProperty('background-color', originalBgColor || '', 'important');
        
    //     // Reset additional styles if needed
    //     e.target.style.setProperty('outline', '', 'important');
    //     e.target.style.setProperty('box-shadow', '', 'important');
    // });
});








// document.addEventListener('DOMContentLoaded', function() {
//     // Transformation data
//     const transformations = [
//         { 
//             image: '/images/4430a20e-fd06-445c-996b-36f1a7b27375WhatsApp Image 2023-04-26 at 1.45.23 AM (1).jpeg',
//             name: 'Client 1' 
//         },
//         { 
//             image: '/images/5359dc30-4026-4111-9486-7c99fa1cd0c22.jpg',
//             name: 'Client 2' 
//         },
//         { 
//             image: '/images/b85e4c51-2d13-4f55-9b0e-c2074e2c5fd03.jpg',
//             name: 'Client 3' 
//         },
//         { 
//             image: '/images/7bb219b2-e05f-4061-8994-644e6d5e4a184.jpg',
//             name: 'Client 4' 
//         },
//         { 
//             image: '/images/70e5bc32-eec3-4a64-a182-6a8b009371b25.jpg',
//             name: 'Client 5' 
//         },
//         { 
//             image: '/images/3228fca2-1fd9-49d4-ac24-ec2803b0817d6.JPG',
//             name: 'Client 6' 
//         },
//         { 
//             image: '/images/2aeb4ac0-1550-4917-846b-ec9b15d8258f7.jpg',
//             name: 'Client 7' 
//         },
//         { 
//             image: '/images/2ff7479a-9366-4fbc-ab2f-c696ad355a9f8.jpg',
//             name: 'Client 8' 
//         },
//         { 
//             image: '/images/1dc99f98-da57-41c4-8d34-584ba0592efc9.jpg',
//             name: 'Client 9' 
//         }
//     ];
    
//     const carouselTrack = document.querySelector('.carousel-track');
//     const itemsPerView = 3; // Show 3 items at a time
//     let currentIndex = 0;
    
//     // Initialize carousel
//     function initCarousel() {
//         carouselTrack.innerHTML = '';
        
//         // Add transformation items
//         transformations.forEach((transformation, index) => {
//             const item = document.createElement('div');
//             item.className = 'transformation-item';
//             item.innerHTML = `
//                 <img src="${transformation.image}" alt="Transformation ${index + 1}" loading="lazy">
//                 <div class="client-name">${transformation.name}</div>
//             `;
//             carouselTrack.appendChild(item);
//         });
        
//         updateCarousel();
//     }
    
//     // Update carousel position
//     function updateCarousel() {
//         const itemWidth = carouselTrack.children[0].offsetWidth;
//         const offset = -currentIndex * itemWidth * itemsPerView;
//         carouselTrack.style.transform = `translateX(${offset}px)`;
//     }
    
//     // Next slide
//     function nextSlide() {
//         if (currentIndex < Math.ceil(transformations.length / itemsPerView) - 1) {
//             currentIndex++;
//             updateCarousel();
//         } else {
//             // Loop back to start
//             currentIndex = 0;
//             updateCarousel();
//         }
//     }
    
//     // Previous slide
//     function prevSlide() {
//         if (currentIndex > 0) {
//             currentIndex--;
//             updateCarousel();
//         } else {
//             // Loop to end
//             currentIndex = Math.ceil(transformations.length / itemsPerView) - 1;
//             updateCarousel();
//         }
//     }
    
//     // Event listeners for arrows
//     document.querySelector('.right-arrow').addEventListener('click', nextSlide);
//     document.querySelector('.left-arrow').addEventListener('click', prevSlide);
    
//     // Initialize on load and resize
//     initCarousel();
//     window.addEventListener('resize', function() {
//         initCarousel();
//     });
// });


// Client Transformations Slider
 document.addEventListener('DOMContentLoaded', function() {
    // Client data - you can replace this with your actual client data
    const clients = [
        { name: "John Doe", image: "images/transform1.jpg" },
        { name: "Jane Smith", image: "images/transform2.jpg" },
        { name: "Mike Johnson", image: "images/transform4.jpg" },
        { name: "Sarah Williams", image: "images/transform5.jpg" },
        { name: "David Brown", image: "images/transform6.jpg" },
        { name: "Emily Davis", image: "images/transform23.jpg" },
        { name: "Robert Wilson", image: "images/transform13.jpg" },
        { name: "Lisa Taylor", image: "images/Mohamed.jpg" }
    ];
    
    const slider = document.querySelector('.transformations-slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentIndex = 0;
    let slidesPerView = getSlidesPerView();
    let autoRotateInterval;
    
    // Function to determine how many slides to show
    function getSlidesPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 992) return 2;
        return 3;
    }
    
    // Initialize the slider
    function initSlider() {
        // Clear existing slides
        slider.innerHTML = '';
        
        // Create slides
        for (let i = 0; i < slidesPerView; i++) {
            const slide = document.createElement('div');
            slide.className = 'transformation-slide';
            
            // Calculate the correct client index with wrap-around
            const clientIndex = (currentIndex + i) % clients.length;
            const client = clients[clientIndex < 0 ? clientIndex + clients.length : clientIndex];
            
            slide.innerHTML = `
                <div class="transformation-card">
                    <img loading="lazy" src="${client.image}" alt="${client.name}'s transformation">
                    <div class="client-name">${client.name}</div>
                </div>
            `;
            
            slider.appendChild(slide);
        }
    }
    
    // Update the slider when window is resized
    function handleResize() {
        const newSlidesPerView = getSlidesPerView();
        if (newSlidesPerView !== slidesPerView) {
            slidesPerView = newSlidesPerView;
            initSlider();
        }
    }
    
    // Navigation functions
    function goToPrev() {
        currentIndex = (currentIndex - 1) % clients.length;
        if (currentIndex < 0) currentIndex = clients.length - 1;
        initSlider();
    }
    
    function goToNext() {
        currentIndex = (currentIndex + 1) % clients.length;
        initSlider();
    }
    
    // Set up auto-rotation
    function startAutoRotate() {
        autoRotateInterval = setInterval(goToNext, 5000);
    }
    
    // Initialize everything
    function init() {
        initSlider();
        startAutoRotate();
        
        // Event listeners
        prevBtn.addEventListener('click', function() {
            clearInterval(autoRotateInterval);
            goToNext();
            startAutoRotate();
        });
        
        nextBtn.addEventListener('click', function() {
            clearInterval(autoRotateInterval);
            goToPrev();
            startAutoRotate();
        });
        
        window.addEventListener('resize', handleResize);
        
        // Pause auto-rotation when hovering over slider
        slider.addEventListener('mouseenter', () => {
            clearInterval(autoRotateInterval);
        });
        
        slider.addEventListener('mouseleave', () => {
            startAutoRotate();
        });
    }
    
    // Start the slider
    init();
});


// Add click handler for transformation cards
document.addEventListener('DOMContentLoaded', function() {
    // Your existing slider code...
    
    // Add click event to transformation cards
    document.addEventListener('click', function(e) {
        const card = e.target.closest('.transformation-card');
        if (card) {
            const clientName = card.querySelector('.client-name').textContent;
            const clientImage = card.querySelector('img').src;
            const clientComment = card.dataset.comment || "Every small step in the gym brings you closer to your goal";
            
            // Store client data in sessionStorage
            sessionStorage.setItem('clientData', JSON.stringify({
                name: clientName,
                image: clientImage,
                comment: clientComment
            }));
            
            // Redirect to client page
            window.location.href = 'client.html';
        }
    });
});



