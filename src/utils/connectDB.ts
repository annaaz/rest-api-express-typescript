import * as mongoose from 'mongoose'

import { logger } from './logger'
import config from '../config/environment'

mongoose
  .connect(`${config.db}`)
  .then(() => {
    logger.info('Connected to mongoDB')
  })
  .catch((error) => {
    logger.info('Failed to connect')
    logger.error(error)
    process.exit(1)
  })
