function toggleMode() {
    const body = document.body;


    const Dark_button = document.getElementById("Dark-Mode");
    const Light_button = document.getElementById("Light-Mode");
    if (body.className==="light-mode") {
        body.className="dark-mode";
        Light_button.style.display="block";
        Dark_button.style.display="none";
    } else {
        body.className="light-mode";    
        Light_button.style.display="none";
        Dark_button.style.display="block";
    }

}
function topfunction(val) {

    document.body.scrollTop=val;
    document.documentElement.scrollTop=val;
}
