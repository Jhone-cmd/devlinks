const html = document.documentElement;
const img = document.querySelector("#profile img");

function toggleMode() {
    html.classList.toggle("light");
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/images/avatar-light.png");
        img.setAttribute("alt", "Avatar do profile com o fundo claro e branco.");
        
    } else {
        img.setAttribute("src", "./assets/images/avatar-moon.png");
        img.setAttribute("alt", "Avatar do profile com o fundo escuro e meio roxo.");
    }     
}