export class Slider {

    importImages(r) {
        return r.keys().map(r);
    }
    
    displayImage(images) {
        const imgNodes = [];
        images.forEach((element, i) => {
            i = new Image();
            i.src = element;
            i.classList.add('img');
            imgNodes.push(i);
        });
        
        let slide = document.querySelector('#img');    
        slide.appendChild(imgNodes[0]);
        
    }
    run() {
        let images = this.importImages(require.context('../assets/img', false, /\.(png|jpg|svg)$/));
        this.displayImage(images);
    }

}
