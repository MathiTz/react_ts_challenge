import { Request, Response } from "express";
import Pizza from "../../models/Pizza";

export default async function getAll(req: Request, res: Response) {
  try {
    const pizzas = await Pizza.find();
    res.json(pizzas);
  } catch (err) {
    res.json({ message: err });
  }
}
