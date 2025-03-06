import jwt from 'jsonwebtoken'
import { Request, Response, NextFunction } from 'express'
import { BadRequestException } from '../cores/error.core'

export async function verifyUser(req: Request, res: Response, next: NextFunction) {
  // 1. get token form cookie
  if (!req?.cookies?.accessToken) {
    next(new BadRequestException('Please login again!'))
  }
  const token = req.cookies.accessToken
  //2. Verity token
  try {
    const decoded = (await jwt.verify(token, process.env.JWT_SECRET!)) as UserPayload
    // console.log(decoded)s

    const { name, email, role } = decoded

    //3. assign verity token from step 2, assign it to req.current
    req.currentUser = { name, email, role }
    next()
  } catch (err) {
    next(new BadRequestException('Please login again!'))
  }
}
