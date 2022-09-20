import express from 'express'
const PORT = 9000
const app: express.Application= express()



app.listen(PORT,() => {
   console.log('Server is runing at 9000 port')
})