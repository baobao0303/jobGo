import express from 'express'
import { authController } from '../controllers/auth.controller'
import asyncWrapper from '~/globals/cores/asyncWrapper.core'
import { verifyUser } from '~/globals/middlewares/verifyUser.middleware'
const authRoute = express.Router()

authRoute.post('/signup', authController.signup)
authRoute.post('/sign-in', authController.signin)
authRoute.get('/me', verifyUser, asyncWrapper(authController.getCurrentUser))
authRoute.post('/logout', verifyUser, asyncWrapper(authController.logout))

export default authRoute
