import express from 'express'
import { userController } from '../controllers/user.controller'
import asyncWrapper from '~/globals/cores/asyncWrapper.core'
import { userCreateSchema } from '../schemas/user.schema'
import { validateSchema } from '~/globals/middlewares/validateSchema.middleware'

const userRoute = express.Router()

userRoute.get('/', userController.getAll)
userRoute.post('/', validateSchema(userCreateSchema), asyncWrapper(userController.create))

export default userRoute
