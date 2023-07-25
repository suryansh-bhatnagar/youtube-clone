import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

if(!isMenuOpen)
        return null


  return (
    <div className='p-4  h-screen'>
        <ul className='border-gray-400 border-b pb-3 mb-3  w-36'>
          <Link to={'/'} > <li className='ml-2'>Home</li></Link>
            <li className='ml-2'>Shorts</li>
            <li className='ml-2'>Likes</li>
        </ul>
        <ul className='border-gray-400 border-b pb-3 mb-3  w-32'>
            <li className='ml-2 text-lg font-semibold'>Subscriptions</li>
        <li className='ml-2'>Akshay Saini</li>
            <li className='ml-2'>kunal kushwaha</li>
            <li className='ml-2'>Code with Harry</li>
        </ul>
        <ul className='border-gray-400 border-b pb-3 mb-3  w-32'>
            <li className='ml-2 text-lg font-semibold'>Others</li>
        <li className='ml-2'>Library</li>
            <li className='ml-2'>History</li>
            <li className='ml-2'>Your Videos</li>
        </ul>
    </div>
  )
}

export default Sidebar