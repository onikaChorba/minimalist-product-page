export default async function handler(req, res) {
  const { limit = 30 } = req.query;

  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();

    const fragranceProducts = data.products.filter(
      (product) => product.category === "fragrances"
    );

    const beautyProducts = data.products.filter(
      (product) => product.category === "beauty"
    );

    const sortedProducts = [...fragranceProducts, ...beautyProducts];

    const limitedProducts = sortedProducts.slice(0, limit);

    res.status(200).json(limitedProducts);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Failed to fetch data from DummyJSON API" });
  }
}
