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

const fulldata = await getData()

console.log(fulldata)

export default function content() {
    return /*html*/`
        <main class="main">

            ${card(fulldata[0])}

        </main>
    `;
}