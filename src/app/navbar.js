export class Navbar {
    
    constructor(navbar, views, subitems) {
        this.navbar = navbar;
        this.views = views;
        this.subitems = subitems;
    }

    run() {
        this.submenu();
        this.toggleViews();
    }

    toggleViews() {
        for (let i = 0; i < this.navbar.children.length; i++) {
            this.navbar.children[i].addEventListener('click', () => {
                switch (i) {
                    case 0:
                        console.log(i);
                        this.views[0].style.display = "flex";
                        this.views[1].style.display = "none";
                        break;
                    case 1:
                        this.views[0].style.display = "none";
                        this.views[1].style.display = "block";
                        break;
                    default:
                        break;
                }
            });
        }
    }

    submenu() {
        this.navbar.children[2].addEventListener('click', () => {
            if (this.subitems.classList.contains('visible')) {
                this.subitems.classList.remove('visible');
            } else {
                this.subitems.classList.add('visible');
            };
        });    
    }
}