import './style.css';
import {Navbar} from './app/navbar';
import {Slider} from './app/slider';

const drop = document.querySelector('#drop');
const subitems = document.querySelector('#submenu');

let navbar = new Navbar(drop, subitems);
navbar.submenu();

let slider = new Slider(require.context('./assets/img', false, /\.(png|jpg|svg)$/));
slider.run();
