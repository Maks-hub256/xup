let burgerButton = document.querySelector(".header__burger")
let navbar = document.querySelector(".header__navbar")

function blockSroll() {
    document.querySelector("html").classList.add("page-block")
    document.querySelector("body").classList.add("page-block")
}

function unblockScroll() {
    document.querySelector("html").classList.remove("page-block")
    document.querySelector("body").classList.remove("page-block")
}

function checkScroll() {
    if(document.querySelector("html").classList.contains("page-block"))
        unblockScroll()
    else
        blockSroll()
}

function burgerAnimate() {
    document.querySelectorAll(".header__burger-item").forEach((elem) => elem.classList.toggle("burger-animate"))
}

burgerButton.onclick = () =>{
    checkScroll()
    burgerAnimate()
    navbar.classList.toggle("navbar-active")
}
