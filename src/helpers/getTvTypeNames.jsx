import react from "react";


//


function getTvTypeNames(inventory){
    const tvBrand = inventory.map((tv) => {
        return tv.type

    })
    console.log(tvBrand)
}

export default getTvTypeNames;