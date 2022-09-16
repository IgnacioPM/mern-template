import express from 'express'

import {
  getRegisters,
  createRegister,
  updateRegister,
  deleteRegister,
} from '../controllers/registerController.js'

const router = express.Router()

router.route('/').get(getRegisters).post(createRegister)
router.route('/:id').put(updateRegister).delete(deleteRegister)

export default router
