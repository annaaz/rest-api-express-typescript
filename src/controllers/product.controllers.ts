import { Request, Response } from 'express'
import { createProductValidation, updateProductValidation } from '../validations/product.validation'
import { logger } from '../utils/logger'
import {
  addProductToDB,
  deleteProductByID,
  getProductByID,
  getProductFromDB,
  updateProductByID
} from '../services/product.services'
import { v4 as uuidv4 } from 'uuid'

export const getProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req
  if (id) {
    const products = await getProductByID(id)
    if (products) {
      logger.info('Success GET Product data')
      return res.status(200).send({ status: true, statusCode: 200, data: products })
    } else {
      return res.status(200).send({ status: true, statusCode: 200, data: null })
    }
  } else {
    const products: any = await getProductFromDB()
    logger.info('Success GET Product data')
    return res.status(404).send({ status: true, statusCode: 200, message: 'Data Not Found', data: products })
  }
}

export const updateProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  const { error, value } = updateProductValidation(req.body)
  logger.info(value)
  if (error != null) {
    logger.error('ERR: Product - Update = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }

  try {
    const result = await updateProductByID(id, value)
    if (result) {
      logger.info('Success Update Product')
      return res.status(201).send({ status: true, statusCode: 201, message: 'Update Product Success ' })
    } else {
      logger.info('Failed Update Product')
      return res.status(404).send({ status: true, statusCode: 404, message: 'Data not found' })
    }
  } catch (error) {
    logger.error('ERR: Product - Update = ', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error })
  }
}

export const deleteProduct = async (req: Request, res: Response) => {
  const {
    params: { id }
  } = req

  if (id) {
    try {
      const result = await deleteProductByID(id)
      if (result) {
        logger.info('Success Delete Product')
        return res.status(200).send({ status: true, statusCode: 201, message: 'Delete Product Success ' })
      } else {
        logger.info('Failed Delete Product')
        return res.status(404).send({ status: true, statusCode: 404, message: 'Data not found' })
      }
    } catch (error) {
      logger.error('ERR: Product - Delete = ', error)
      return res.status(422).send({ status: false, statusCode: 422, message: error })
    }
  }
}

export const createProduct = async (req: Request, res: Response) => {
  req.body.product_id = uuidv4()
  const { error, value } = createProductValidation(req.body)
  logger.info(value)
  if (error != null) {
    logger.error('ERR: Product - Create = ', error.details[0].message)
    return res.status(422).send({ status: false, statusCode: 422, message: error.details[0].message })
  }
  try {
    await addProductToDB(value)
    logger.info('Success Add New Product')
    return res.status(201).send({ status: true, statusCode: 201, message: 'Add Product success ' })
  } catch (error) {
    logger.error('ERR: Product - create = ', error)
    return res.status(422).send({ status: false, statusCode: 422, message: error })
  }
}
