import express from 'express';
import { errorHandler } from './middlewares/errorHandler.js';
import { initMongoDB } from './daos/mongodb/connection.js';
import cartRouter from './routes/cart.router.js';
import productRouter from './routes/product.router.js';

import bodyParser from 'body-parser';

import { __dirname } from './utils.js';
import path from 'path';
import { engine } from 'express-handlebars';
import viewsRouter from './routes/views.router.js';



const app = express();
app.use(express.json());

const PORT = 8080;




if(process.env.PERSISTENCE ==='MONGO') initMongoDB()

    app.use(errorHandler)
    app.use('/api/carts', cartRouter);
    app.use('/api/products', productRouter);
    app.use('/', viewsRouter);



// Configuración de Handlebars como motor de plantillas
app.engine('handlebars', engine({
    defaultLayout: false,
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');;
  
  // Middlewares
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());

  //Para capturar archivos estaticos
  app.use(express.static(path.join(__dirname, 'public')));


app.listen(8080, ()=>{
    console.log(`server is running on port ${PORT}`);
})

