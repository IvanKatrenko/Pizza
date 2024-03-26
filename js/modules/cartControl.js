

export const cartControl = {
    cartData: JSON.parse(localStorage.getItem('cart') || '[]'),
    addCart(product) {
        this.cartData.push(product)
        localStorage.setItem('cart', JSON.stringify(this.cartData))
    },
    removeCart() {
        this.cartData = []
        localStorage.setItem('cart', JSON.stringify(this.cartData))
    }
}

//stingify => string !!!
//parse => object !!!