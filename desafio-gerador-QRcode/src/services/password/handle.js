import { permittedCharacters } from "./utils/permittedCharacters.js"

const handle = async () => {
    let characters = await permittedCharacters()
    let password = ""
    let passwordLength = process.env.PASSWORD_LENGTH

    for (let i = 0; i < passwordLength; i++) {
        const index = Math.floor(Math.random() * characters.length + 1)
        password += characters[index]
    }

    return password
}

export {
    handle
}