const yesBtn = document.querySelector("#yesBtn");

yesBtn.addEventListener("click",function () {
    alert("siempre tuve fe en que dirias que si :3")
});

const noBtn =document.querySelector("#noBtn");

noBtn.addEventListener("mouseover",function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty("top",randomY+"%");
    noBtn.style.setProperty("left",randomX+"%");
    noBtn.style.setproperty("transform",`traslate(-${randomX}%,-${randomY}%)`);
})