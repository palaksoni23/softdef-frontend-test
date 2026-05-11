import PlantCard from "../components/PlantCard";

import plant5 from "../assets/plant5.avif";
import plant6 from "../assets/plant6.webp";
import plant7 from "../assets/plant7.jpeg";
import plant8 from "../assets/plant8.jpeg";


function TopSelling() {
  return (
    <section className="px-6 md:px-20 py-16">

      <h2 className="text-4xl font-bold mb-10">
        Top Selling Plants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <PlantCard
          image={plant5}
          name="Bougainvillea"
          price="$20"
        />

        <PlantCard
          image={plant6}
          name="Plumeria rubra"
          price="$25"
        />

        <PlantCard
          image={plant7}
          name="Calathea Beauty Star"
          price="$18"
        />

        <PlantCard
          image={plant8}
          name="Pink Miniature Rose"
          price="$15"
        />

      </div>

    </section>
  );
}

export default TopSelling;