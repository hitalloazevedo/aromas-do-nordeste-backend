import openConnection from "./connection.js"

async function insertPlate(name, description, imageUrl){
    const Plate = await openConnection()
    try {
        Plate.create({ name: name, description: description, imageUrl: imageUrl })
        return {code: 201, msg: 'plate created sucessfully'}
    } catch (err){
        return {code: 500, msg: `plate not created: ${err}`}    
    }
}

async function getAllPlates(){
    const Plate = await openConnection()
    const plates = await Plate.findAll()
    return JSON.stringify(plates)
}

async function deletePlate(id){
    const Plate = await openConnection()
    try {
        await Plate.destroy({
            where: {
              id: id,
            },
        });
        return {code: 202, msg: `plate deleted sucessfully`}
    } catch (err) {
        return {code: 500, msg: `plate not deleted: ${err}`}
    }
}

async function updatePlate(id, data){
    const Plate = await openConnection()
    try {
        await Plate.update(
            { 
                name: data.name,
                description: data.description,
                imageUrl: data.imageUrl
             },
            {
              where: {
                id: id,
              },
            },
        );
        return {code: 202, msg: `plate updated sucessfully`}
    } catch (err) {
        return {code: 500, msg: `plate not updated: ${err}`}
    }
}

const controller = {
    insertPlate, 
    getAllPlates,
    deletePlate,
    updatePlate
}

export default controller