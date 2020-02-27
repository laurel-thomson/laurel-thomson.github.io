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

const navObserver = new IntersectionObserver(navCallback, { threshold : 0.75 });
navObserver.observe(header);

const sections = document.querySelectorAll('h2');
const navItems = document.querySelectorAll('nav a');

const sectionCallback = function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            const id = entry.target.id + '-link';
            navItems.forEach(function(navItem) {
                if (navItem.id === id) {
                    navItem.classList.add('active');
                } else {
                    navItem.classList.remove('active');
                }
            });
        }
    });
}

const sectionObserver = new IntersectionObserver(sectionCallback, {});
sections.forEach(function(section) {
    sectionObserver.observe(section);
});

