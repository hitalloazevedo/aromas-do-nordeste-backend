import express from 'express'
import controller from './controller.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
const port = 3000

app.post('/cardapio', async (req, res) => {
    const { name, description, imageUrl} = req.body;
    const response = await controller.insertPlate(name, description, imageUrl)
    if (response.code == 201){
        res.status(response.code).send({msg: response.msg})
    } else {
        res.status(response.code).send({msg: response.msg})
    }
})

app.get('/cardapio', async (req, res) => {
    const data = await controller.getAllPlates()
    res.status(200).send(data)
})

app.delete('/cardapio/:id', async(req, res) => {
    const response = await controller.deletePlate(req.param('id'))
    if (response.code == 202){
        res.status(response.code).send({msg: response.msg})
    } else {
        res.status(response.code).send({msg: response.msg})
    }
})

app.patch('/cardapio', async (req, res) => {
    const {id, ...data} = req.body;
    const response = await controller.updatePlate(id, data)
    if (response.code == 202){
        res.status(response.code).send({msg: response.msg})
    } else {
        res.status(response.code).send({msg: response.msg})
    }
})

app.listen(port, () => {
    console.log(`running at port ${port}`)
})