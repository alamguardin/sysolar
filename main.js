import render from './src/app'
import { handleTheme } from './src/components/navbar';
import './style.css'

if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add('dark')
}

document.querySelector('#app').innerHTML = render(window.location.hash);

window.addEventListener('hashchange', () => {
    document.querySelector('#app').innerHTML = render(window.location.hash);
})

handleTheme(document.querySelector('#btn-theme'));