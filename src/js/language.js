import { langArr } from "./translation";
const allLangs = ['en', 'ua'];
let currentLang = localStorage.getItem('language') || navigator.language || 'en';

const langBtn = document.querySelectorAll('[data-btn]');
const currentPatName = window.localStorage.pathname;
let currentText = {};

// console.log(currentLang);

function checkPagePathName() {
    switch (currentPatName) {
        case `/index.html`:
            currentText = langArr;
            break;        
        case `/my_library.html`:
            currentText = langArr;
            break;     
        default:
            currentText = langArr;
            break;
    }
}
checkPagePathName();

function changeLang() {
    for (const key in currentText) {        
        const e = document.querySelector(`[data-lang=${key}]`);
        if(e) {
            e.textContent = currentText[key][currentLang];
        }
    }
}
changeLang();

// const inputSearch = document.querySelector('.search__field');
// const inputPlaceholder = inputSearch.getAttribute('placeholder');
// inputPlaceholder.textContent = langArr['search'][currentLang];

// console.log(inputPlaceholder);

langBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        currentLang = e.target.dataset.btn;

        localStorage.setItem('language', e.target.dataset.btn)
        resetActiveClass(langBtn, 'btn-active');
        btn.classList.add('btn-active');
        changeLang();
    })
});

function resetActiveClass(arr, activeClass) {
    arr.forEach(e=>{e.classList.remove(activeClass)})
}

function checkActiveLangBtn() {
switch (currentLang) {
    case 'en':
        document.querySelector(`[data-btn='en']`).classList.add('btn-active');
        break;
        case 'ua':
            document.querySelector(`[data-btn='en']`).classList.add('btn-active');
            break;
    default:
        document.querySelector(`[data-btn='en']`).classList.add('btn-active');
        break;
}
}
checkActiveLangBtn()


export {};
