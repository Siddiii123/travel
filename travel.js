// JavaScript for toggling the navigation menu on small screens
document.getElementById('bar').addEventListener('click', function() {
    var nav = document.querySelector('nav ul');
    nav.classList.toggle('show');
});

// JavaScript for basic form validation
document.getElementById('submit').addEventListener('click', function(event) {
    var placeName = document.getElementById('placeName').value;
    var members = document.querySelector('.form input[type="number"]').value;
    var startDate = document.querySelector('.form input[type="date"]').value;
    var endDate = document.querySelectorAll('.form input[type="date"]')[1].value;

    if (placeName === '') {
        alert('Please enter a destination.');
        event.preventDefault();
        return;
    }

    if (members <= 0) {
        alert('Please enter a valid number of members.');
        event.preventDefault();
        return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
        alert('End date must be after start date.');
        event.preventDefault();
        return;
    }

    alert('Booking submitted successfully!');
});

// JavaScript for handling the login functionality
document.getElementById('loginBtn').addEventListener('click', function() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('pass').value;

    if (email === '' || password === '') {
        alert('Please enter both email and password.');
        return;
    }

    alert('Logged in successfully!');
});
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-out');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const images = document.querySelectorAll('.PlaceCard img');
    images.forEach(img => {
        observer.observe(img);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Function to handle the intersection observer callback
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('pop-out');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const images = document.querySelectorAll('.PlaceCard img');
    images.forEach(img => {
        observer.observe(img);
    });

    // Blocker animation control
    const mainContainer = document.querySelector('.main');
    mainContainer.style.opacity = '0';

    window.addEventListener('load', () => {
        mainContainer.style.animation = 'fadeIn 1s forwards';
    });
});

