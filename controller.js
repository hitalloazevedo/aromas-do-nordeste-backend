import openConnection from "./connection.js"

async function insertPlate(name, description, imageUrl){
    const Plate = await openConnection()
    try {
        Plate.create({ name: name, description: description, imageUrl: imageUrl })
        return {msg: 'plate created sucessfully'}
    } catch (err){
        return {msg: `error ${err}`}    
    }
}

async function getAllPlates(){
    const Plate = await openConnection()
    const plates = await Plate.findAll()
    return JSON.stringify(plates)
}

const controller = {
    insertPlate, 
    getAllPlates
}

export default controller