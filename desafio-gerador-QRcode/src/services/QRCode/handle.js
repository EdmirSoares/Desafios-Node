import qr from "qrcode-terminal"

const handle = async(err, result)=>{
    if(err){
        console.log('error on application')
        return;
    }

    const isSmall = result.type == 2
    qr.generate(result.link,{small: isSmall}, (qrcode)=>{
        console.log('Qr Code gerado com sucesso: \n')
        console.log(qrcode)
    })
}

export{
    handle
}