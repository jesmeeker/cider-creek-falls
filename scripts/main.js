import { getAttractions, getParkAreas, getServices, getGuests } from "./database.js";
import { currentGuestsList } from "./guests.js";
import { parkAreasList } from "./parkAreas.js";


const mainContainer = document.querySelector("#container")

const applicationHTML = `

<article class="details">
    <section class="detail--column list details__cities">
        <h2>Park Areas</h2>
        ${parkAreasList()}
    </section>

    </section><section class="detail--column list details__cities">
    <h2>Guests</h2>
        ${currentGuestsList()}
</section>
</article>


`

mainContainer.innerHTML = applicationHTML

