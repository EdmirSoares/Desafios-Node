import { createItem } from "./src/services/item.js"
import * as cartService from "./src/services/cart.js"

const myCart = [];
const myWhishList = []

console.log("Wellcome to the your Shopee Cart! \n");

const item1 = await createItem('hotwhells ferrari', 20.99, 1)
const item2 = await createItem('hotwhells lamborghini', 39.99, 3)

await cartService.addItem(myCart, item1)
await cartService.addItem(myCart, item2)

// console.log("Shoppe cart total is:")
// await cartService.calculateTotal(myCart)
//await cartService.deleteItem(myCart, item2.itemName)
//await cartService.calculateTotal(myCart)

await cartService.removeItem(myCart, item2.itemName)
await cartService.removeItem(myCart, item2.itemName)
await cartService.displayCart(myCart)