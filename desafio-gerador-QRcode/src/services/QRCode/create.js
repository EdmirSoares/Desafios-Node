import prompt from "prompt"
import { promptSchemaQRCode } from "../../prompts-schema/promptSchemaQRCode.js"
import { handle } from "./handle.js"

const createQRCode = async ()=>{
    prompt.get(promptSchemaQRCode, handle)

    prompt.start()
}

export {createQRCode}