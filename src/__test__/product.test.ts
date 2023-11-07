import express from 'express'
import { Express } from 'express-serve-static-core'
import { MongoMemoryServer } from 'mongodb-memory-server'
import * as mongoose from 'mongoose'
import supertest from 'supertest'

describe('product', () => {
  let app: Express

  beforeAll(async () => {
    const mongoServer = await MongoMemoryServer.create()
    await mongoose.connect(mongoServer.getUri())

    // Create an Express app for testing
    app = express()
    // Configure your routes and middleware here
  })

  afterAll(async () => {
    await mongoose.disconnect()
    await mongoose.connection.close()
  })

  describe('get detail product', () => {
    describe('given the product doesnt exist', () => {
      it('should return 404 and empty data', async () => {
        const productID = 'product123'
        await supertest(app) // Use the Express app as an argument
          .get(`/products/${productID}`)
          .expect(404)
      })
    })
  })
})
