//importação de onde ira guardar os dados
const Planilhas = require('../Sheets/config')

const db = require('../Sheets/Database')

module.exports = {

    async get() {
        const data = await db.buscarBD()
        return data
    },
    async update(newRow) {
        //newRow é um objeto com as colunas como atributos
        await db.atualizarBD(newRow)
    },
    async deleteRow(id) {

        let sheet;
        Planilhas().then(doc => {
            sheet = doc.sheetsByIndex[0];
            sheet.getRows().then(rows => {
                rows.map(row => {
                    if (row.ID === id) {
                        row.delete().then(() => {
                            console.log('Dado deletado!');
                        });
                    }
                });
            })
        })
    },
    async create(newRow) {
        const data = await db.adicionarBD(newRow)
        return data 
    },
    async getUniorg(uniorg) {
        const linhas = await db.buscarUniorgs(uniorg)
        
        return linhas;
    }
}
