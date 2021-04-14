const db = require('../Sheets/Database')

//abc().then(doc => console.log(doc.title))
async function opa(uniorg){
    const linhas = await db.buscarUniorgs(uniorg)

    console.log(linhas)
}

opa(10954)


