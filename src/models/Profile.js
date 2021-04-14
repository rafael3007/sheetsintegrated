
const db = require('../Sheets/Database');
module.exports = {
    async get(id) {
        var profile = {} ;
        const dados = await db.buscarProfile()
        for(var i=0; i< dados.length; i++){
            if(Number(dados[i].ID) === Number(id)){
                profile = dados[i]
            }else{
                console.log('Usuario não cadastrado')
            }
        }
        return profile
    },
    async atualizar(newData) {
        await db.atualizarProfile(newData)
    },
    async create(newData) {
        await db.adicionarProfile(newData)
    },
    async deleteRow(newData){
        await db.removerProfile(newData)
    }
}