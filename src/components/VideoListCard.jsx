
const VideoListCard = ({data}) => {
    const {id,snippet,statistics} = data;
  
  return (
    <div className='max-w-xs'>
        <img className='rounded-xl' src={snippet.thumbnails.medium.url} alt='thumbnail' />
        <p className='font-medium text-lg'>{snippet.title}</p>
        <p className=''>{snippet.channelTitle}</p>
        <p className=''>{statistics.viewCount} views</p>

    </div>
  )
}

export default VideoListCard