document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function filterReviews(type) {
    var reviews = document.querySelectorAll('.review-item');

    reviews.forEach(function(review) {
        if (type === 'all') {
            review.style.display = 'block';
        } else if (review.getAttribute('data-type') === type) {
            review.style.display = 'block';
        } else {
            review.style.display = 'none';
        }
    });
}

