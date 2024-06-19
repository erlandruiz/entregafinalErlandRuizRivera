import {Router} from 'express';
import * as controller from '../controllers/product.controllers.js';

const router = Router();

router.get('/realtimeproducts', controller.getAllProductsControllerHandlebars);


export default router;