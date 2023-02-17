import ProductModel from '../model/product.model'
import productModel from '../model/product.model'
import { logger } from '../utils/logger'
import ProductType from '../types/product.type'

export const addProductToDB = async (payload: ProductType) => {
  return await ProductModel.create(payload)
}

export const getProductFromDB = async () => {
  return await ProductModel.find()
    .then((data) => {
      console.log(data)
      return data
    })
    .catch((error) => {
      logger.info('Cannot GET Data')
      logger.error(error)
    })
}

export const getProductByID = async (id: any) => {
  return await ProductModel.findOne({ product_id: id })
}

export const updateProductByID = async (id: String, payload: ProductType) => {
  return await productModel.findOneAndUpdate({ product_id: id }, { $set: payload })
}

export const deleteProductByID = async (id: String) => {
  return await productModel.findOneAndDelete({ product_id: id })
}
