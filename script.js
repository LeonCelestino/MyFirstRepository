var country = document.querySelector("input#country")
var click = document.querySelector(".box");

function click()
{
    click.innerHTML=`You're from ${country.value}!`
    click.style.fontSize = "xx-large"
}
