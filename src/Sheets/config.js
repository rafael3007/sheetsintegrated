const { GoogleSpreadsheet } = require('google-spreadsheet');
const credenciais = require('./credenciais.json');
const arquivo = require('./Sheet_ID.json');

const getDoc = async () => {
    const doc = new GoogleSpreadsheet(arquivo.id);
    
    await doc.useServiceAccountAuth({
        client_email: credenciais.client_email,
        private_key: credenciais.private_key.replace(/\\n/g, '\n')
    })
    await doc.loadInfo();
    return doc;
}

module.exports = getDoc;