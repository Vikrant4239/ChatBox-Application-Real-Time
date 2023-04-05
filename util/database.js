require('dotenv').config();

const Sequelize=require('sequelize');

const sequelize=new Sequelize('chatting','root','Ihatenaveensingh@123',{
    dialect: 'mysql',
    host: 'localhost'
});
module.exports=sequelize;