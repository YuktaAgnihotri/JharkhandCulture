import { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

export default function ProductCard({ product }) {
  const { language } = useContext(LanguageContext);
  const desc = product.description?.[language] || product.description?.en;

  return (
    <div className="bg-white p-4 rounded shadow">
      <img
        src={product.images?.[0] || '/product-placeholder.jpg'}
        alt="Product"
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{product.name}</h3>
      <p className="text-sm">{desc?.slice(0, 100)}...</p>
      <div className="mt-2 flex justify-between items-center">
        <span className="font-bold">₹{product.price}</span>
        <button className="bg-green-700 text-white px-3 py-1 rounded">Add</button>
      </div>
    </div>
  );
}