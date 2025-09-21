import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold my-6">Buy relics with legacy </h1>
      <p className="text-lg mb-4">
        Explore stories of historic places and buy local crafts that carry a story with them.
      </p>
      <div className="flex justify-center gap-4">
        <Link to="/places" className="bg-green-700 text-white px-4 py-2 rounded">
          Explore Places
        </Link>
        <Link to="/products" className="bg-green-600 text-white px-4 py-2 rounded">
          Visit Shop
        </Link>
      </div>
    </div>
  );
}