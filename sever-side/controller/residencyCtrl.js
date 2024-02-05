import asyncHandler from "express-async-handler";
import { prisma } from "../config/prismaconfig.js";
// CREATING RESIDENCY

export const createResidency = asyncHandler(async (req, res) => {
  // console.log("endpoint created")
  const {
    title,
    description,
    price,
    address,
    city,
    country,
    image,
    facilities,
    userEmail,
  } = req.body.data;

  console.log(req.body.data);
  try {
    const residency = await prisma.residency.create({
      data: {
        title,
        description,
        price,
        address,
        city,
        country,
        image,
        facilities,
        owner: { connect: { email: userEmail } },
      },
    });
    res.send({ message: "Residency created successfully", residency });
  } catch (err) {
    if (err.code === "P2002") {
      throw new Error("A residency is already here");
    }
    throw new Error(err.message);
  }
});

// FUNCTION TO GET ALL RESIDENCY
export const getAllResidency = asyncHandler(async (req, res) => {
  try {
    const residencies = await prisma.residency.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.send(residencies);
  } catch (err) {
    if (err.code === "") {
      throw new Error("Not found");
    }
    throw new Error(err.message);
  }
});

// FUNCTION TO GET SPECIFIC RESIDENCY
export const getResidency = asyncHandler(async (req, res) => {
  // console.log("get the data")
  const { id } = req.params;
  // console.log(id)
  try {
    const findResidency = await prisma.residency.findUnique({
      where: { id },
    });
    console.log(findResidency)
    res.send(findResidency)
  } catch (err) {
    throw new Error(err.message);
  }
});
