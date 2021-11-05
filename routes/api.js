import { Router } from 'express'
const router = Router()
import * as dogsCtrl from "../controllers/dogs.js"

router.get("/dogs", dogsCtrl.index)
router.get("/dogs/:id", dogsCtrl.show)
router.post("/dogs", dogsCtrl.create)
router.put("/dogs/:id", dogsCtrl.update)
router.delete("/dogs/:id", dogsCtrl.delete)

export {
  router
}
