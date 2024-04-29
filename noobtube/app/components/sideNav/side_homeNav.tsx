import React from 'react'
import { MdHomeFilled } from "react-icons/md"; //home
import { SiYoutubeshorts } from "react-icons/si"; //shorts
import { MdOutlineSubscriptions } from "react-icons/md"; //subs
const SideHome = () => {
  return (
    <div className='flex flex-col align-middle justify-center space-y-1 p-2 mx-4 w-56'>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <MdHomeFilled className='h-6 w-6'/>
        <h6>Home</h6>
      </button>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <SiYoutubeshorts className='h-6 w-6'/>
        <h6>Shorts</h6>
      </button>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <MdOutlineSubscriptions className='h-6 w-6'/>
        <h6>Subscribtions</h6>
      </button>
    </div>
  )
}

export default SideHome