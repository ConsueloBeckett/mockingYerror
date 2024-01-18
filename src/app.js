import express from 'express'
import productsRoutes from  './routes/productsRoutes.js'

const app = express();
const PORT = 8080;

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/products', productsRoutes)



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});