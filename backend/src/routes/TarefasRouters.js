const express = require("express")
const router = express.Router()
const TarefaController = require("../controllers/TarefaController")

router.post("/",TarefaController.create)
router.get("/",TarefaController.findAll)
router.get("/:id",TarefaController.findById)
router.put("/:id",TarefaController.update)
router.delete("/:id",TarefaController.delete)

module.exports = router