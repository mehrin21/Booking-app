import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaconfig.js";
// resigeter - createUser
export const createUser = asyncHandler(async (req, res) => {
  // console.log("creating user")

  let { email } = req.body;
  // console.log("email",email)
  //STEP-1 :USER IS EXIST OR NOT
  const userExists = await prisma.user.findUnique({ where: { email: email } });
  if (!userExists) {
    const user = await prisma.user.create({ data: req.body });
    res.send({
      message: "User SignUp successfully",
      user: user,
    });
  } else {
    res.status(201).send({ message: "User already registered" });
  }
});

// FUNCTION TO BOOK A VISIT TO RESIDENCY
export const bookVisit = asyncHandler(async (req, res) => {
  const { email, date } = req.body;
  const { id } = req.params;

  try {
    const alreadBooked = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    if (alreadBooked.bookedVisits.some((visit) => visit.id === id)) {
      res.status(400).json({ message: "Already Booked" });
    } else {
      await prisma.user.update({
        where: { email: email },
        data: {
          bookedVisits: { push: { id, date } },
        },
      });
      res.send("User visit is booked successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

// FUNCTION T0 GET ALL BOOKINGS
export const allBookings = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const bookings = await prisma.user.findUnique({
      where: { email },
      select: { bookedVisits: true },
    });
    res.status(200).send(bookings);
  } catch (err) {
    throw new Error(err.message);
  }
});

// FUNCTION TO CANCEL THE BOOKING
export const cancelBooking = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { id } = req.params;
  try {
    const user = await prisma.user.findUnique({
      where: { email: email },
      select: { bookedVisits: true },
    });

    const index = user.bookedVisits.findIndex((visit) => visit.id === id);
    if (index === -1) {
      res.status(404).json({ message: "Booking not found" });
    } else {
      user.bookedVisits.splice(index, 1);
      await prisma.user.update({
        where: { email },
        data: {
          bookedVisits: user.bookedVisits,
        },
      });
      res.send("Booking cancel successfully");
    }
  } catch (err) {
    throw new Error(err.message);
  }
});
// FUNCTION TO ADD RESIDENCY IN FAVOURATE LIST OF A USER
export const toFav = asyncHandler(async (req, res) => {
  const { email } = req.body;
  const { rid } = req.params;

  try {
    const  user = await prisma.user.findUnique({
      where: { email:email },
    })
    console.log("user" ,user);
    if (user.favResidenciesID.includes(rid)) {
      const updateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            set: user.favResidenciesID.filter((id) => id !== rid),
          },
        },
      });
      res.send({ message: "Removed from favorites", user: updateUser });
    } else {
      console.log("user")
      const UpdateUser = await prisma.user.update({
        where: { email },
        data: {
          favResidenciesID: {
            push: rid,
          },
        },
      });
      res.send({ message: "updated favorites", user: UpdateUser });
    }
  } catch (err) {
    throw new Error(err.message);
  }
});

export const allFav = asyncHandler(async(req,res)=>{
  const {email} = req.body
  try {
    const favResd  = await prisma.user.findUnique({
      where :{email},
      select :{favResidenciesID :true}
    })
    res.status(200).send(favResd)
  } catch (err) {
    throw new Error(err.message)
  }
})