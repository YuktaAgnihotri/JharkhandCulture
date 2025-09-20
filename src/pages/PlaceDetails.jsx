import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { fetchPlaceById } from '../Services/Api';
import { LanguageContext } from '../context/LanguageContext';
import Loader from '../components/Loader';

export default function PlaceDetails() {
  const { id } = useParams();
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    fetchPlaceById(id).then((res) => {
      setPlace(res.data);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div>
      <h1 className="text-3xl font-bold">{place.name}</h1>
      <p className="mt-2">{place.shortDesc?.[language] || place.shortDesc?.en}</p>
      {place.images?.length > 0 && (
        <img src={place.images[0]} alt="Place" className="my-4 rounded" />
      )}
    </div>
  );
}
