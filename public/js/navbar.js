window.onscroll = function () {
    var navbar = document.getElementById("navbar");
    var navbar1 = document.getElementById("navbar1")
    var sticky = navbar.offsetTop;

    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }


}