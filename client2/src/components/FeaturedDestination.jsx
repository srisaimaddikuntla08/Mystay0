import { useNavigate } from 'react-router-dom';
import { roomsDummyData } from '../assets/assets'
import HotelCard from './HotelCard'
import Title from './Title';

const FeaturedDestination = () => {

  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 py-20 '>

      <Title title={"Featured Destination"} subTitle={"Discover our handpicked selection of exceptional properties around the world,Offering unparalled luxury and unforgetabble experiences."}/>
        <div className='flex flex-wrap items-center justify-center gap-6 mt-5'>
            {roomsDummyData.slice(0,4).map((room,index)=>(
                <HotelCard room={room} key={room._id} index={index}/>
            ))}
        </div>
        <button
        onClick={()=>{navigate("/rooms"); scrollTo(0,0)}}
        className='font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer my-15 px-3'>
          View All Destinations
        </button>
    </div>
  )
}

export default FeaturedDestination;