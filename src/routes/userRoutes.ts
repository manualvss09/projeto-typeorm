import { Router } from "express";
import { UserController } from "../controller/userController";

const router = Router();
const userControler = new UserController();
router.post("/", userControler.create);
router.patch("/:id/toggle", userControler.toggleActive);
router.patch("/:id", userControler.update);
router.get("/", userControler.list);
router.get("/active", userControler.listActive);
router.get("/:id", userControler.listById);
router.delete("/:id", userControler.delete);

export const userRoutes = router;
