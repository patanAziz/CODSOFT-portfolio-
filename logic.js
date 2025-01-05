const hamburgerBtn = document.querySelector(".hamburg");
const menu = document.querySelector("#h");
const menuLinks = document.querySelectorAll("#h li");
const mainNavLinks = document.querySelectorAll(".content ul li");

hamburgerBtn.addEventListener("click", toggleMenu);

// Add click handlers for mobile menu items
menuLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const section = e.target.textContent.toLowerCase();
        scrollToSection(section);
        toggleMenu(); // Close menu after clicking
    });
});

// Add click handlers for main nav items
mainNavLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        const section = e.target.textContent.toLowerCase();
        scrollToSection(section);
    });
});

function toggleMenu() {
    menu.classList.toggle('menu-open');
}

function scrollToSection(sectionName) {
    const sectionMap = {
        'home': '.home',
        'about': '.con',
        'skills': '.skillcon',
        'projects': '.pcon'
    };

    const section = document.querySelector(sectionMap[sectionName]);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}




