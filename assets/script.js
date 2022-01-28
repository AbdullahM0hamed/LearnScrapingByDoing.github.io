function openNav() {
    var sidenav = document.getElementById("sidenav").style
    document.getElementById("mainContent").classList.toggle("shadow");
    sidenav.width = 
        sidenav.width == "250px" 
            ? "0px" 
            : "250px"
}

function toggleTheme() {
    document.body.classList.toggle("dark");

    let theme = "light";
    const prism = document.getElementById("prism");

    if (document.body.classList.contains("dark")) {
        theme = "dark";
        prism.href = "/assets/prism-dark.css";
    } else {
        prism.href = "/assets/prism.css";
    }

    localStorage.setItem("theme", theme);
}

(function() {
    document.addEventListener('DOMContentLoaded', (event) =>
        setDark()
    )
})();

function setDark() {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const currentTheme = localStorage.getItem("theme");

    if (currentTheme == 'dark') {
        document.getElementById("prism").href = "/assets/prism-dark.css"
        document.body.classList.add('dark');
    }
}
function replitToggle() {
    let frame =  document.getElementById("replitFrame");
    let button = document.getElementById("collapse-button");
    if (frame.classList.contains("replit-frame-expanded")) {
        frame.classList.remove("replit-frame-expanded");
        frame.classList.add("replit-frame-collapsed");
        button.classList.add("replit-expand");
        button.classList.remove("replit-collapse");

    } else {
        frame.classList.add("replit-frame-expanded");
        frame.classList.remove("replit-frame-collapsed");
        button.classList.remove("replit-expand");
        button.classList.add("replit-collapse");
    }
}
