import heroImg from "../assets/plant.jpg";

function HeroBanner() {
  return (
    <section className="px-10 md:px-20 py-16">

      <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="max-w-xl">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900" >
            Bring Nature to Your Home
          </h1>

          <p className="text-gray-600 text-lg mt-6">
            Discover beautiful plants to make your space green and fresh.
          </p>

          <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition">
            Shop Now
          </button>

        </div>

        <div>

          <img
            src={heroImg}
            alt="Plants"
            className="w-full max-w-[500px] h-[350px] object-cover rounded-2xl shadow-lg"
          />

        </div>

      </div>

    </section>
  );
}

export default HeroBanner;