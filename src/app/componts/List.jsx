import Card from "./Card";
export default async function List() {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();

  return (
    <ul>
      <div className="flex gap-12">
        {data.products.map((product) => (
          <div key={product.id}>
            <Card title={product.title} price={product.price} id={product.id} />
          </div>
        ))}
      </div>
    </ul>
  );
}
