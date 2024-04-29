import React from 'react'
import { BiSolidMeteor } from "react-icons/bi"; //trending
import { PiMusicNoteThin } from "react-icons/pi"; //music
import { SiYoutubegaming } from "react-icons/si"; //gaming
import { MdOutlineNewspaper } from "react-icons/md"; //news
import { GoTrophy } from "react-icons/go"; //sports
import { MdOutlinePodcasts } from "react-icons/md"; //podcasts

const SideExplore = () => {
  return (
    <div className='flex flex-col align-middle justify-center space-y-1 p-2 mx-4 w-56'>
    <div className='flex flex-row items-center justify-start p-2 rounded-full font-bold'>
      <h6>Explore</h6>
    </div>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <BiSolidMeteor className='h-6 w-6'/>
      <h6>Trending</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <PiMusicNoteThin className='h-6 w-6'/>
      <h6>Music</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <SiYoutubegaming className='h-6 w-6'/>
      <h6>Gaming</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <MdOutlineNewspaper className='h-6 w-6'/>
      <h6>News</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <GoTrophy className='h-6 w-6'/>
      <h6>Sports</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <MdOutlinePodcasts className='h-6 w-6'/>
      <h6>Podcasts</h6>
    </button>
  </div>
  )
}

export default SideExplore