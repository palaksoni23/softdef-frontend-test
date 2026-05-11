import PlantCard from "../components/PlantCard";

import plant1 from "../assets/plant1.jpeg";
import plant2 from "../assets/plant2.jpeg";
import plant3 from "../assets/plant3.jpeg";
import plant4 from "../assets/plant4.jpeg";

function TrendingPlants() {
  return (
    <section className="px-6 md:px-20 py-16">

      <h2 className="text-3xl font-bold mb-6">
        Trending Plants
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        <PlantCard image={plant1} name="Aloe Vera" price="$20" />
        <PlantCard image={plant2} name="Cactus" price="$15" />
        <PlantCard image={plant3} name="Money Plant" price="$25" />
        <PlantCard image={plant4} name="Snake Plant" price="$30" />

      </div>

    </section>
  );
}

export default TrendingPlants;