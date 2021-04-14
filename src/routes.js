const express = require('express')
//importação do Router do express
const routes = express.Router();

const DashboarController = require('./controllers/DashboardController')
const RowController = require('./controllers/RowController');
const ProfileController = require('./controllers/ProfileController');

routes.post("/", DashboarController.search)
routes.get("/", DashboarController.index)

routes.get("/Row", RowController.create)
routes.post("/Row", RowController.save)

routes.get("/Row/:id", RowController.show)
routes.post("/Row/:id", RowController.update)
//
routes.get("/Row/delete/:id", RowController.delete)

routes.post("/profile", ProfileController.update)
routes.get("/profile/:id", ProfileController.show)




module.exports = routes;