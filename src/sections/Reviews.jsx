import ReviewCard from "../components/ReviewCard";

import userImg from "../assets/plant.jpg";

function Reviews() {
  return (
    <section className="px-6 md:px-20 py-16">

      <h2 className="text-4xl font-bold mb-10">
        Customer Reviews
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <ReviewCard
          image={userImg}
          name="Palak Soni"
          review="Amazing quality plants and fast delivery."
        />

        <ReviewCard
          image={userImg}
          name="Damini Sharma"
          review="Beautiful plants for my home decor."
        />

        <ReviewCard
          image={userImg}
          name="Ron"
          review="Loved the packaging and freshness."
        />

      </div>

    </section>
  );
}

export default Reviews;