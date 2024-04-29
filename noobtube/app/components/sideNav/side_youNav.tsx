import React from 'react'
import { IoIosArrowForward } from "react-icons/io"; //arrow
import { MdOutlinePortrait } from "react-icons/md"; //portrait
import { GoHistory } from "react-icons/go"; //history
import { RiPlayList2Fill } from "react-icons/ri"; //playlist
import { CiYoutube } from "react-icons/ci"; //your vids
import { MdOutlineWatchLater } from "react-icons/md"; //watchLater
import { BiLike } from "react-icons/bi"; //like
const SideYou = () => {
  return (
    <div className='flex flex-col align-middle justify-center space-y-1 p-2 mx-4 w-56'>
    <button className='flex flex-row items-center justify-start space-x-3 hover:bg-slate-500 p-2 rounded-full font-bold'>
      <h6>You</h6>
      <IoIosArrowForward className='h-4 w-4'/>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <MdOutlinePortrait className='h-6 w-6'/>
      <h6>Your Channel</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <GoHistory className='h-6 w-6'/>
      <h6>History</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <RiPlayList2Fill className='h-6 w-6'/>
      <h6>Playlists</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <CiYoutube className='h-6 w-6'/>
      <h6>Your videos</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <MdOutlineWatchLater className='h-6 w-6'/>
      <h6>Watch later</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <BiLike className='h-6 w-6'/>
      <h6>Liked videos</h6>
    </button>
  </div>
  )
}

export default SideYou