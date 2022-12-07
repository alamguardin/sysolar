import { navbar } from "./components/navbar";
import home from "./views/home";


export default function render() {
    return `
    ${navbar()} 
    ${home()}
    `;
}