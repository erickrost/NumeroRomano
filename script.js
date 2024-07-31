const btn = document.getElementById("button")
const romanEl = document.getElementById("numeroRomano")
const realEl = document.getElementById("numeroReal")

btn.onclick = function () {
    let value = romanEl.value.toLowerCase()

    if (value === "v") {
    realEl.textContent = 5
    } else if (value === "i"){
        realEl.textContent = 1
    } else if (value === "x"){
        realEl.textContent = 10
    }
    else { 
    realEl.textContent = ("vá pra porra")
    }
}