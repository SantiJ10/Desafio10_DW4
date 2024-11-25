import {Schema, model} from 'mongoose'
const productoSchema = new mongoose.Schema({
    nombre: String,
    precio: Number,
    descripción: String
    });
    const Producto = mongoose.model('Producto', productoSchema);
    app.get('/productos', async (req, res) => {});
    app.post('/productos', async (req, res) => {
    });
    app.put('/productos/:id', async (req, res) => { });
    app.delete('/productos/:id', async (req, res) => {
    });
    app.get('/productos', async (req, res) => {
    try {
    const productos = await Producto.find();
    res.json(productos);
    } catch (error) {
    console.error('Error al obtener productos:', error);
    res.status(500).send('Error al obtener productos');
    }
    });
    app.post('/productos', async (req, res) => {
    try {
    const { nombre, precio, descripcion } = req.body;
    const nuevoProducto = new Producto({ nombre, precio, descripcion });
    await nuevoProducto.save();
    res.status(201).json(nuevoProducto);
    } catch (error) {
    console.error('Error al agregar producto:', error);
    res.status(500).send('Error al agregar producto');
    }
    });    
    app.put('/productos/:id', async (req, res) => {
    });
    app.delete('/productos/:id', async (req, res) => {
    });
    export const Product = model('Products', productos)