import { Request, Response, NextFunction } from 'express'
import { authService } from '../services/auth.service'
import HTTP_STATUS from '~/globals/constants/http.constant'
import { sendTokenToCookie } from '~/globals/helpers/cookie.helper'

class AuthController {
  public async signup(req: Request, res: Response, next: NextFunction) {
    try {
      const accessToken = await authService.signUp(req.body)

      // Cookie validation
      sendTokenToCookie(res, accessToken)

      return res.status(HTTP_STATUS.CREATED).json({
        message: 'User created successfully'
        // data: req.currentrUser
      })
    } catch (error) {
      return next(error)
    }
  }

  public async getCurrentUser(req: Request, res: Response) {
    return res.status(HTTP_STATUS.OK).json({
      message: 'User fetched successfully',
      data: req.currentUser
    })
  }
  public async logout(req: Request, res: Response) {
    res.clearCookie('accessToken')

    return res.status(HTTP_STATUS.OK).json({
      message: 'Logout successfully'
    })
  }
  public async signin(req: Request, res: Response, next: NextFunction) {
    try {
      const accessToken = await authService.signIn(req.body)

      // TODO: Update user's last login timestamp

      // Cookie validation
      sendTokenToCookie(res, accessToken)

      return res.status(HTTP_STATUS.OK).json({
        message: 'User logged in successfully'
        // data: accessToken
      })
    } catch (error) {
      return next(error)
    }
  }
}
export const authController: AuthController = new AuthController()
