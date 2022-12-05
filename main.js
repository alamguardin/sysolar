import render from './src/app'
import { handleTheme } from './src/components/navbar';
import './style.css'

document.querySelector('#app').innerHTML = render();

handleTheme(document.querySelector('#btn-theme'));