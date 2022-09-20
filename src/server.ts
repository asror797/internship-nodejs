import express  from 'express'
const PORT:number = 9000
import swaggerUi from 'swagger-ui-express'
const app: express.Application= express()
import './config/ormconfig'
import router from './routes/routes'
import swaggerDocument from './swagger.json'


app.use(router)

app.use('/swagger',swaggerUi.serve,swaggerUi.setup(swaggerDocument))



app.listen(PORT,() => {
   console.log('Server is runing at 9000 port')
})