const body = document.getElementsByTagName("body")[0]
const btn = document.getElementById("btn")
const img = document.getElementById("btn-img")

console.log("Hey")

function changeTheme(){
    body.classList.toggle("light")
    
    if(body.classList.contains("light")){
        localStorage.setItem("theme", "light")
    }else{
        localStorage.removeItem("theme")
    }

    setTheme()
}

function setTheme(){
    let theme = localStorage.getItem("theme")
    if(theme == "light"){
        body.classList.add("light")
        img.src = "images/dark.svg"
    }else{
        img.src = "images/light.svg"
    }
}

setTheme()
btn.addEventListener('click', changeTheme)