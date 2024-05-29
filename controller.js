import supabase from "./connection.js"

async function insertPlate(name, description, imageUrl){
    const { error } = await supabase
    .from('plates-db')
    .insert({ 
        plate_name: name,
        plate_description: description,
        image_url: imageUrl
    })

    if (!error){
        return {code: 201, msg: 'new plate created sucessfully'}
    } else {
        return {code: 500, error}
    }
}

async function getAllPlates(){
    const { data, error } = await supabase.from('plates-db').select()
    if (!error){
        return {code: 200, data: data}
    } else {
        return {code: 500, error}
    }
}

async function deletePlate(id){
    const { error } = await supabase
    .from('plates-db')
    .delete()
    .eq('id', id)
    if (!error){
        return {code: 200, msg: "plate deleted sucessfully"}
    } else {
        return {code: 500, error}
    }
}

async function updatePlate(id, data){
    const { error } = await supabase
    .from('plates-db')
    .update({ 
        plate_name: data.name,
        plate_description: data.description,
        image_url: data.imageUrl
     })
    .eq('id', id)

    if (!error){
        return {code: 202, msg: "plate updated sucessfully"}
    } else {
        return {code: 500, error}
    }
}

async function getOnePlate(id){
    const { data, error } = await supabase.from('plates-db').select().eq('id', id)
    if (!error){
        return {code: 200, data: data}
    } else {
        return {code: 500, error}
    }
}

const controller = {
    insertPlate, 
    getAllPlates,
    deletePlate,
    updatePlate,
    getOnePlate
}

export default controller