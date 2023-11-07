import { MongoMemoryServer } from 'mongodb-memory-server'
import * as mongoose from 'mongoose'
import supertest from 'supertest'

describe('product', () => {
  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())
  })
  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })
  describe('get detail product', () => {
    describe('given the product doesnt exist', () => {
      it('should return 404 and empty data', async () => {
        const productID = 'proudct123'
        await supertest().get(`/products/${productID}`).expect(404)
      })
    })
  })
})
