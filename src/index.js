import './style.css';
import {Navbar} from './app/navbar';

const drop = document.querySelector('#drop');
const subitems = document.querySelector('#submenu');

let navbar = new Navbar();
navbar.submenu(drop, subitems);
