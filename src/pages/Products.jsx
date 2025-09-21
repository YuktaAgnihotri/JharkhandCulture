
import sohari from '../assets/sohariPainting.jpg'
import steelmug from '../assets/steelmug.webp'
import wallpainting from '../assets/wallpainting.webp'
import idols from '../assets/idols.jpg'
import claycraft from '../assets/claycraft.jpg'
import basket from '../assets/bamboo3.webp'
export default function Products() {
 /* const [products, setProducts] = useState([]);
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
  );*/
return(
  <>
  <div>
    <div className='flex flex-wrap w-full gap-y-0.5 '>
            <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full p-5 border-2 border-gray-400 rounded-lg'>
              <img src={sohari} alt="" className='w-50 h-40  hover:bg-green-300'/>
              <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                Sohari Painting <span className='text-xl text-black'> (Price 300-above)</span> 
                <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
               
              </h2>
              <p className=' font-serif'>
              A Santhal woman once saw her cattle's hoofprints forming beautiful patterns in the mud after rain. Inspired, she began decorating her home's walls with natural colors and motifs of animals, plants, and tribal symbols. Thus, Sohrai art evolved, 
              passed down through generations.
              </p>
            </div>
             <div className='bg-amber-50 lg:w-1/3  md:w-1/2  w-full p-5 border-2 border-gray-400 rounded-lg'> 
              <img src={steelmug} alt="" className='w-50 h-40 hover:bg-green-300'/>
              <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
               Dokara Art <span className='text-xl text-black'> (Price 300-above)</span> 
                <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
               </h2>
              
              <p className=' font-serif'> <div> "The Eternal Storyteller"</div>
In tribal villages, Dokra art was never just decoration—it was a storyteller. A mother would gift a Dokra idol at weddings, symbolizing protection and prosperity, just as 
her ancestors had done for generations since the dawn of history.</p>
             </div>
              <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
               <img src={wallpainting} alt="" className='w-50 h-40 hover:bg-green-300'/>
               <h2 className='text-2xl font-semibold hover:underline hover:text-green-700'>
                Sohari Wallpainitng <span className='text-xl text-black'> (Price 300-above)</span> 
                <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
               </h2>
               
               <p className='  font-serif'>In Hazaribagh, Sita dipped her fingers in red and white natural colors to paint her mud house walls. She was 
               nervous-this was her first Sohrai painting. Her mother smiled: "Every line tells the story of the
                harvest and the animals that feed us." As neighbors admired her art, Sita realized she was continuing a tradition older 
                than memory itself. Her simple drawings connected her to generations of women before her.</p>
              </div>
               <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
                <img src={idols} alt="" className='w-50 h-40  hover:bg-green-300'/>
                <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                 Dokar Art Idols<span className='text-xl text-black'> (Price 400-above)</span> 
                <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
               </h2>
               
               <p className=' font-serif'> <div className='font-bold'> "Gauardians in Bronze"  </div>
Long ago, tribal families placed Dokra idols of animals and deities at home as protectors. Even today, each idol carries that ancient promise of safety and good fortune..</p>
               </div>
                <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
                 <img src={claycraft} alt="" className='w-50 h-40  hover:bg-green-300'/>
                 <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                Madhubani Art <span className='text-xl text-black'> (Price 250-above)</span> 
                <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
               
               </h2>
               <p className='  font-serif'>   Ancient Roots: Madhubani painting is believed to date back to the Ramayana period, when King Janaka commissioned artists to paint scenes of Sita and Rama’s wedding on palace walls.
<br/> Symbolism: Fish motifs (like in your image) represent fertility, abundance, and prosperity. Bright natural colors and intricate patterns are characteristic features.
<br/>Cultural Revival: Traditionally done on mud walls, this art form is now used on paper, cloth, and wooden crafts, supporting local women artisans.</p>
                </div>
                 <div className='bg-amber-50 lg:w-1/3 md:w-1/2  w-full  p-5 border-2 border-gray-400 rounded-lg'>
                  <img src={basket} alt="" className='w-50 h-40 hover:bg-green-300'/>
                  <h2 className=' text-2xl font-semibold hover:underline hover:text-green-700'>
                Baskets of Dhumka <span className='text-xl text-black'> (Price 300-above)</span> 
                <div><button className='bg-green-300 hover:bg-green-600 p-2 text-lg font-light'>Buy now </button></div>
               </h2>
               <p className=' hover:underline hover:text-green-700 font-serif'>
                Ravi watched his father weave bamboo strips into beautiful baskets. 
                The Dumka artisans had kept this tradition alive for centuries. When a city trader visited and offere
                d to buy the baskets at a low price, Ravi hesitated. He remembered his grandmother's words: "Our art is our pride." Instead, Ravi started selling the baskets online, sharing the story of their craft. Soon, their bamboo designs became famous beyond Jharkhand, proving culture can thrive in new ways.
               </p>
                 </div>
        </div>
  </div>
  </>
)

}