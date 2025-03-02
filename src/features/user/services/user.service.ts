import { User } from '@prisma/client'
import { BadRequestException } from '~/globals/cores/error.core'
import prisma from '~/prisma'

class UserService {
  public async getAllUser(): Promise<User[]> {
    const users = await prisma.user.findMany()
    return users
  }
  public async createUser(requestBody: any): Promise<User> {
    const { name, email, password, role } = requestBody

    // const isEmailExist = true
    // if (isEmailExist) {
    //   throw new BadRequestException('Email already exists')
    // }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
        status: true,
        role
      }
    })
    return user
  }
}

export const userService: UserService = new UserService()
