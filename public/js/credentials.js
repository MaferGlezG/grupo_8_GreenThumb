window.onload = function () {
    var user = req.session.userLogged
    var credsense = document.getElementById("credentials-sensitive");
    if (user.user_category_id == "3") {
        console.log("credentials not met")
        credsense.classList.add("invisible")


    }
}