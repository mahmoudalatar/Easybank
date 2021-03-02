let hamburger = document.querySelector(".hamburger");
let hamburger_img = document.querySelector(".hamburger img:first-child");
let hamburger_img_2 = document.querySelector(".hamburger img:last-child");
let drop_menu = document.querySelector("header nav ul");

hamburger.addEventListener("click", () => {
    if (hamburger_img.style.display !== "none") {
        hamburger_img.style.display = "none";
        hamburger_img_2.style.display = "block";
        drop_menu.style.display = "flex";
    } else {
        hamburger_img.style.display = "block";
        hamburger_img_2.style.display = "none";
        drop_menu.style.display = "none";
    }
});
