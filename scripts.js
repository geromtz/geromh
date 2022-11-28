let cerrarMenu = document.querySelector("#cerrar_menu");
let menu = document.querySelector("#menu");
let showMenu = document.querySelector(".showmenu");

showMenu.addEventListener("click", ()=> {
    menu.classList.add("show");
    showMenu.classList.add("hidden_icon");
})

cerrarMenu.addEventListener("click", ()=> {
    menu.classList.remove("show");
    showMenu.classList.remove("hidden_icon");
})
