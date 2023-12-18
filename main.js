console.log("hello");
 light = document.getElementById("light")
 body = document.getElementById("body")

light.addEventListener("click", (eo) => {
    
    body.classList.toggle("light")
})