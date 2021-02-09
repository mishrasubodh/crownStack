import { Router } from "express";
import exchangeControllerInstance from "./currencyController";
import controllerAdapter from "../../middlewares/controllerAdapter";

const router = Router();

router
  .route("/")
  .get(controllerAdapter(exchangeControllerInstance, "getCurrencies"));

export default router;
