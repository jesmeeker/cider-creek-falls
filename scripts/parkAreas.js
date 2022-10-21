import { getParkAreas, getAttractions, getServices } from "./database.js";

let areas = getParkAreas()
let attractions = getAttractions()
let services = getServices()

//export and define a function that creats an HTML String
//Park Area Name followed by Attractions in the Area and Service Tags

export const parkAreasList = () => {
    let parkAreasHTML = ""
    
    for (const area of areas) {
        parkAreasHTML += `<h3>${area.name}</h3>`
        parkAreasHTML += `<h4>Attractions</h4>`

        for (const attraction of attractions) {
            if (area.id === attraction.parkAreasId) {
                parkAreasHTML += `<div>${attraction.name}</div>`
                for (const service of services) {

                    if (service.attractionsId === attraction.id)
                    
                    parkAreasHTML += `<li>${service.name}</li>`
                }
            }   
        }
    }
    return parkAreasHTML
}