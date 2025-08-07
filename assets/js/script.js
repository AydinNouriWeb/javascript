var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

const head11 = document.querySelector('#accordion-header11')
const body11 = document.querySelector('#accordion-body11')
const chevronRight11 = document.querySelector('#iright11')
const chevronDown11 = document.querySelector('#idown11')

const head22 = document.querySelector('#accordion-header22')
const body22 = document.querySelector('#accordion-body22')
const chevronDown22 = document.querySelector('#idown22')
const chevronRight22 = document.querySelector('#iright22')

const head33 = document.querySelector('#accordion-header33')
const body33 = document.querySelector('#accordion-body33')
const chevronDown33 = document.querySelector('#idown33')
const chevronRight33 = document.querySelector('#iright33')


head11.addEventListener('click', closeBody11)

head22.addEventListener('click', closeBody22)

head33.addEventListener('click', closeBody33)

flag = 0
function closeBody11() {
    if (flag == 0) {
        body11.style.display = 'none'
        chevronDown11.style.display = 'none'
        chevronRight11.style.display = 'block'
        flag = 1
    } else {
        body11.style.display = 'block'
        chevronDown11.style.display = 'block'
        chevronRight11.style.display = 'none'
        flag = 0
    }
}
function closeBody22() {
    if (flag == 0) {
        body22.style.display = 'none'
        chevronDown22.style.display = 'none'
        chevronRight22.style.display = 'block'
        flag = 1
    } else {
        body22.style.display = 'block'
        chevronDown22.style.display = 'block'
        chevronRight22.style.display = 'none'
        flag = 0
    }
}
function closeBody33() {
    if (flag == 0) {
        body33.style.display = 'none'
        chevronDown33.style.display = 'none'
        chevronRight33.style.display = 'block'
        flag = 1
    } else {
        body33.style.display = 'block'
        chevronDown33.style.display = 'block'
        chevronRight33.style.display = 'none'
        flag = 0
    }
}

