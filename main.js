import render from './src/app'
import { handleTheme } from './src/components/navbar';
import './style.css'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
}

document.querySelector('#app').innerHTML = render();

handleTheme(document.querySelector('#btn-theme'));