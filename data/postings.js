
import sq from 'sequelize';
import {sequelize} from '../db/mysql.js';
const DataTypes = sq.DataTypes;

const Postings = sequelize.define('postings', {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    author:{
        type: DataTypes.STRING(128),
        allowNull:false,
    },
    title:{
        type: DataTypes.STRING(128),
        allowNull:false,
    }
    ,
    context: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    date:{
        type: DataTypes.DATE,
        allowNull: false,
    }
}, {timestamps:false});


export async function getAll(){
    return Postings.findAll();
}

export async function create(body){
    return Postings.create(body).then(()=>getAll());
}

export async function update(author, context){
    return Postings.update({context: context}, {where:{author: author}}).then(()=>getAll());
}

export async function remove(author){
    return Postings.destroy({where:{author: author}}).then(()=>getAll());
}