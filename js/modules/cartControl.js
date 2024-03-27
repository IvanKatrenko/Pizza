

export const cartControl = {
    cartData: JSON.parse(localStorage.getItem('cart') || '[]'),
    addCart(product) {
        this.cartData.push(product)
        localStorage.setItem('cart', JSON.stringify(this.cartData))
    },
    removeCart(cartId) { // remove cart
        this.cartData = this.cartData.filter(item => item.cartId !== cartId);
        // remove product
        localStorage.setItem('cart', JSON.stringify(this.cartData))
    },
    clearCart() { // clear cart
        this.cartData = [];
        localStorage.setItem('cart', JSON.stringify(this.cartData))
    }
}
//stingify => string !!!
//parse => object !!!