import express from 'express'
import controller from './controller.js'

const app = express()
app.use(express.json())
const port = 3000

app.post('/cadastrar', async (req, res) => {
    const { name, description, imageUrl} = req.body;
    const msg = await controller.insertPlate(name, description, imageUrl)
    res.status(201).send(msg)
})

app.get('/cardapio', async (req, res) => {
    const data = await controller.getAllPlates()
    res.status(200).send(data)
})

app.listen(port, () => {
    console.log(`running at port ${port}`)
})