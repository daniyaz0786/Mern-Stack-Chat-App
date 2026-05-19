import React from 'react'
import assets from '../assets/assets'

const ChatContainer = ({selecteduser,Setselecteduser}) => {
  return (
    <div className='h-full overflow-scroll relative backdrop-blur-lg'>
      <div className='flex items-center gap-3 py-3 mx-4 border-b border-stone-500'>
        <img src={assets.profile_martin} alt='Profile' className='w-8 rounded-full'/>
        <p className='flex-1 text-lg text-white flex items-center gap-2'>
          Martin Johnson
          <span className='w-2 h-2 rounded-full bg-green-500'></span>
        </p>
        <img onCanPlay={() =>Setselecteduser(null)} src={assets.arrow_icon} alt="Arrow" className='md:hidden max-w-7' />
        <img src={assets.help_icon} alt="" className='max-md:hidden max-w-5' />
      </div>
    </div>
  )
}

export default ChatContainer
