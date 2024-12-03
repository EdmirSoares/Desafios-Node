import { handle } from "./handle.js"

const createPassword = async () => {
    console.log("\n### Password ###")
    const password = await handle()
    console.log(password)
}

export{
    createPassword
}