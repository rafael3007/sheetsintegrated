const getDoc = require('./config')

module.exports = {
    async buscarProfile() {
        let sheet;
        var linhas
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[1];
            linhas = await sheet.getRows()
        })

        return linhas
    },
    async buscarBD() {
        let sheet;
        var linhas
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            linhas = await sheet.getRows()
        })

        return linhas
    },
    async atualizarProfile(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[1];
            linhas = await sheet.getRows().then(rows => {
                rows.map(row => {
                    if (Number(row.ID) === Number(dados.ID)) {
                        row.ID = dados.ID;
                        row.Nome = dados.Nome;
                        row.Link_Avatar = dados.Link_Avatar;
                        //row.Telefone = dados.Telefone;
                        //row.email = dados.email;
                        //row.password = dados.password;
                        row.save().then(() => {
                            console.log('Dado atualizado!');
                        });
                    }
                });
            })
        })
    },
    async atualizarBD(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            await sheet.getRows().then(rows => {
                rows.map(row => {
                    if (Number(row.ID) === Number(dados.ID)) {
                        row.ID = dados.ID,
                        row.Uniorg = dados.Uniorg,
                        row["NOME AGÊNCIA"] = dados["NOME AGÊNCIA"],
                        row.ENDEREÇO = dados.ENDEREÇO,
                        row.CIDADE = dados.CIDADE,
                        row.TIPO = dados.TIPO,
                        row.AMBIENTE = dados.AMBIENTE,
                        row.ANDAR = dados.ANDAR,
                        row.CAPACIDADE = dados.CAPACIDADE,
                        row.QUANTIDADE = dados.QUANTIDADE,
                        row.MANTENEDORA = dados.MANTENEDORA;
                        row["VENCIMENTO RECARGA"] = dados["VENCIMENTO RECARGA"],
                        row["TESTE HIDROSTÁTICO"] = dados["TESTE HIDROSTÁTICO"],
                        row.MEMORIAL = dados.MEMORIAL
                        row.save().then(() => {
                            console.log('Dado atualizado!');
                        });
                    }
                });
            })
        })
    },
    async adicionarProfile(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[1];
            await sheet.addRow({
                ID: dados.ID,
                Nome: dados.Nome,
                Link_Avatar: dados.Link_Avatar,
                Telefone: 'none',
                email:'none',
                Password:'none',
            }).then(() => {
                console.log('dado salvo!')
            })
        });
    },
    async adicionarBD(dados) {
        let sheet;
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            await sheet.addRow({
                ID: dados.ID,
                Uniorg: dados.Uniorg,
                "NOME AGÊNCIA": dados["NOME AGÊNCIA"],
                ENDEREÇO: dados.ENDEREÇO,
                CIDADE: dados.CIDADE,
                TIPO: dados.TIPO,
                AMBIENTE: dados.AMBIENTE,
                ANDAR: dados.ANDAR,
                CAPACIDADE: dados.CAPACIDADE,
                QUANTIDADE: dados.QUANTIDADE,
                MANTENEDORA: dados.MANTENEDORA,
                "VENCIMENTO RECARGA": dados["VENCIMENTO RECARGA"],
                "TESTE HIDROSTÁTICO": dados["TESTE HIDROSTÁTICO"],
                MEMORIAL: dados.MEMORIAL
            }).then(() => {
                console.log('dado salvo!')
            })
        });
    },
    async buscarUniorgs(uniorg){
        let sheet;
        var linhas
        var RowsEquals = []
        await getDoc().then(async doc => {
            sheet = await doc.sheetsByIndex[0];
            linhas = await sheet.getRows()

            linhas.map(row => {
                if (Number(row.Uniorg) === Number(uniorg)) {
                    RowsEquals.push(row)
                }
            });
        })
        return RowsEquals
    }
}