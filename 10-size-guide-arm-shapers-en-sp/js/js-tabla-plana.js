const navSwhiche = document.querySelector('.toggle-state');
const navTabla1 = document.querySelector('.tableActive');
const navTabla2 = document.querySelector('.tableOff');
var activo = 'off';

navSwhiche.addEventListener('click', toggleTablaM);

function toggleTablaM() {
    if (activo == 'off') {
        navTabla1.classList.remove('tableActive');
        navTabla1.classList.add("tableOff");
        activo = 'on';
        navTabla2.classList.add("tableActive");
        navTabla2.classList.remove("tableOff");
    } else {
        navTabla2.classList.remove('tableActive');
        navTabla2.classList.add("tableOff");
        activo = 'off';
        navTabla1.classList.add("tableActive");
        navTabla1.classList.remove("tableOff");
    }
}