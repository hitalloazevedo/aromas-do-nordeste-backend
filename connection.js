import { Sequelize, DataTypes} from 'sequelize'

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

export default openConnection