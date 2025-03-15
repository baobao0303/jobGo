import express from 'express'
import { verifyUser } from '~/globals/middlewares/verifyUser.middleware'
import { candidateProfileController } from '../controllers/candidate-profile.controller'
import { checkPermission } from '~/globals/middlewares/checkPermission.middleware'

const candidateProfileRoute = express.Router()

candidateProfileRoute.post('/', verifyUser, candidateProfileController.create)
candidateProfileRoute.get('/', verifyUser, candidateProfileController.readAll)
candidateProfileRoute.get('/:id', verifyUser, checkPermission, candidateProfileController.readOne)
candidateProfileRoute.patch('/:id', verifyUser, checkPermission, candidateProfileController.update)
candidateProfileRoute.delete('/:id', verifyUser, checkPermission, candidateProfileController.remove)

export default candidateProfileRoute
