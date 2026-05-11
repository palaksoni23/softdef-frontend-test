function ReviewCard({ image, name, review }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md">

      <div className="flex items-center gap-4 mb-4">

        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover"
        />

        <div>
          <h3 className="font-semibold text-lg">
            {name}
          </h3>

          <p className="text-yellow-500">
            ★★★★★
          </p>
        </div>

      </div>

      <p className="text-gray-600">
        {review}
      </p>

    </div>
  );
}

export default ReviewCard;