import { Request, Response, NextFunction } from 'express'

function asyncWrapper(callback: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    return callback(req, res, next).catch((error: any) => next(error))
  }
}

export default asyncWrapper
