let nav_btn = document.getElementById('nav-close')
let stick = document.querySelectorAll('.stick')
let nav_list = document.querySelectorAll('.mid-nav')

nav_btn.addEventListener('click', () => {
    if (nav_list[0].classList.contains('hidden')) {
        for (let i of nav_list) {
            i.classList.remove('hidden')
            i.classList.add('flex')
        }
        for (let j of stick){
            j.classList.add('cross')
        }
    } else {
        for (let i of nav_list) {
            i.classList.remove('flex')
            i.classList.add('hidden')
        }
        for (let j of stick){
            j.classList.remove('cross')
        }
    }
})



