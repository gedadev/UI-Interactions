export class Slider {
    
    constructor(images) {
        this.images = images;
    }
    
    importImages(r) {
        return r.keys().map(r);
    }
    
    run() {
        const gallery = this.importImages(this.images);
        this.displayImage(gallery);
    }
    
    displayImage(gallery) {
        const img = document.querySelector('#img');
        img.src = gallery[0];

        setInterval(() => {
            img.src = this.nextImage(img.src, gallery);  
        }, 2000);
    }
    
    nextImage(currentImg, gallery) {
        for (let i = 0; i < gallery.length; i++) {
            if (gallery[i] === currentImg) {
                if (gallery[i + 1] === undefined) {
                    return gallery[0];
                } else {
                    return gallery[i + 1];
                }
            }
        }
    }   
}
