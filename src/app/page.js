import Link from "next/link";
export async function Home() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();
  return (
    <div>
      {data.products.map((product) => (
        <Link href={`/detaljer/${product.id}`}>{product.title}</Link>
      ))}
    </div>
  );
}

export default Home;
