import {inventory} from "../constants/inventory.js";



// let counter = 0

function boughttvs() {
    let boughttvnumber =0
    for (let i in inventory) {
        boughttvnumber += inventory[i].originalStock;
    }
    return boughttvnumber;
}
export {boughttvs}