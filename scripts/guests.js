import { getGuests } from "./database.js";

let guests = getGuests();

export const currentGuestsList = () => {
    let currentGuestsHTML = "<ul>"

    for (const guest of guests) {
        if (guest.currentGuest === true) {
        currentGuestsHTML += `<li>${guest.firstName} ${guest.lastName}</li>`
    }

    
}
currentGuestsHTML += "</ul>"
    return currentGuestsHTML
}