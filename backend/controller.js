
import express from "express";
import bcrypt from "bcrypt";
import { User } from "./models/userModel.js";
import { Category } from "./models/categoryModel.js";
import { Product } from "./models/productModel.js";
import mongoose from "mongoose";


const comparePassword = async (enteredPassword, hashedPassword) => {
  try {
      // Compare the entered password with the hashed password
      const result = await bcrypt.compare(enteredPassword, hashedPassword);
      return result; // Return true if passwords match, false otherwise
  } catch (error) {
      throw new Error('Error comparing passwords');
  }
};




export const register = (req, res) => {
  const newUser = new User(req.body);
  newUser.password = bcrypt.hashSync(req.body.password, 10);
  newUser.save()
    .then(user => {
      user.password = undefined;
      return res.json(user);
    })
    .catch(err => {
      return res.status(400).send({ message: err });
    });
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const {email,username,password} = user
    if (!user) {
      return res.status(401).json({ message: 'Authentication failed. No user found' });
    }
    const isPasswordValid = await comparePassword(req.body.password, password)
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Authentication failed. Wrong password' });
    }
    return res.json({email,username});
  } catch (error) {
    console.error('Error during login:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};


export const getCategorie = async (req,res) => {
  try {
    const q = await Category.find({});
    return res.json(q)
  } catch(error) {
    console.error("Error fetching reservations:",error );
    res.status(404).send(error);
  }
}
export const getProducts = async (req,res) => {
  try {
    const q = await Product.find({});
    return res.json(q)
  } catch(error) {
    console.error("Error fetching reservations:",error );
    res.status(404).send(error);
  }
}

export const CategoriesProductsName = async (req,res) => {
  try {
    const q = await Category.aggregate([
      {
        $lookup: {
          from: "products",   // collection to join with
          localField: "name",  // field from the products collection
          foreignField: "category",       // field from the categories collection
          as: "products"             // alias for the joined data
        }},
         {
        $project: {
          "Categoryname": "$name",
          "products": "$products.name"
        }
      }
    ]);
    return res.json(q)
  } catch(error) {
    console.error("Error fetching reservations:",error );
    res.status(404).send(error);
  }
}