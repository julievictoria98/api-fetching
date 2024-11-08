"use client";
import { useEffect, useState } from "react";
const Page = () => {
  const [products, setProducts] = useState(undefined);
  useEffect(() => {
    async function fetchProducts() {
      let response = await fetch("https://dummyjson.com/products");
      let data = await response.json();
      // de data der ligger i reponse, men ikke kender formattet af, dem atger vi fat når response er klar og konvterer til json
      // vi skal opdatere et eller sted i aplikation med de her data vi har konvertet.
      setProducts(data);
    }
    fetchProducts();
  }, []);
  if (!products) {
    return <div>Loading!!</div>;
  }
  return (
    <ul>
      {products.products.map((product) => {
        return <li key={product.id}>{product.category}</li>;
      })}
    </ul>
  );
  // Her gør vi noget HVIS data ikke er klar (!posts), så kan man kommunikere til brugeren, at det er på vej.
};

export default Page;
