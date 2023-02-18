import './style.css';
import { Navbar } from './app/navbar';
import { Slider } from './app/slider';
import { Validations } from './app/formValidation';

const subitems = document.querySelector('#submenu');
const navBar = document.querySelector('#navbar');
const views = document.querySelectorAll('section');

const context = require.context('./assets/img', false, /\.(png|jpg|svg)$/);
const img = document.querySelector('#img');
const prevArrow = document.querySelector('#left-arrow');
const nextArrow = document.querySelector('#right-arrow');
const nav = document.querySelector('#nav');

const form = document.querySelector('#form');
const errorMSg = document.querySelectorAll('.error');

let navbar = new Navbar(navBar, views, subitems);
navbar.run();

let slider = new Slider(context, img, prevArrow, nextArrow, nav);
slider.run();

let data = new Validations(form, errorMSg);
data.run();