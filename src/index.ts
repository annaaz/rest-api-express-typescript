import express, { Application, NextFunction, Request, Response } from 'express'

const app: Application = express()
const port: Number = 4000

app.use('/api/v1/main', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'REST is running' })
})
app.listen(port, () => {
  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  console.log(`Server listening on port ${port}`)
})
