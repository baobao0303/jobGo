import { Request, Response } from 'express'

class AuthController {
  public async signup(req: Request, res: Response) {}
}

export const authController: AuthController = new AuthController()
