import express from "express";
const router: any = express.Router();
import { indexController } from "../controllers/index.controller";
import UserController from "../controllers/user.controller";
import Controller from "../core/Controller";
router.get("/", indexController.index);
router.get("/users", Controller.load(UserController, "index"));

export default router;
