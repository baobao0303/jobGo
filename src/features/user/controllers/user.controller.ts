import { NextFunction, Request, Response } from 'express'
import prisma from '~/prisma'
import { userService } from '../services/user.service'

class UserController {
  public async getAll(req: Request, res: Response, next: NextFunction) {
    const users = await userService.getAllUser()
    res.status(200).json({
      message: 'Get all users successfully',
      data: users
    })
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    const user = await userService.createUser(req.body)
    res.status(201).json({
      message: 'Create user successfully',
      data: user
    })
  }
}

export const userController: UserController = new UserController()
