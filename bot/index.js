const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credenciais.json');

const getDoc = async () => {
    const doc = new GoogleSpreadsheet('SHEET-ID');

    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}


const venom = require('venom-bot');

venom
    .create()
    .then((client) => start(client));

function start(client) {
    client.onMessage((message) => {
        if (message.body === 'Oi' || message.body === 'Olá') {
            client
                .sendText(message.from, 'Olá! Tudo bem com você?')
                .then((result) => {
                    console.log('Result: ', result); //retorna um objeto de successo
                })
                .catch((erro) => {
                    console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                });
        }
    });
    let sheet;
    const uniorg = '';
    getDoc().then(doc => {
        sheet = doc.sheetsByIndex[0];
        sheet.getRows().then(rows => {
            
            client
                .sendText('5577XXXXXXXX@c.us', `variavel que vem da planilha Excell: ${rows[1].Uniorg}`)
                .then((result) => {
                    console.log('Result: ', result); //retorna um objeto de successo
                })
                .catch((erro) => {
                    console.error('Erro ao enviar mensagem: ', erro); //return um objeto de erro
                });
        })
    })

}
    
