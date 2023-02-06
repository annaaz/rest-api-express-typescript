import express, { Application } from 'express'
import { routes } from './routes'
import { logger } from './utils/logger'

const app: Application = express()
const port: Number = 4000

routes(app)
app.listen(port, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  logger.info(`Server listening on port ${port}`)
})
