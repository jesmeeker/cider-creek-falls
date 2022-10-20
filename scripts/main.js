import { getAttractions, getParkAreas, getServices, getGuests } from "./database.js";
import { currentGuestsList } from "./guests.js";

// let attractions = getAttractions()
// let parkAreas = getParkAreas()
// let services = getServices()
// let guests = getGuests()

// console.log(attractions)
// console.log(parkAreas)
// console.log(services)
// console.log(guests)

const mainContainer = document.querySelector("#container")

const applicationHTML = `

<article class="details">
    <section class="detail--column list details__cities">
        <h2>Park Areas</h2>
        ${getParkAreas()}}
    </section>
    <section class="detail--column list details__cities">
        <h2>Park Services</h2>
        ${getServices()}
    </section>
    <section class="detail--column list details__cities">
        <h2>Attractions</h2>
        ${getAttractions()}
    </section><section class="detail--column list details__cities">
    <h2>Guests</h2>
        ${currentGuestsList()}
</section>
</article>

<article class="assignments">
    <h2>Current Assignments</h2>
   
</article>
`

mainContainer.innerHTML = applicationHTML