import { Router } from "express";
import currencyRouter from "./controllers/currency/routes";
const router = Router();

router.get("/health-check", (req, res) => {
  res.status(200).send("I am OK");
});

router.use(
  "/currencies",
  currencyRouter,
);

// router.use((req, res, next) => {
//   throw new NotFoundError([
//     {
//       location: "notifications",
//       msg: "page not found",
//       param: "",
//       value: ""
//     }
//   ]);
// });

export default router;
