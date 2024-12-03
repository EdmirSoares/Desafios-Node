const promptSchemaMain = [
    {
        name: "select",
        description: "Escolha a ferramenta (1 - QR Code ou 2 - PASSWORD)",
        pattern: /^[1-2]+$/,
        message: "Escolha apenas entre 1 e 2!",
        required: true
    }
]

export {
    promptSchemaMain
}