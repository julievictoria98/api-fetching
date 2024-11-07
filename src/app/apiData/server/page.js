import List from "@/app/componts/List";

export default async function Page() {
  //   const response = await fetch("https://dummyjson.com/products");
  //   const data = await response.json();

  return (
    <div>
      <List />
    </div>
    // <ul>
    //   {data.products.map((product) => (
    //     <li key={product.id}>{product.title}</li>
    //   ))}
    // </ul>
  );
}
