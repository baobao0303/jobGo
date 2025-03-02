import express, { Application } from 'express'
import 'dotenv/config'
import appRoutes from './globals/routes/appRoutes'
class Server {
  private app: Application

  constructor() {
    this.app = express()
  }

  public start(): void {
    this.setupMiddleware()
    this.setupRoutes()
    this.setupGlobalError()
    this.listenServer()
  }

  private setupMiddleware() {
    this.app.use(express.json())
  }
  private setupRoutes() {
    appRoutes(this.app)
  }
  private setupGlobalError() {}

  private listenServer() {
    const port = process.env.port || 5050

    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  }
}
export default Server
