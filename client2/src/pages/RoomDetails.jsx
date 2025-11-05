import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomsDummyData } from '../assets/assets';
import StarRating from '../components/StarRating';

const RoomDetails = () => {

    const {id} = useParams();
    const [room,setRoom] = useState(null);
    const [mainImage,setMainImage] = useState(null);

    useEffect(()=>{
       const room =  roomsDummyData.find(room =>room._id == id);
        room && setRoom(room);
        room && setMainImage(room.images[0]);

    },[])

  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>       
       <div className='flex flex-col md:flex-row items-start md:items-center gap-2'>
        <h1 className='text-3xl md:text-4xl'>{room.hotel.name} <span className='font-inter text-sm'>({room.roomType})</span> </h1>
        <p className='text-xs font-inter py-1.5 px-3 text-white bg-orange-500 rounded-full'>20% OFF</p>
       </div>

        {/* Room Rating */}
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p className='ml-2'>200+ Ratings</p>
        </div>

        <div>
            <img src={assets.locationIcon} alt="" />
            <span>{room.hotel.address}</span>
        </div>

        <div className='flex flex-col lg:flex-row mt-6 gap-6 '>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} className=' w-full rounded-xl shadow-lg object-cover ' alt="" />
            </div>
             <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length > 1 && room.images.map((image,index)=>(
                    <img onClick={()=>setMainImage(image)} key={index} src={image} alt='' className={`w-full rounded-lg  shadow-md object-cover cursor-pointer ${mainImage==image && 'outline-3 outline-orange-500'}`}/>
                ))}
            </div>
        </div>

        <div className='flex flex-col mt-3 md:flex-row md:justify-between'>
            <div className='flex flex-col'>
                <h1 className='text-3xl md:text-4xl mt-3'>Experience Luxury Like Never Before</h1>
                <div>
                    {room.amenities.map((item,index)=>(
                        <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100' key={index}>
                            <img src={facilityIcons[item]} alt={item} className='w-5 h-5' />
                            <p className='text-xs'>{item}</p>
                        </div>
                    ))} 
                </div>
            </div>
            <p className='text-2xl font-medium'>${room.pricePerNight} per night</p>
        </div>
            <form className='flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.15)] p-6 rounded-xl mx-auto mt-16 max-w-6xl'>
                <div className='flex flex-col flex-wrap md:flex-row items-start md:items-center gap-4 md:gap-10 text-gray-500'>
                    <div className='flex flex-col'>
                        <label htmlFor="checkInDate" className='font-medium'>Check-In</label>
                        <input type="date" placeholder='Check-In' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' id="checkInDate" required />
                    </div>
                     <div className='flex flex-col'>
                        <label htmlFor="checkOutDate" className='font-medium'>Check-Out</label>
                        <input type="date" placeholder='Check-Out' className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' id="checkInDate" required />
                    </div>

                     <div className='flex flex-col'>
                        <label htmlFor="guests" className='font-medium'>Guests</label>
                        <input type="number" defaultValue={0}  placeholder='Check-In' className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' id="checkInDate" required />
                    </div>

                </div>
                 <button className='border border-gray-700 bg-blue-200 hover:bg-primary-dull active:scale-95 transition-all rounded-md max-md:w-full max-md:mt-6 md:px-25 px-3 md:py-4 text-base cursor-pointer'>Book Now</button>
            </form>

    </div>
  )
}
export default RoomDetails



