const runButton = document.getElementById('run')
const confirmButton = document.getElementById('confirm-button')
const confirmSelection = document.getElementById('confirm')

runButton.onclick = function() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    })        
}

confirmButton.addEventListener('click', function() {
    confirmSelection.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})

document.onwheel = function() {
    if (section1.getBoundingClientRect().top < window.innerHeight / 2) {
        /*добавление класса*/
        section1.classList.add('show')
    }
}

const maimMenu = document.querySelector('.main-menu')
const hamburger = document.querySelector ('.hamburger-checkbox')
hamburger.onclick = function() {
    if (hamburger.checked) {
        maimMenu.classList.add('show')
   }
   else {
       maimMenu.classList.remove('show')
   }
} 
