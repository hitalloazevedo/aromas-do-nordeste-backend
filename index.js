import express from 'express'
import controller from './controller.js'
import cors from 'cors'
import { configDotenv } from "dotenv";
configDotenv()

const app = express()
app.use(express.json())
app.use(cors({
    origin: process.env.ALLOWED_URL,
}))

const port = 3000

app.get('/cardapio', async (req, res) => {
    const query = await controller.getAllPlates()
    if (query.code == 200){
        res.status(query.code).send(query.data)
    } else {
        res.status(query.code).send({code: query.error.code, msg: query.error.message})
    }
})

app.get('/cardapio/:id', async (req, res) => {
    const query = await controller.getOnePlate(req.param('id'))
    if (query.code == 200){
        console.log(query.data)
        res.status(query.code).send(query.data)
    } else {
        res.status(query.code).send({code: query.error.code, msg: query.error.message})
    }
})

app.post('/cardapio', async (req, res) => {
    const { name, description, imageUrl} = req.body;
    const query = await controller.insertPlate(name, description, imageUrl)
    if (query.code == 201){
        res.status(query.code).send({msg: query.msg})
    } else {
        res.status(query.code).send({code: query.error.code, msg: query.error.message})
    }
})

app.delete('/cardapio/:id', async(req, res) => {
    const query = await controller.deletePlate(req.param('id'))
    if (query.code == 200){
        res.status(query.code).send({msg: query.msg})
    } else {
        res.status(query.code).send({code: query.error.code, msg: query.error.message})
    }
})

app.patch('/cardapio', async (req, res) => {
    const {id, ...data} = req.body;
    const query = await controller.updatePlate(id, data)
    if (query.code == 202){
        res.status(query.code).send({msg: query.msg})
    } else {
        res.status(query.code).send({code: query.error.code, msg: query.error.message})
    }
})

app.listen(port, () => {
    console.log(`running at port ${port}`)
})