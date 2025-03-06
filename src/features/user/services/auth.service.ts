import { User } from '@prisma/client'
import bcrypt from 'bcrypt'
import prisma from '~/prisma'
import { generateToken } from '~/globals/helpers/jwt.helper'
import { BadRequestException } from '~/globals/cores/error.core'

class AuthService {
  public async signUp(requestBody: any) {
    const { email, name, password } = requestBody

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    //Create user in database
    const user = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword
      }
    })

    //Create JWT
    const accessToken = generateToken(user)

    // Cookie

    return accessToken
  }
  public async signIn(requestBody: any) {
    const { email, password } = requestBody

    // 1. MAKE SURE EMAIL EXIST
    const userByEmail = await this.findUserByEmail(email)
    if (!userByEmail) {
      throw new BadRequestException('Invalid Creadentials')
    }

    // 2. MAKE SUE MATCH PASSWORD
    const isMatchPassword = await bcrypt.compare(password, userByEmail.password)
    if (!isMatchPassword) {
      throw new BadRequestException('Invalid credentials')
    }

    //3. GENERAL JWT
    const accessToken = generateToken(userByEmail)

    return accessToken
  }

  private async findUserByEmail(email: string): Promise<User | null> {
    return prisma.user.findFirst({
      where: { email }
    })
  }
}

export const authService: AuthService = new AuthService()
