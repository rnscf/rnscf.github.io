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
            localStorage.setItem("darkColor", "#E8E8E8");
            darkModeBtn.innerHTML = `<span style="color:#E8E8E8;">☀</span>`;
        } else {
            localStorage.setItem("darkMode", "disabled");
            localStorage.setItem("darkIcon", `<span>☾</span>`);
            localStorage.setItem("darkColor", "#212121");
            darkModeBtn.innerHTML = `<span style="color:#212121;">☾</span>`;
        }
    }

    darkModeBtn.addEventListener("click", toggleDarkMode);
}

function main() {
    darkMode();
    navbarScroll();    
}

main();
