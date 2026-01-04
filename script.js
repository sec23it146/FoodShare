// Handle form submission
const form = document.getElementById('donationForm');
const thankYouMsg = document.getElementById('thankYouMsg');

form.addEventListener('submit', function(e){
    e.preventDefault(); // prevent actual form submission
    thankYouMsg.style.display = "block"; // show thank you message
    form.reset(); // reset form
});

// Smooth Scroll for nav links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

scrollBtn.addEventListener('click', () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
});
