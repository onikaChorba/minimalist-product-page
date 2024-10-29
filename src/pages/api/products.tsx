import type { NextApiRequest, NextApiResponse } from "next";
import { Product } from "@component/types";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const limit = parseInt((req.query.limit as string) || "30", 10);

  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const fragranceProducts = data.products.filter(
      (product: Product) => product.category === "fragrances"
    );

    const beautyProducts = data.products.filter(
      (product: Product) => product.category === "beauty"
    );

    const sortedProducts = [...fragranceProducts, ...beautyProducts];

    const limitedProducts = sortedProducts.slice(0, limit);

    res.status(200).json(limitedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch data from DummyJSON API" });
  }
}
