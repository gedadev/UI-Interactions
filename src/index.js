import './style.css';

let drop = document.querySelector('#drop');
let subitems = document.querySelector('#submenu');

class Navbar {
    constructor(){
        this.drop = drop;
        this.subitems = subitems;
    }
    
    submenu() {
        drop.addEventListener('mouseover', () => {
            if (subitems.classList.contains('visible')) {
                subitems.classList.remove('visible');
            } else {
                subitems.classList.add('visible');
            };
        });    
    }
}

let run = new Navbar(drop, subitems);
run.submenu();