import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {

    const dispatch = useDispatch();

    const handleClick =()=>{
            dispatch(toggleMenu())
    }

  return (
    <div className='grid grid-flow-col  p-4  items-center'>
        <div className=' flex col-span-1'>

        <img className='h-8 cursor-pointer' onClick={()=>handleClick()} src='https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png' alt='hamburger'/> 
        <img className='h-8 ml-5'   src='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png' alt='hamburger'/> 

        </div>
        <div className='col-span-11 flex justify-center'>

        <input className='border-gray-300 border w-1/2 p-4 h-8 focus:border-gray-400 focus:outline-none rounded-l-full' type='text'  placeholder='Seaarch'/>
        <button className='bg-gray-100 border-gray-300 h-8 border rounded-r-full p-4 flex items-center' >🔍</button>
        </div>

    </div>
  )
}

export default Header