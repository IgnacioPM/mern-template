import asyncHandler from 'express-async-handler'

import Register from '../models/registerModel.js'

export const getRegisters = asyncHandler(async (req, res) => {
  const registers = await Register.find()

  res.status(200).json(registers)
})

export const getRegistersbyId = asyncHandler(async (req, res) => {
  const register = await Register.find({ user: req.params.id })

  res.status(200).json(register)
})

export const createRegister = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400)
    throw new Error('Please add a text for the field')
  }

  const register = await Register.create({
    text: req.body.text,
    user: req.user.id,
  })

  res.status(200).json(register)
})

export const updateRegister = asyncHandler(async (req, res) => {
  const register = await Register.findById(req.params.id)

  if (!register) {
    res.status(400)
    throw new Error('Register not found')
  }

  if (register.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
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

  if (register.user.toString() !== req.user.id) {
    res.status(401)
    throw new Error('User not authorized')
  }

  await Register.remove(register)

  res.status(200).json(req.params.id)
})
