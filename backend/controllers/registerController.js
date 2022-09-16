import asyncHandler from 'express-async-handler'

import Register from '../models/registerModel.js'

export const getRegisters = asyncHandler(async (req, res) => {
  const registers = await Register.find()

  res.status(200).json(registers)
})

export const createRegister = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text for the field')
  }

  const register = await Register.create({
    text: req.body.text,
  })

  res.status(200).json(register)
})

export const updateRegister = asyncHandler(async (req, res) => {
  const register = await Register.findById(req.params.id)

  if (!register) {
    res.status(400)
    throw new Error('Register not found')
  }

  const updatedRegister = await Register.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  )

  res.status(200).json(updatedRegister)
})

export const deleteRegister = asyncHandler(async (req, res) => {
  const register = await Register.findById(req.params.id)

  if (!register) {
    res.status(400)
    throw new Error('Register not found')
  }

  await Register.remove({id: req.params.id})

  res.status(200).json(req.params.id)
})
