const darkMode = () => {
    let element = document.body;
    element.classList.toggle("light");

    const mode = document.getElementById("dark-light");

    mode.innerHTML == "Light mode" ? mode.innerHTML = "Dark mode" : mode.innerHTML = "Light mode";

    }