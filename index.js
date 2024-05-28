const express = require('express')
const { Sequelize, DataTypes} = require('sequelize')

const app = express()
app.use(express.json())
const port = 3000

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database/pratos.sqlite'
})

async function openConnection(){
    try{
        await sequelize.authenticate();
        const Plate = sequelize.define(
            'Plates',
            {
                id: {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true,
                    unique: true,
                },
                name: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
                description : {
                    type: DataTypes.STRING(500),
                    allowNull: false,
                },
                imageUrl: {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            },
            {
                freezeTableName: true,
            },
        )
    
        Plate.sync()
        return Plate

    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

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