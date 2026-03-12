// NAVBAR cambio de color al hacer scroll

window.addEventListener("scroll", () => {

const navbar = document.querySelector(".navbar")

if(window.scrollY > 60){

navbar.classList.add("scrolled")

}else{

navbar.classList.remove("scrolled")

}

})



// Crear barras del gráfico

const chart = document.getElementById("chart")

for(let i=0;i<12;i++){

let bar = document.createElement("div")

bar.classList.add("bar")

bar.style.height = Math.floor(Math.random()*120)+30+"px"

chart.appendChild(bar)

}



// Futuro login

document.querySelector(".panel-btn").addEventListener("click",()=>{

alert("Aquí se conectará el sistema de login")

})