
const Shimmer = () => {
  return (
    <div className='p-4'>
    <div className='w-full h-10 border-y border-gray-300 mb-4'></div>
    <div className='flex gap-2 flex-wrap'>
    { Array(10).fill("").map((item,index)=>{
     return  <div className='w-80' key={index}>
        <div className='w-80 h-60 bg-gray-200 mb-6 rounded-xl'></div>
        <div className='w-80 h-8 bg-gray-200 mb-6 rounded-md'></div>
        <div className='w-80 h-8 bg-gray-200 mb-6 rounded-md'></div>
    </div>
    }) }
    </div>
    </div>
  )
}

export default Shimmer