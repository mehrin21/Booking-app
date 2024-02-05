import express from 'express'
import { allBookings, allFav, bookVisit, cancelBooking, createUser, toFav } from '../controller/userCtrl.js'
const router = express.Router()

router.post('/register',createUser)
router.post('/bookVisit/:id',bookVisit)
router.get('/allBookings',allBookings)
router.post('/removebooking/:id',cancelBooking)
router.post('/toFav/:rid',toFav)
router.get('/allFav',allFav)
export {router as userRoute}