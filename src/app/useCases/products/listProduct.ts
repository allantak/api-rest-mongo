import { Request, Response } from 'express';
import { Products } from '../../models/Products';


export async function listProducts(req: Request, res: Response) {
  try {
    const products = await Products.find();
    res.json(products);
  } catch (error) {
    res.status(500);
  }

}
