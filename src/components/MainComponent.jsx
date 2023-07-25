import  { useEffect,useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoListCard from './VideoListCard';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';
const MainComponent = () => {


  const [videosData, setVideosData] = useState([]);

    useEffect(()=>{
        getVidoes();
    },[]);

    const getVidoes = async ()=>{
      const data  =await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      console.log("JSON: ", json);
      setVideosData(json.items);
  }

if(!videosData.length){
  return <Shimmer/>
}

  return (
    <div className='p-4 flex flex-col gap-8'>
      <section className='flex gap-4'>        
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>All</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>College</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Music</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Trending</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Gaming</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>College</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Music</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Trending</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Gaming</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>College</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Music</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Trending</p>
        <p className='cursor-pointer rounded-md bg-gray-200 text-center py-1 px-2'>Gaming</p>
      </section>
      <section className='flex gap-2 flex-wrap'>
        {
            videosData.map((item)=><Link to={"watch?v="+item.id} key={item.id}> <VideoListCard key={item.id} data={item}/></Link>)
          
        }
      </section>
    </div>
  )
}

export default MainComponent;