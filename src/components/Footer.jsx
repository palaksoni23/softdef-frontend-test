function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-6 md:px-20 py-16 mt-20">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>

          <h2 className="text-2xl font-bold">
            PlantShop
          </h2>

          <p className="text-gray-400 mt-4 leading-7">
            Bringing nature closer to your home.
          </p>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li className="hover:text-green-500 transition cursor-pointer">Home</li>
            <li className="hover:text-green-500 transition cursor-pointer">Plants</li>
            <li className="hover:text-green-500 transition cursor-pointer">Reviews</li>
            <li className="hover:text-green-500 transition cursor-pointer">Contact</li>

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Help
          </h3>

          <ul className="space-y-2 text-gray-400">

            <li>Support</li>
            <li>Privacy Policy</li>
            <li>Terms</li>

          </ul>

        </div>

        <div>

          <h3 className="text-xl font-semibold mb-4">
            Newsletter
          </h3>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg text-black"
          />

          <button className="mt-4 bg-green-600 px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Subscribe
          </button>

        </div>

      </div>

    </footer>
  );
}

export default Footer;