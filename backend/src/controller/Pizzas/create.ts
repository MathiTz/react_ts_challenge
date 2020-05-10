import { Request, Response } from "express";
import Pizza from "../../models/Pizza";

export default async function create(req: Request, res: Response) {
  const { size, crust, price, toppings } = req.body;

  const pizza = new Pizza({
    size,
    crust,
    price,
    toppings,
  });

  try {
    const savedPizza = await pizza.save();
    res.json(savedPizza);
  } catch (err) {
    res.json({ message: err });
  }
}
