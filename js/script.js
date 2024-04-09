document.addEventListener('DOMContentLoaded', function () {
    // Variables for elements
    var header = document.getElementById('main-header');
    var navbar = document.getElementById('navbar');
    var burgerIcon = document.getElementById('burger-icon');
    var overlay = document.getElementById('overlay');
    var up = document.getElementById('up');
    var menuItems = document.querySelectorAll('#navbar ul li');

    // Event listener for menu items
    menuItems.forEach(function (item) {
        item.addEventListener('click', function () {
            overlay.classList.remove('active');
            burgerIcon.classList.remove('open');
            navbar.classList.remove('expanded');
        });
    });

    // Function to toggle menu visibility
    function toggleMenu() {
        overlay.classList.toggle('active');
        burgerIcon.classList.toggle('open');
        navbar.classList.toggle('expanded');
    }

    // Sets the navbar height based on position
    function setNavbarHeight() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            up.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            up.classList.remove('scrolled');
        }
    }

    // Event listener for scroll, updating header and scroll-to-top button
    window.addEventListener('scroll', function () {
        setNavbarHeight()
    });

    // Event listeners for burger icon and overlay
    burgerIcon.addEventListener('click', function () {
        toggleMenu();
    });

    overlay.addEventListener('click', function () {
        toggleMenu();
    });

    // Initially set the navbar height
    setNavbarHeight()
});

// Function to scroll to the bottom of the page
function down() {
    window.scrollTo(0, document.documentElement.scrollHeight);
}

// Event listener for scroll-to-top button
up.addEventListener("click", () => {
    window.scrollTo(0, 0);
});

// Object to store language content
var languageContent = {
    "language":
    {
        "en": "Change language",
        "de": "Sprache ändern"
    },
    "introduction-nav": {
        "en": "Introduction",
        "de": "Einführung"
    },
    "equipment-nav": {
        "en": "Equipment",
        "de": "Ausrüstung"
    },
    "outlook-nav": {
        "en": "Outlook",
        "de": "Ausblick"
    },
    "contact-us-nav": {
        "en": "Contact us",
        "de": "Kontaktiere uns"
    },
    "introduction-h2": {
        "en": "Introduction",
        "de": "Einführung"
    },
    "introduction": {
        "en": "In 2018, the seeds of innovation were sown at TU Chemnitz through a groundbreaking PhD thesis that laid the foundation for a startup poised to revolutionize the automotive industry. The core idea, conceived within the academic corridors, germinated into a pioneering venture focused on the development of cutting-edge shock absorbers. Fast forward to the present, and this initiative has evolved into a formidable force, introducing a new generation of shock absorbers distinguished by their novel design. The journey from academic research to a startup enterprise underscores not only the resilience of the initial concept but also the entrepreneurial spirit that propels ideas from theory to tangible, market-ready solutions. This startup stands as a testament to the potential for transformative advancements emerging from the crucible of academic exploration.",
        "de": "Im Jahr 2018 wurden die Samen der Innovation an der TU Chemnitz durch eine wegweisende Doktorarbeit gesät, die den Grundstein für ein Startup legte, das darauf abzielt, die Automobilindustrie zu revolutionieren. Die Kernidee, innerhalb der akademischen Korridore entstanden, entwickelte sich zu einem bahnbrechenden Unternehmen, das sich auf die Entwicklung von modernsten Stoßdämpfern konzentriert. Schnell vorwärts in die Gegenwart, und diese Initiative hat sich zu einer beeindruckenden Kraft entwickelt, die eine neue Generation von Stoßdämpfern einführt, die sich durch ihr neuartiges Design auszeichnen. Die Reise von der akademischen Forschung zu einem Startup-Unternehmen betont nicht nur die Widerstandsfähigkeit des ursprünglichen Konzepts, sondern auch den Unternehmergeist, der Ideen von der Theorie zu greifbaren, marktfähigen Lösungen vorantreibt. Dieses Startup steht als Zeugnis für das Potenzial für transformative Fortschritte, die aus der Schmelztiegel der akademischen Erforschung hervorgehen."
    },
    "equipment-h2": {
        "en": "Equipment",
        "de": "Ausrüstung"
    },
    "equipment":
    {
        "en": "As the startup's workshop takes shape, precision, and innovation converge through a carefully selected array of equipment, setting the stage for the research and development journey of groundbreaking shock absorbers. Drawing on the expertise of renowned companies like Bosch, the startup has invested in essential tools such as an 8s viscometer, 3D printer, screw set, thread die set, pipe cutter, and drill – all meticulously chosen to facilitate the initial phases of product development. Notably, a dynometer machine, pivotal for obtaining force-velocity and force-displacement diagrams crucial in analyzing damper quality, has been ordered and will soon become a cornerstone of the workshop's capabilities. The commitment to acquiring top-tier equipment reflects the startup's dedication to achieving unparalleled precision and excellence in the creation of its revolutionary shock absorbers.",
        "de": "Während sich die Werkstatt des Startups formt, vereinen sich Präzision und Innovation durch eine sorgfältig ausgewählte Palette von Geräten, die die Bühne für die Forschungs- und Entwicklungsreise wegweisender Stoßdämpfer setzen. Unter Nutzung der Expertise namhafter Unternehmen wie Bosch hat das Startup in wesentliche Werkzeuge investiert, darunter ein 8s-Viskosimeter, 3D-Drucker, Schraubensatz, Gewindeschneidsatz, Rohrschneider und Bohrer – alles akribisch ausgewählt, um die ersten Phasen der Produktentwicklung zu erleichtern. Beachtenswert ist eine Prüfstandsmaschine, die entscheidend ist für die Erstellung von Kraft-Geschwindigkeits- und Kraft-Verdrängungsdiagrammen, die für die Analyse der Dämpferqualität unerlässlich sind. Diese wurde bestellt und wird bald ein Eckpfeiler der Werkstattkapazitäten sein. Das Bestreben, hochwertige Ausrüstung zu erwerben, spiegelt das Engagement des Startups wider, unübertroffene Präzision und Exzellenz bei der Entwicklung seiner revolutionären Stoßdämpfer zu erreichen."
    },
    "outlook-h2": {
        "en": "Outlook",
        "de": "Ausblick"
    },
    "outlook":
    {
        "en": "Embracing a visionary outlook, the startup envisions a transformative trajectory in the realm of shock absorbers, commencing with the development of the Innova twin-tube passive shock absorbers as its inaugural milestone. This strategic entry point lays the foundation for a progressive evolution, with future endeavors set to unveil semiactive and active shock absorbers. Comprising a dedicated team of engineers driven by unwavering commitment and precision, Navid Dynamics is committed to redefining the driving experience. The fusion of cutting-edge technology and a passion for innovation positions the startup as a catalyst in revolutionizing damping engineering. As we embark on this journey, our mission is to deliver unparalleled comfort and relief on the road, setting new benchmarks in the automotive industry. If our project has piqued your interest or you're keen on collaborating, we welcome you to reach out without hesitation.",
        "de": "Mit einem visionären Ausblick beabsichtigt das Startup, eine transformative Entwicklung im Bereich der Stoßdämpfer zu vollziehen. Dies beginnt mit der Entwicklung der Innova Twintube passiven Stoßdämpfer als seinen einleitenden Meilenstein. Dieser strategische Einstieg legt den Grundstein für eine fortschreitende Evolution, wobei zukünftige Bestrebungen darauf abzielen, semiaktive und aktive Stoßdämpfer zu enthüllen. Bestehend aus einem engagierten Team von Ingenieuren, das von unerschütterlichem Engagement und Präzision angetrieben wird, hat sich Navid Dynamics dazu verpflichtet, das Fahrerlebnis neu zu definieren. Die Verschmelzung von modernster Technologie und Leidenschaft für Innovation positioniert das Startup als Katalysator für die Revolutionierung der Dämpftechnik. Auf dieser Reise ist unsere Mission, unvergleichlichen Komfort und Entlastung auf der Straße zu bieten und dabei neue Maßstäbe in der Automobilindustrie zu setzen. Wenn unser Projekt Ihr Interesse geweckt hat oder Sie an einer Zusammenarbeit interessiert sind, heißen wir Sie herzlich dazu ein, sich ohne Zögern an uns zu wenden."
    },
    "contact-us":
    {
        "en": "Contact us",
        "de": "Kontaktiere uns"
    },
    "address":
    {
        "en": "Thielestrasse 2B, 09599 Freiberg, Germany",
        "de": "Thielestraße 2B, 09599 Freiberg, Deutschland"
    },
    // "mail":
    // {
    //     "en": 'E-Mail: info@naviddynamics.com',
    //     "de": 'E-Mail: info@naviddynamics.de',
    // },
    // "tel":
    // {
    //     "en": "Telephone:  (+49) 1785 862 948",
    //     "de": "Telefon:  (+49) 1785 862 948"
    // },
    "socials":
    {
        "en": "Social media",
        "de": "Soziale Medien"
    },
    "copyright":
    {
        "en": "Copyright © All Rights Reserved for this Company.",
        "de": "© Alle Rechte vorbehalten für dieses Unternehmen."
    }
};

// Function to update content based on language
function updateContent() {
    var currentLanguage = (document.getElementById('language').classList.contains('english')) ? 'en' : 'de';

    var elementsToUpdate = document.querySelectorAll('[data-lang]');

    document.documentElement.lang = currentLanguage
    elementsToUpdate.forEach(function (element) {
        var languageKey = element.getAttribute('data-lang');

        if (languageContent[languageKey] && languageContent[languageKey][currentLanguage]) {
            if (languageKey == "language") {
                element.title = languageContent[languageKey][currentLanguage];
            } else {
                element.textContent = languageContent[languageKey][currentLanguage];
            }
        } else {
            console.error("Language content not found for key:", languageKey, "and language:", currentLanguage);
        }
    });
}

// Function to update email link href based on language
function updateEmailLinkHref() {
    var emailLink = document.getElementById('email');

    if (emailLink.innerText.endsWith('.com')) {
        emailLink.href = emailLink.href.replace('.com', '.de');
        emailLink.innerText = emailLink.innerText.replace('.com', '.de');
    } else {
        emailLink.href = emailLink.href.replace('.de', '.com');
        emailLink.innerText = emailLink.innerText.replace('.de', '.com');
    }
}

// Function to toggle between English and German language
function toggleLanguage() {
    var languageElement = document.getElementById('language');
    languageElement.classList.toggle('english');
    languageElement.classList.toggle('german');

    updateEmailLinkHref()
    updateContent();
}

// Function to set default language based on domain
function setDefaultLanguage() {
    var currentDomain = window.location.hostname;

    if (currentDomain.endsWith(".de")) {
        toggleLanguage();
    }
}

// Initial setup for language
setDefaultLanguage();

document.addEventListener('DOMContentLoaded', function () {
    // Event listeners for smooth scroll to section
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('#navbar ul li');

    navItems.forEach(function (item) {
        item.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default behavior

            const targetId = item.getAttribute('data-nav');
            const targetSection = document.getElementById(targetId);

            // const offset = document.getElementById('main-header').offsetHeight;

            window.scrollTo({
                // top: targetSection.offsetTop - offset
                top: targetSection.offsetTop - 30
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // Event listener for updating active navigation item
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('#navbar ul li a');

    function updateActiveNavItem() {
        const scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const top = section.offsetTop - .86 * (window.innerHeight);
            const bottom = top + section.offsetHeight;

            if (scrollPosition >= top && scrollPosition < bottom) {
                navItems.forEach(navItem => {
                    navItem.classList.remove('active');
                });

                const currentNavItem = document.querySelector(`[data-nav="${section.id}"]`);
                if (currentNavItem) {
                    currentNavItem.classList.add('active');
                }
            } else {
                const navItemToReset = document.querySelector(`[data-nav="${section.id}"]`);
                if (navItemToReset) {
                    navItemToReset.classList.remove('active');
                }
            }
        });
    }

    // Event listeners for scroll and resize
    window.addEventListener('scroll', updateActiveNavItem);
    window.addEventListener('resize', updateActiveNavItem);

    updateActiveNavItem(); // Call the function initially to set the initial state
});

// Intersection Observer for image fade-in effect
const images = document.querySelectorAll('.scroll-transition');
const faderOptions = {
    rootMargin: "0px 0px 10% 0px"
    // threshold: .1,
};

const appearOnScroll = new IntersectionObserver(function (entries, appearOnScroll) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("active");
            appearOnScroll.unobserve(entry.target)
        }
    })
}, faderOptions);

images.forEach(fade => {
    appearOnScroll.observe(fade)
});

var mapPin = document.getElementById('map-pin');
var map = document.getElementById('map');

// Function to handle hover effect
function handleHoverEffect() {
    map.classList.add('hovered');
}

// Function to handle reverting hover effect
function handleRevertHoverEffect() {
    map.classList.remove('hovered');
}

// Add a mouseenter event listener to mapPin
mapPin.addEventListener('mouseenter', function () {
    // Check screen width before triggering the hover effect
    if (window.innerWidth >= 600) {
        handleHoverEffect();
    }
});

// Add a mouseleave event listener to revert the hover effect on map
mapPin.addEventListener('mouseleave', function () {
    // Check screen width before reverting the hover effect
    if (window.innerWidth >= 600) {
        handleRevertHoverEffect();
    }
});

// Check screen width and add 'hovered' class if less than 600 pixels
function checkScreenWidth() {
    if (window.innerWidth < 600) {
        handleHoverEffect();
    } else {
        handleRevertHoverEffect();
    }
}

// Initial check on page load
checkScreenWidth();

// Add a resize event listener to continuously check screen width
window.addEventListener('resize', checkScreenWidth);
