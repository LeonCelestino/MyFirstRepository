var país = document.querySelector("input#country")
var click = document.querySelector(".box");

function clicar()
{
    click.innerHTML=`Você nasceu no ${país.value}!`
    click.style.fontSize = "xx-large"
}