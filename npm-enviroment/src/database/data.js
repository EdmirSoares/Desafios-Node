const connectToDatabase = async (user, password) => {
    if(user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) {
        console.log('Connected to database')
    } else {
        console.log("Falha de login! Não foi possível se conectar ao banco de dados")
    }
}

export{
    connectToDatabase
}