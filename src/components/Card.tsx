function Card({
  name,
  price,
  rating,
  image,
  setSelected,
}: {
  name: string;
  price: string;
  rating: { reviews: number; average: number };
  image: string;
  setSelected: (name: string) => void;
}) {
  return (
    <div
      className="w-1/2 h-full mb-4 rounded-lg border-2 border-black bg-white p-4 flex flex-row justify-between mx-4 my-auto items-center cursor-pointer"
      onClick={() => setSelected(name)}
    >
      <div>
        <div className="">
          <img src={image} alt={"photo"} />
        </div>
      </div>
      <div>
        <div className=" text-base font-medium mb-4 underline cursor-pointer">
          {name}
        </div>

        <div>
          <span className="font-medium">Price:</span> {price}
        </div>
        <div>
          <span className="font-medium">No of Reviews:</span> {rating.reviews}
        </div>
        <div>
          <span className="font-medium">Average Rating:</span>
          {rating.average}
        </div>
      </div>
    </div>
  );
}
export default Card;
