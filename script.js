var country = document.querySelector("input#country")
var click = document.querySelector(".box");

function tralala()
{
    click.innerHTML=`You're from ${country.value}!`
    click.style.fontSize = "xx-large"
}
