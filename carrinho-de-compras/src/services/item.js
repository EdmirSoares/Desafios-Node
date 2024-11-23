// Casos de uso dos Itens

// -> Criar item co subtotal correto
const createItem = async (itemName, itemPrice, itemQuantity) => {
    return {
        itemName,
        itemPrice,
        itemQuantity,
        subtotal: () => itemPrice * itemQuantity
    }
}

export {
    createItem
}