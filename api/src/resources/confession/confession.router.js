import { Router } from 'express'

const router = Router()

router.route('/').get(controllers.getOne).post(controllers.createOne)

router
    .route('/:id')
    .get(controllers.getOne)
    .put(controllers.updateOne)
    .delete(controllers.deleteOne)
