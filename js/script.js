let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    if (index >= totalSlides) index = 0; // Loop back to the first slide
    if (index < 0) index = totalSlides - 1; // Loop back to the last slide
    
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(-${index * 100}%)`;
    });

    currentSlide = index;
}

function nextSlide() {
    showSlide(currentSlide - 1); // Go to the next slide
}

function prevSlide() {
    showSlide(currentSlide + 1); // Go to the previous slide
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);



function filterNews() {
    // Get the search query and convert it to lowercase
    const query = document.getElementById('searchInput').value.toLowerCase();
    
    // Get all news items
    const newsItems = document.querySelectorAll('.news-item');
    
    // Loop through all news items and check if the title includes the search query
    newsItems.forEach(item => {
        const title = item.getAttribute('data-title');
        if (title.includes(query)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
