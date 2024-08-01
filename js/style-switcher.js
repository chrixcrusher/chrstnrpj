// Toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
});

// Hide style switcher on scroll
window.addEventListener("scroll", () => {
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open");
    }
});

// Switch theme
function switchTheme(theme) {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme); // Save the selected theme to localStorage
}

// Day/night toggle
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    const isDarkMode = document.body.classList.toggle("dark");
    dayNight.querySelector("i").classList.toggle("fa-moon", !isDarkMode);
    dayNight.querySelector("i").classList.toggle("fa-sun", isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light'); // Save the selected theme to localStorage
});

// Apply the saved theme on page load
window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        if (savedTheme === 'dark') {
            document.body.classList.add("dark");
            dayNight.querySelector("i").classList.add("fa-sun");
        } else {
            document.body.classList.remove("dark");
            dayNight.querySelector("i").classList.add("fa-moon");
        }
    } else {
        // Default to light mode if no theme is saved
        document.body.classList.remove("dark");
        dayNight.querySelector("i").classList.add("fa-moon");
    }
});
