//Ações:

//Casos de uso:

// ✔ -> adicionar item no carrinho
const addItem = async (userCart, item) => {
    userCart.push(item);
}

// -> deletar um item do carrinho
const deleteItem = async (userCart, name) => {

    const index = userCart.findIndex((item) =>
        item.itemName === name
    );

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}
// -> remover um item do carrinho
const removeItem = async (userCart, name) => {
    const index = userCart.findIndex((item) => {
        return item.itemName === name
    })

    if (index === -1) {
        console.log('Item não encontrado! \n')
        return
    }

    if (index >= 1 && index < userCart.length) {
        if (userCart[index].itemQuantity === 1) {
            deleteItem(userCart, name)
            return
        }
        userCart[index].itemQuantity -= 1
    }
}

// -> calcular total
const calculateTotal = async (userCart) => {

    const result = userCart.reduce((acc, value) =>
        acc + value.subtotal(), 0
    )
    console.log(`💰 Valor Total do Carrinho: ${result}`)
}

const displayCart = async (userCart) => {
    console.log(`🛒 Shoppe cart list:`)
    userCart.forEach((value, index) => {
        console.log(`📌 #${index + 1} Produto: ${value.itemName}`)
        console.log(`🔸 Unidade: R$ ${value.itemPrice}`)
        console.log(`🔹 Quantidade: ${value.itemQuantity}`)
        console.log(`💵 Valor Total: ${value.subtotal()}\n`)
    });
    calculateTotal(userCart)
}

export {
    addItem,
    calculateTotal,
    removeItem,
    deleteItem,
    displayCart
}
