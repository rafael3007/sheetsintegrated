const Row = require('../models/Row')
const Profile = require('../models/Profile')


module.exports = {
    async index(req, res) {
        const profile = await Profile.get(1);
        const Rows = await Row.get()
        return res.render("index", {rows: Rows ,profile: profile })
    },
    async search(req, res) {
        const profile = await Profile.get();
        const search = req.body.busca;
        let Rows = await Row.get();
        console.log(search)
        if (search === '') {
            Rows = await Row.get()
        } else {
            Rows = await Row.getUniorg
        }
        return res.render("index", { rows: Rows, profile: profile })
    }
}