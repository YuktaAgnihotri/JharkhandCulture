import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../context/LanguageContext';

export default function StoryCard({ story }) {
  const { language } = useContext(LanguageContext);
  const title = story.title?.[language] || story.title?.en;
  const desc = story.content?.[language]?.slice(0, 120) || story.content?.en?.slice(0, 120);

  return (
    <div className="bg-white shadow rounded p-4">
      <img
        src={story.media?.[0] || '/placeholder.jpg'}
        alt="Story"
        className="h-40 w-full object-cover rounded"
      />
      <h3 className="mt-2 font-semibold">{title}</h3>
      <p className="text-sm mt-1">{desc}...</p>
      <Link
        to={`/places/${story.place?._id}`}
        className="text-green-700 hover:underline mt-2 block"
      >
        Read more
      </Link>
    </div>
  );
}