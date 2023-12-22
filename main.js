console.log("hello");
const savedLightMode = localStorage.getItem("lightMode");


if (savedLightMode) {
    document.getElementById("body").classList.toggle("light", savedLightMode === "true");
}

const body = document.getElementById("body");

light.addEventListener("click", () => {
    
    body.classList.toggle("light");

    const isLightMode = body.classList.contains("light");
    localStorage.setItem("lightMode", isLightMode.toString());
});
