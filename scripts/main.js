import { getAttractions, getParkAreas, getServices, getGuests } from "./database.js";
import { currentGuestsList } from "./guests.js";
import { parkAreasList } from "./parkAreas.js";
import { serviceString } from "./services.js";


const mainContainer = document.querySelector("#container")

const applicationHTML = `

<section class="Areas">
    
        <h2>Park Areas</h2>
        ${parkAreasList()}
    
</section>`


const asideContainer = document.querySelector("#guests")

const guestHTML = 
`
<section class="guests">
    <section>
    <h2>Guests</h2>
        ${currentGuestsList()}
</section>
</section>`

const servicesContainer = document.querySelector("#services")

const servicesHTML = 
`<ul class="comma-list"><div class="services"> Park Services: </div>${serviceString()}
</ul>

`


mainContainer.innerHTML = applicationHTML
asideContainer.innerHTML = guestHTML
servicesContainer.innerHTML = servicesHTML

