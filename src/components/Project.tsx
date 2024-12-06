import axios from "axios";

// Sort it as per price
// Filter it (average rating above 4.5)
// UI should be Boxed layout
// On click of a particular box you should show what card is clicked in the top

import { useEffect, useState } from "react";
import Card from "./Card";

interface CardInterface {
  id: number;
  name: string;
  price: string;
  rating: { reviews: number; average: number };
  image: string;
}

function Project() {
  const [data, setData] = useState<CardInterface[] | null>(null);
  const [selected, setSelected] = useState<string>("none");

  async function getData() {
    const response = await axios.get("https://api.sampleapis.com/beers/ale");

    const allProducts = response.data;

    const filteredProductsRating = allProducts.filter((item: CardInterface) => {
      return item.rating.average > 4.5;
    });

    const sortProductsPrice = filteredProductsRating.sort(
      (a: CardInterface, b: CardInterface) => {
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));

        return priceA - priceB;
      }
    );

    console.log(sortProductsPrice);
    setData(sortProductsPrice);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className=" w-full bg-zinc-400">
      <div className="text-2xl text-bold w-full mb-4 text-center sticky top-0 bg-white border-b-2 border-black">
        Selected: {selected}
      </div>
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            className="w-full mx-auto flex justify-center items-center"
          >
            <Card
              name={item.name}
              price={item.price}
              rating={item.rating}
              image={item.image}
              setSelected={setSelected}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Project;
