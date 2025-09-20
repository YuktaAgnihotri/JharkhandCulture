import { useEffect, useState } from 'react';
import { fetchProducts } from '../Services/Api';
import ProductCard from '../components/Productcard';
import Loader from '../components/Loader';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts().then((res) => {
      setProducts(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Local Products</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {products.map((p) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </div>
  );
}