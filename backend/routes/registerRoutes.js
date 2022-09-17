import express from 'express'

import {
  getRegisters,
  createRegister,
  updateRegister,
  deleteRegister,
  getRegistersbyId,
} from '../controllers/registerController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getRegisters).post(protect, createRegister)
router
  .route('/:id')
  .get(getRegistersbyId)
  .put(protect, updateRegister)
  .delete(protect, deleteRegister)

export default router
