import { Request, Response } from 'express';
import { Order } from '../../models/Order';


export async function listOrder(req: Request, res: Response) {
  try {
    // populate bring more information into products
    const order = await Order.find()
      .populate('products.products')
      .sort({ createdAt: 1 });

    res.json(order);

  } catch (error) {

    res.status(500);
  }

}
