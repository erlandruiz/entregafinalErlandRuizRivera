import {Router} from 'express';

import * as controller from '../controllers/product.controllers.js';

const router = Router();

router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.put('/:id', controller.update)
router.delete('/:id', controller.deleteProduct)




export default router;
