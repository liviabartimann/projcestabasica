const express = require("express");
const routes = express.Router();
const UserController = require("./controllers/UserController");
const SessionController = require("./controllers/SessionController");
const authMiddleware = require("./middlewares/auth");

routes.post("/User", UserController.store);
routes.get("/User", UserController.list);
routes.get("/IdUser/:id", UserController.index);
routes.put("/IdUser/:id", UserController.update);
routes.delete("/IdUser/:id", UserController.destroy);
routes.post("/sessions", SessionController.store);

// routes.use(authMiddleware);

module.exports = routes;
