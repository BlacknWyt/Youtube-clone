import { LiaCogSolid } from "react-icons/lia"; // settings
import { GrFlag } from "react-icons/gr"; //report
import { IoIosHelpCircleOutline } from "react-icons/io"; //help
import { MdOutlineFeedback } from "react-icons/md"; //feedback

import React from 'react'

const SideSettings = () => {
  return (
    <div className='flex flex-col align-middle justify-center space-y-1 p-2 mx-4 w-56'>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <LiaCogSolid className='h-6 w-6'/>
      <h6>Settings</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <GrFlag className='h-6 w-6'/>
      <h6>Report history</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <IoIosHelpCircleOutline className='h-6 w-6'/>
      <h6>Help</h6>
    </button>
    <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
      <MdOutlineFeedback className='h-6 w-6'/>
      <h6>Send feedback</h6>
    </button>
  </div>
  )
}

export default SideSettings