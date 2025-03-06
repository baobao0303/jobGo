import { Response } from 'express'

export function sendTokenToCookie(res: Response, accessToken: string) {
  res.cookie('accessToken', accessToken, {
    maxAge: 1000 * 60 * 60, // 1 hour
    httpOnly: true,
    secure: false // set to true for HTTPS
  })
}
