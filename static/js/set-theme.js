const themeColor = document.querySelector('meta[name="theme-color"]');
const colorScheme = document.querySelector('meta[name="color-scheme"]');
const doc = document.documentElement;
const nav = document.querySelector("nav.navbar");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
const themeButtons = document.querySelectorAll(".footer-theme-buttons li");
// This function comes from https://michaelti.ca/sandbox/2020/05/01/dark-mode-images-with-a-manual-toggle-switch/
function changePicturesTheme(userPrefer='') {
    document.querySelectorAll('picture > source[data-user-theme]').forEach(element => {
        element.remove();
    });
    if (userPrefer) {
        document.querySelectorAll(`picture > source[media*="(prefers-color-scheme: ${userPrefer})"]`).forEach(element => {
            const cloned = element.cloneNode();
            cloned.removeAttribute('media');
            cloned.setAttribute('data-user-theme', userPrefer);
            element.parentNode.prepend(cloned);
        });
    }
};
if (currentTheme == "dark") {
    if (!prefersDarkScheme.matches) {
        doc.classList.toggle(currentTheme);
    }
    darkModeBtn.classList.add("active");
} else if (currentTheme == "light") {
    if (prefersDarkScheme.matches) {
        doc.classList.toggle(currentTheme);
    }
    lightModeBtn.classList.add("active");
} else {
    autoModeBtn.classList.add("active");
}
themeColor.content = getComputedStyle(nav).backgroundColor;
colorScheme.content= currentTheme;
changePicturesTheme(currentTheme);
function setTheme(thisElement, userPrefer = undefined ) {
    themeButtons.forEach(function(ele) {
        ele.classList.remove("active");
    });
    thisElement.classList.add("active");
    if (userPrefer == 'auto') {
        doc.classList.remove("light");
        doc.classList.remove("dark");
        colorScheme.content = "light dark";
        localStorage.removeItem("theme");
    } else if (userPrefer == 'light') {
        doc.classList.remove("dark");
        if (!doc.classList.contains(userPrefer)) {
            doc.classList.add(userPrefer);
        }
        colorScheme.content= userPrefer;
        localStorage.setItem("theme", userPrefer);
    } else if (userPrefer == 'dark') {
        doc.classList.remove("light");
        if (!doc.classList.contains(userPrefer)) {
            doc.classList.add(userPrefer);
        }
        colorScheme.content= userPrefer;
        localStorage.setItem("theme", userPrefer);
    }
    themeColor.content = getComputedStyle(nav).backgroundColor;
    changePicturesTheme(userPrefer);
}