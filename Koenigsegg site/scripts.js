// Função para scroll suave
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 70,  
            behavior: 'smooth'
        });
    });
});

// Animação ao rolar a página para cada seção
window.addEventListener('scroll', function () {
    const elements = document.querySelectorAll('.card, .section-title, .lead');
    const windowHeight = window.innerHeight;

    elements.forEach(function (element) {
        const positionFromTop = element.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            element.classList.add('fade-in');
        }
    });
});

// Animação de fade-in
const fadeInStyles = document.createElement('style');
fadeInStyles.innerHTML = `
    .fade-in {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }

    .card, .section-title, .lead {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
`;
document.head.appendChild(fadeInStyles);

// Responsividade
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    const navbarCollapse = document.querySelector('#navbarNav');
    navbarCollapse.classList.toggle('show');
});
