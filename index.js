import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import 'doven/config'
import { Product } from './Models/producto.js'

const app = express()

app.use(express.json())
app.use(cors('*'))

mongoose.connect(process.env.DB)
app.post('/producto', async (req, res)=>{
    const {title, price, description, stock} = req.body 
    await Product.create({
        title: title,
        price: price, 
        description: description,
        stock: stock,
    })
    res.status(201).json({"mensaje": "El producto ha sido creado"})
})
app.listen(process.env.PORT, ()=>{
    console.log('Aplicacion escuchandose e el puerto http://localhost:${process.env.PORT}');
})