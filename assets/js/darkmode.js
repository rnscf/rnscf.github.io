function getDarkModeBtn() {
    if (localStorage.getItem("darkIcon") !== null) {
        const darkIcon = localStorage.getItem("darkIcon");
        const darkColor = localStorage.getItem("darkColor");
        const darkModeBtn = document.getElementById("dark-mode-btn");
        darkModeBtn.innerHTML = darkIcon;
        darkModeBtn.style.color = darkColor;
    }
}
