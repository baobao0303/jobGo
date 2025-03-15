import express from 'express'
import { verifyUser } from '~/globals/middlewares/verifyUser.middleware'
import { candidateProfileController } from '../controllers/candidate-profile.controller'

const candidateProfileRoute = express.Router()

candidateProfileRoute.post('/', verifyUser, candidateProfileController.create)
candidateProfileRoute.get('/', verifyUser, candidateProfileController.readAll)
candidateProfileRoute.get('/:id', verifyUser, candidateProfileController.readOne)

export default candidateProfileRoute
