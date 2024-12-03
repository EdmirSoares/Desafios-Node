import prompt from "prompt";
import { promptSchemaMain } from "./prompts-schema/promptSchemaMain.js";
import { createQRCode } from "./services/QRCode/create.js";
import { createPassword } from "./services/password/create.js";

const main = async () => {
    prompt.get(promptSchemaMain, async (err, choose) => {
        if (choose.select == 1) {
            await createQRCode();
        }
        if (choose.select == 2) {
            await createPassword()
        }

        if(err){
            console.log("\nHouve um erro na execução da aplicação!\n")
            console.log(err)
        }
    })

    prompt.start()
}

main()