import { Router } from 'express'
import * as taskCtrl from '../controllers/taskcontroller'

const router = Router()

router.post('/', taskCtrl.newTask)

router.get('/', taskCtrl.findAllTasks)

router.get('/search', taskCtrl.findByName)

router.get('/:id', taskCtrl.findOneTask)

router.delete('/:id', taskCtrl.deleteByID)

router.put('/:id',taskCtrl.updateByID)


export default router