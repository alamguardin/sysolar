import { navbar } from "./components/navbar";
import content from "./views/content";
import home from "./views/home";


export default function render(hash) {
    return `
    ${navbar()} 
    ${hash === '#content' ? content() : home() }
    `;
}