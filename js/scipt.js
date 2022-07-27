const cartProduct = document.querySelectorAll('.cart__product');

function increment(count) {
    return ++count;
}

function descrement(count) {
    if (count <= 0) {
        return 0;
    }

    return --count;
}

if (cartProduct) {
    cartProduct.forEach((elem, index) => {
        console.log(elem);
        const count = document.querySelectorAll(`.cart__product_number`)[index];
        console.log(count.value);

        let plus = document.querySelectorAll('.cart__product_increment')[index];
        let minus = document.querySelectorAll('.cart__product_decrement')[index];

        if (plus) {
            plus.addEventListener('click', e => count.value = increment(count.value))
        }

        if (minus) {
            minus.addEventListener('click', e => count.value = descrement(count.value))
        }
    })   
}