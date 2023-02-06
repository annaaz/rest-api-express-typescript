import { NextFunction, Request, Response, Router } from 'express'
import { logger } from '../utils/logger'

export const ProductRouter: Router = Router()

ProductRouter.get('/', (req: Request, res: Response, next: NextFunction) => {
  logger.info('Request made for Product')
  res.status(200).send({ status: true, statusCode: 200, data: [{ name: 'Sepate', price: '500000' }] })
})
