import express from 'express'
import controller from './controller.js'

const app = express()
app.use(express.json())
const port = 3000

app.post('/cardapio', async (req, res) => {
    const { name, description, imageUrl} = req.body;
    const response = await controller.insertPlate(name, description, imageUrl)
    if (response.code == 201){
        res.status(response.code).send(response.msg)
    } else {
        res.status(response.code).send(response.msg)
    }
})

app.get('/cardapio', async (req, res) => {
    const data = await controller.getAllPlates()
    res.status(200).send(data)
})

app.delete('/cardapio/:id', async(req, res) => {
    const response = await controller.deletePlate(req.param('id'))
    if (response.code == 202){
        res.status(response.code).send(response.msg)
    } else {
        res.status(response.code).send(response.msg)
    }
})

app.listen(port, () => {
    console.log(`running at port ${port}`)
})