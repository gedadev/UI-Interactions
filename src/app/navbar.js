export class Navbar {
    
    submenu(drop, subitems) {
        drop.addEventListener('click', () => {
            if (subitems.classList.contains('visible')) {
                subitems.classList.remove('visible');
            } else {
                subitems.classList.add('visible');
            };
        });    
    }
}