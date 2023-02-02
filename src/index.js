import './style.css';
import {Navbar} from './app/navbar';
import {Slider} from './app/slider';

const drop = document.querySelector('#drop');
const subitems = document.querySelector('#submenu');

let navbar = new Navbar();
navbar.submenu(drop, subitems);

let slider = new Slider();
slider.run();
