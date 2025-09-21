
import rajappa from '../assets/rajaapa.webp'
import nehrath from '../assets/nehrath.webp'
import uranium from "../assets/uranium.webp"
import temple from '../assets/jyotirlingTemple.webp'
import hundru from '../assets/hundru.webp'
import valley from '../assets/pataruValley.webp'

export default function Places() {
 /* const [stories, setStories] = useState([]);
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
  );*/

return(
  <>
   <>
    <div>
      <div className='flex flex-wrap w-full gap-y-0.5 '>
              <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full p-5 border-2 border-gray-400 rounded-lg'>
                <img src={nehrath} alt="" className='w-50 h-40  hover:bg-green-300'/>
                <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                   Netarhat (The Queen of Chotanagpur) – Adventure & Nature* <span className='text-xl text-black'> (Trekking price 800rs)</span> 
                  <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Book now </button></div>
                 
                </h2>
                <p className=' font-serif'>
                Netarhat is famous for its breathtaking sunrise and sunset points. British officers once called it the “Queen of Chotanagpur” because of its cool clima
                te and serene landscapes. It’s a hub for trekking and paragliding in Jharkhand.
                </p>
              </div>
               <div className='bg-amber-50 lg:w-1/3  md:w-1/2  w-full p-5 border-2 border-gray-400 rounded-lg'> 
                <img src={rajappa} alt="" className='w-50 h-40 hover:bg-green-300'/>
                <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                 Rajappa temple <span className='text-xl text-black'> (Free Entry)</span> 
                  <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>visit now </button></div>
                 </h2>
                
                <p className=' font-serif'> <div></div>
  Dedicated to Goddess Chinnamasta, this temple is unique because the deity is depicted as self-decapitated, symbolizing self-sacrifice and renewal. It’s on the confluence of the Damodar and Bhairavi 
  rivers, a place considered very sacred.</p>
               </div>
                <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
                 <img src={uranium} alt="" className='w-50 h-40 hover:bg-green-300'/>
                 <h2 className='text-2xl font-semibold hover:underline hover:text-green-700'>
                 Jaduguda Uranimun Mines <span className='text-xl text-black'> (Ticket 50-100 Rs)</span> 
                  <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
                 </h2>
                 
                 <p className='  font-serif'> Jaduguda is India’s first uranium mine, operational since the 1960s. While the actual mine has restricted access, the surrounding area and museum in Jaduguda 
                  give a peek into India’s nuclear history and industrial growth.</p>
                </div>
                 <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
                  <img src={temple} alt="" className='w-50 h-40  hover:bg-green-300'/>
                  <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                   Baidyanath Jyotirlinga, Deoghar –<span className='text-xl text-black'> (Free Entry)</span> 
                  <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>visit now </button></div>
                 </h2>
                 
                 <p className=' font-serif'> <div className='font-bold'> "Gauardians in Bronze"  </div>
              Baidyanath Dham is one of the 12 Jyotirlingas of Lord Shiva. Mythology says Ravana tried to take the lingam to Lanka, but Lord Vishnu tricked him, fixing it permanently at Deoghar.
               It’s a major pilgrimage site, especially during Shravan
                Mela.</p>
                 </div>
                  <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
                   <img src={hundru} alt="" className='w-50 h-40  hover:bg-green-300'/>
                   <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                  Hundru Falls <span className='text-xl text-black'> (Ticket Price  5-10Rs)</span> 
                  <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
                 
                 </h2>
                 <p className='  font-serif'> The Subarnarekha River plunges from a height of 98 meters, creating Hundru Falls, one 
                  of the highest waterfalls in Jharkhand. It’s a popular spot for 
                  photography, rock climbing, and river-side picnics.</p>
                  </div>
                   <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
                    <img src={valley} alt="" className='w-50 h-40 hover:bg-green-300'/>
                    <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                   Patratu Valley – Scenic Drive & Adventure <span className='text-xl text-black'> (No Entry fees)</span> 
                  <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Visit now </button></div>
                 </h2>
                 <p className=' hover:underline hover:text-green-700 font-serif'>
                Known for its winding roads and green hills, Patratu Valley
                 offers a stunning view perfect for road trips and biking adventures. It was designed by German engineers and is often compared to hill
                 stations in Himachal for its beauty.
                 </p>
                   </div>
          </div>
    </div>
    </>
  </>
)

}
