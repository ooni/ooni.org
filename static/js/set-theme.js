const themeColor = document.querySelector('meta[name="theme-color"]');
const colorScheme = document.querySelector('meta[name="color-scheme"]');
const doc = document.documentElement;
const body = document.body;
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
const themeButtons = document.querySelectorAll(".footer-theme-buttons li");
if (currentTheme == "dark") {
    if (!prefersDarkScheme.matches) {
        doc.classList.toggle("dark");
    }
    themeColor.content = getComputedStyle(body).color;
    colorScheme.content= "dark";
} else if (currentTheme == "light") {
    if (prefersDarkScheme.matches) {
        doc.classList.toggle("light");
    }
    themeColor.content = getComputedStyle(body).color;
    colorScheme.content= "light";
}
function setTheme(thisElement, myPrefer = undefined ) {
    themeButtons.forEach(function(ele) {
        ele.classList.remove("active");
    });
    thisElement.classList.add("active");
    if (myPrefer == 'auto') {
        doc.classList.remove("light");
        doc.classList.remove("dark");
        themeColor.content = getComputedStyle(body).color;
        colorScheme.content = "light dark";
        localStorage.removeItem("theme");
    } else if (myPrefer == 'light') {
        doc.classList.remove("dark");
        if (!doc.classList.contains("light")) {
            doc.classList.add("light");
        }
        themeColor.content = getComputedStyle(body).color;
        colorScheme.content= "light";
        localStorage.setItem("theme", 'light');
    } else if (myPrefer == 'dark') {
        doc.classList.remove("light");
        if (!doc.classList.contains("dark")) {
            doc.classList.add("dark");
        }
        themeColor.content = getComputedStyle(body).color;
        colorScheme.content= "dark";
        localStorage.setItem("theme", 'dark');
    }
}