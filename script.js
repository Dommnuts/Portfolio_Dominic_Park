const Light_button = document.getElementById("Light-Mode");
Light_button.style.display = "none";

``
function toggleMode() {
    const body = document.body;


    const Dark_button = document.getElementById("Dark-Mode");
    const Light_button = document.getElementById("Light-Mode");
    if (body.className === "light-mode") {
        body.className = "dark-mode";
        Light_button.style.display = "block";
        Dark_button.style.display = "none";
    } else {
        body.className = "light-mode";
        Light_button.style.display = "none";
        Dark_button.style.display = "block";
    }

}
function topfunction(val) {

    document.body.scrollTop = val;
    document.documentElement.scrollTop = val;
}
document.getElementById("creditcardinfo").addEventListener("change", function(){
    console.log(this.checked)
    if (this.checked) {
        document.getElementById("credit_card").style.display = "inherit"
        document.getElementById("Credit").style.display = "inherit"
    } else {
        document.getElementById("credit_card").style.display = "none"
        document.getElementById("Credit").style.display = "none"
    }
})
document.getElementById("moneyinfo").addEventListener("change", function(){
    console.log(this.checked)
    if (this.checked) {
        document.getElementById("money_info").style.display = "inherit"
        document.getElementById("Money").style.display = "inherit"
    } else {
        document.getElementById("money_info").style.display = "none"
        document.getElementById("Money").style.display = "none"
    }
})
