const anchor = document.querySelector('#top-anchor');
const header = document.querySelector('header');
const nav = document.querySelector('nav');
const footer = document.querySelector('footer');

const footerCallback = function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            footer.classList.remove('active');
        } else {
            footer.classList.add('active');
        }
    });
}

const footerObserver = new IntersectionObserver(footerCallback, {});
footerObserver.observe(anchor);

const navCallback = function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            nav.classList.remove('active');
        } else {
            nav.classList.add('active');
        }
    });
}

const navObserver = new IntersectionObserver(navCallback, {});
navObserver.observe(header);