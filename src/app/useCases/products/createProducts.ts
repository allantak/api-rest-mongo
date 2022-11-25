import { Request, Response } from 'express';
import { Products } from '../../models/Products';

export async function createProduct(req: Request, res: Response) {
  try {
    const imagePath = req.file?.filename;
    const {
      category,
      description,
      ingredients,
      name,
      price } = req.body;

    const product = await Products.create({
      category,
      description,
      imagePath,
      ingredients: ingredients ? JSON.parse(ingredients): [],
      name,
      price: Number(price),
    });

    res.status(201).json(product);

  } catch (error) {
    console.log(error);
    res.status(500);
  }

}
