/* rncsf global js */
function navbarScroll() {
    let prevScrollPos = window.scrollY;
    const navbar = document.getElementById("nav");
    const darkModeBtn = document.getElementById("dark-mode-btn");

    window.onscroll = function() {
        let currentScrollPos = window.scrollY;

        if (prevScrollPos > currentScrollPos) {
            navbar.classList.remove("hidden");
            darkModeBtn.classList.remove("hidden");
        } else {
            navbar.classList.add("hidden");
            darkModeBtn.classList.add("hidden");
        }

        prevScrollPos = currentScrollPos;
    };
}

function darkMode() {
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        body.style.transition = "1.0s";

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            localStorage.setItem("darkIcon", `<span>☀</span>`);
            localStorage.setItem("darkColor", "#d0d0d1");
            darkModeBtn.innerHTML = `<span style="color:#d0d0d1;">☀</span>`;
        } else {
            localStorage.setItem("darkMode", "disabled");
            localStorage.setItem("darkIcon", `<span>☾</span>`);
            localStorage.setItem("darkColor", "#1e1e1e");
            darkModeBtn.innerHTML = `<span style="color:#1e1e1e;">☾</span>`;
        }
    }

    darkModeBtn.addEventListener("click", toggleDarkMode);
}

function main() {
    darkMode();
    navbarScroll();    
}

main();
