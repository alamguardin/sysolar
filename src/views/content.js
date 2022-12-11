import './content.css'
import { card } from "../components/card";

async function getData() {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '452aad718cmsheddb5eb5ca5d56dp1f236bjsna39f9a97b171',
            'X-RapidAPI-Host': 'planets-info-by-newbapi.p.rapidapi.com'
        }
    };

    let data;

    const response = await fetch('https://planets-info-by-newbapi.p.rapidapi.com/api/v1/planet/list', options);

    data = await response.json();

    return await data;
}

function addCard(cards) {
    let fragment = '';

    cards.forEach(element => {
        fragment += card(element);
    });

    return fragment;
}

export function handleCard() {
    let cardButtons = document.querySelectorAll('.card__button')

    cardButtons.forEach(element => element.addEventListener('click', (e) => {
        if (e.target.className === 'card__button') {
            e.target.parentNode.parentNode.classList.toggle('active');
        } 
        else if (e.target.className === 'card__btn-text' || 
        e.target.className === 'bx bx-right-arrow-alt') {
            e.target.parentNode.parentNode.parentNode.classList.toggle('active');
        }
        else {
            console.log(e.target)
        }

        
    }))

    console.log(cardButtons)
}

const fulldata = await getData()

console.log(fulldata)

export default function content() {
    return /*html*/`
        <main class="main">

            ${addCard(fulldata)}
            ${handleCard()}

        </main>
    `;
}