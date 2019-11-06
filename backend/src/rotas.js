const express = require("express");

const routes = express.Router();

const UserController = require("./controllers/UserController");

routes.post("/User", UserController.store);
routes.get("/User", UserController.list);
routes.get("/IdUser/:id", UserController.index);
routes.put("/IdUser/:id", UserController.update);
routes.delete("/IdUser/:id", UserController.destroy);

module.exports = routes;
