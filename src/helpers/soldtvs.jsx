import {inventory} from "../constants/inventory.js";



// let counter = 0

function soldtvs() {
    let soldtvnumber =0
    for (let i in inventory) {
        soldtvnumber += inventory[i].sold;
    }
    return soldtvnumber;
}
export {soldtvs}




