function PlantCard({ image, name, price }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">

      <div className="w-full overflow-hidden rounded-t-2xl">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>

      <div className="p-4 text-center">

        <h2 className="text-xl font-semibold text-gray-800">
          {name}
        </h2>

        <p className="text-green-600 text-lg font-bold mt-2">
          {price}
        </p>

        <button className="mt-4 bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition">
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default PlantCard;