import express  from 'express'
const PORT:number = 9000
const app: express.Application= express()
import './config/ormconfig'
import router from './routes/routes'


app.use(router)


app.listen(PORT,() => {
   console.log('Server is runing at 9000 port')
})