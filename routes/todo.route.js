import { Router } from "express";
import { todoController } from "../controllers/todo.controller.js";
import { middle } from "../middlewares/middle.js";

const router = Router();

router.get("/joyas",middle, todoController.getAll);
router.get("/joyas/filtros",middle, todoController.getAllFilers);

export default router;