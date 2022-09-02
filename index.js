let minus = document.querySelector('.minus')
let plus = document.querySelector('.plus')
let rest = document.querySelector('.restart')
let text = document.querySelector('.text')
plus.onclick = () => {
    text.innerHTML++
}
minus.onclick = () => {
    text.innerHTML--
}
rest.onclick = () => {
    text.innerHTML = 0
}