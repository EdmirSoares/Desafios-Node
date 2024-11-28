import { connectToDatabase } from "./database/data.js"

const main = async () => {
    //await connectToDatabase('neji', '1234')
    await connectToDatabase(process.env.USERDATABASE, process.env.PASSWORDDATABASE)
}

main()