import { inventory } from "../constants/inventory.js";

function toSellTvNumber() {
    let stocknumber = 0;
    let selltvnumber = 0;

    for (let i in inventory) {
        stocknumber += inventory[i].originalStock;
        selltvnumber += inventory[i].sold;
    }

    let difference =  stocknumber - selltvnumber;

    return difference;
}

export {toSellTvNumber};


