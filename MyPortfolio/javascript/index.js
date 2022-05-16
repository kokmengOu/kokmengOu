const navToggle = document.querySelector('.nav-toggle');
const NavLink = document.querySelectorAll('.nav--link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

NavLink.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})