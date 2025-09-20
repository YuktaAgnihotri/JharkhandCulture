import { useEffect, useState } from 'react';
import { fetchPlaces, fetchStories } from '../Services/Api';
import StoryCard from '../components/Storycard';
import Loader from '../components/Loader';

export default function Places() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStories().then((res) => {
      setStories(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Historic Places & Stories</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {stories.map((s) => (
          <StoryCard key={s._id} story={s} />
        ))}
      </div>
    </div>
  );
}
