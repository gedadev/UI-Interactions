import './style.css';
import {Navbar} from './app/navbar';
import {Slider} from './app/slider';

const drop = document.querySelector('#drop');
const subitems = document.querySelector('#submenu');
const img = document.querySelector('#img');
const prevArrow = document.querySelector('#left-arrow');
const nextArrow = document.querySelector('#right-arrow');

let navbar = new Navbar(drop, subitems);
navbar.submenu();

let slider = new Slider(require.context('./assets/img', false, /\.(png|jpg|svg)$/), img, prevArrow, nextArrow);
slider.run();
