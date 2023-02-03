export class Navbar {
    
    constructor(drop, subitems) {
        this.drop = drop;
        this.subitems = subitems;
    }

    submenu() {
        this.drop.addEventListener('click', () => {
            if (this.subitems.classList.contains('visible')) {
                this.subitems.classList.remove('visible');
            } else {
                this.subitems.classList.add('visible');
            };
        });    
    }
}