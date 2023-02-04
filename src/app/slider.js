export class Slider {
    
    constructor(images, img, prevArrow, nextArrow) {
        this.images = images;
        this.img = img;
        this.prevArrow = prevArrow;
        this.nextArrow = nextArrow;
    }
    
    importImages(r) {
        return r.keys().map(r);
    }
    
    run() {
        const gallery = this.importImages(this.images);
        this.img.src = gallery[0];
        let interval = this.startSlider(gallery);
        this.arrowFunction(gallery);
    }
    
    startSlider(gallery) {        
        let interval = setInterval(() => {
            this.img.src = this.nextImage(gallery);
        }, 5000);
        return interval;
    }

    arrowFunction(gallery) {
        this.nextArrow.addEventListener(('click'), () => {
            this.img.src = this.nextImage(gallery);
        });
        this.prevArrow.addEventListener(('click'), () => {
            this.img.src = this.prevImage(gallery);
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
