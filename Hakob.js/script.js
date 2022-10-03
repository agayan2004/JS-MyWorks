{// mobail menu 
let foc = document.querySelectorAll('#focus')
let menu = document.getElementById('myLinks')
let clous = document.getElementById('clous')

for (let i = 0; i < foc.length; i++) {
    focs(foc[i])
}

clous.addEventListener('click', function() {
    menu.style.display = 'none'
})
function focs (el) {
    el.addEventListener('focus', function () {
        menu.style.display = 'block'
    })
    el.addEventListener('focusout', function () {
        menu.style.display = 'none'
    })
}

















}




