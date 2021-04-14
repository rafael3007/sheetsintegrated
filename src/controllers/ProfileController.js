const Profile = require('../models/Profile')

module.exports = {
    async index(req, res) {
        //tem que passar o parametro mas isso vai ser pego apos o login
        //colocar a verificação
        return res.render("profile", { profile: await Profile.get(1) })
    },
    async show(req, res) {
       
        return res.render('profile',{ profile:await Profile.get(req.params.id)} )
    },
    async update(req, res){
        await Profile.atualizar(req.body)
        return res.redirect('/')
    }
}
