function showProductScreenSizes(product) {
    let result = "";

    for (let i = 0; i < product.availableSizes.length; i++) {
        const sizeInInch = product.availableSizes[i];
        const sizeInCm = (sizeInInch * 2.54).toFixed(0);

        result += sizeInInch + " inch (" + sizeInCm + "cm)";

        if (i < product.availableSizes.length - 1) {
            result += " | ";
        }
    }

    return result;
}

export default showProductScreenSizes;
