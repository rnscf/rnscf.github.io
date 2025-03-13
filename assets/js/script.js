/* rncsf global js */

function darkMode() {
    const darkModeBtn = document.getElementById("dark-mode-btn");
    const body = document.body;

    function toggleDarkMode() {
        body.classList.toggle("dark-mode");
        body.style.transition = "1.0s";

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            localStorage.setItem("darkIcon", `<i>&#9737;</i>`);
            localStorage.setItem("darkColor", "#d0d0d1");
            darkModeBtn.innerHTML = `<i style="color:#d0d0d1;">&#9737;</i>`;
        } else {
            localStorage.setItem("darkMode", "disabled");
            localStorage.setItem("darkIcon", `<i>&#9789;</i>`);
            localStorage.setItem("darkColor", "#1e1e1e");
            darkModeBtn.innerHTML = `<i style="color:#1e1e1e;">&#9789;</i>`;
        }
    }

    darkModeBtn.addEventListener("click", toggleDarkMode);
}

function main() {
    darkMode();    
}

main();
