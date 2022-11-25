import { Request, Response } from 'express';
import { Products } from '../../models/Products';

export async function listProductByCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const products = await Products.find().where('category').equals(categoryId);
    res.json(products);
  } catch (error) {
    res.status(500);
  }

}
