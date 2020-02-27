/**
 
    Endpoint : https://www.mocky.io/v2/5da58a29350000bdf74a7bbe

    1. Cross match the groups of numbers in the "numbers" list with the list of "clients" by matching 
    the number to the client id. Output the full names of the clients into the HTML, one group per 
    div and comma delimited.

    2. Create a text input and a "Fetch" button in the HTML. Clicking the Fetch button will return the 
    full name of the client corresponding to the number entered in the text input and append it to the HTML in a div.

    3. Find the difference between the diagonal sums of the numbers array. 

*/

import { App } from './app.js'

document.addEventListener('DOMContentLoaded', _=> {
    const app = new App()
    app.init()
})
