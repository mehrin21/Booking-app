import express from 'express'
import { createResidency, getAllResidency, getResidency } from '../controller/residencyCtrl.js'
const router = express.Router()

router.post('/create' , createResidency)
router.get('/allresidency',getAllResidency)

// GET A SPECIFIC PROPERTY
router.get('/:id',getResidency)
export {router as residencyRoute}