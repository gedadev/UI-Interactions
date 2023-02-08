export class Slider {
    
    navElements = [];

    constructor(images, img, prevArrow, nextArrow, nav) {
        this.images = images;
        this.img = img;
        this.prevArrow = prevArrow;
        this.nextArrow = nextArrow;
        this.nav = nav;
    }
    
    importImages(r) {
        return r.keys().map(r);
    }
    
    run() {
        const gallery = this.importImages(this.images);
        this.arrowFunction(gallery);
        this.genNav(gallery);
        this.img.src = gallery[0];
        this.navFunction(gallery);
        let interval = this.startSlider(gallery);
        this.navSelector(gallery);
    }
    
    startSlider(gallery) {        
        let interval = setInterval(() => {
            this.img.src = this.nextImage(gallery);
            this.navFunction(gallery);
        }, 5000);
        return interval;
    }
    
    genNav(gallery) {
        gallery.forEach(() => {
            const i = document.createElement('i');
            i.classList.add('fa-solid');
            i.classList.add('fa-circle');
            this.nav.appendChild(i);
            this.navElements.push(i);
        });
    }

    navFunction(gallery) {
        for (let i = 0; i < gallery.length; i++) {
            if (gallery[i] === this.img.src) {
                this.navElements[i].classList.remove('fa-circle');
                this.navElements[i].classList.add('fa-circle-dot');
            } else {
                this.navElements[i].classList.add('fa-circle');
                this.navElements[i].classList.remove('fa-circle-dot');
            }
        }
    }

    navSelector(gallery) {
        this.navElements.forEach((element, index) => {
            element.addEventListener('click', () => {
                this.img.src = gallery[index];
                this.navFunction(gallery);
            });
        });
    }

    arrowFunction(gallery) {
        this.nextArrow.addEventListener(('click'), () => {
            this.img.src = this.nextImage(gallery);
            this.navFunction(gallery);
        });
        this.prevArrow.addEventListener(('click'), () => {
            this.img.src = this.prevImage(gallery);
            this.navFunction(gallery);
        });
    }
    
    nextImage(gallery) {
        for (let i = 0; i < gallery.length; i++) {
            if (gallery[i] === this.img.src) {
                if (gallery[i + 1] === undefined) {
                    return gallery[0];
                } else {
                    return gallery[i + 1];
                }
            }
        }
    }

    prevImage(gallery) {
        for (let i = 0; i < gallery.length; i++) {
            if (gallery[i] === this.img.src) {
                if (i === 0) {
                    return gallery[gallery.length - 1];
                } else {
                    return gallery[i - 1];
                }
            }
        }
    }  
}
