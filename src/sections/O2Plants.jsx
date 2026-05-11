import plantImg from "../assets/plant9.jpeg";

function O2Plants() {
  return (
    <section className="px-6 md:px-20 py-16">

      <div className="bg-green-50 rounded-3xl p-10 flex items-center justify-between gap-10">

        <div className="max-w-lg">

          <h2 className="text-4xl font-bold text-gray-900">
            We Provide Healthy O₂ Plants
          </h2>

          <p className="text-gray-600 mt-4">
            Bring freshness and positivity to your home with our premium plants.
          </p>

          <button className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Explore Now
          </button>

        </div>

        <div>

          <img
            src={plantImg}
            alt="O2 Plant"
            className="w-[400px] h-[300px] object-cover rounded-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default O2Plants;