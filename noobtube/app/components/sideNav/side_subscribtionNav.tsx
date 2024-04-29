'use client';

import React from 'react'
import { IoIosArrowDown } from "react-icons/io"; //arrow down
import { IoLogoCss3 } from "react-icons/io"; //css
import { IoLogoHtml5 } from "react-icons/io"; //html
import { SiTailwindcss } from "react-icons/si"; //tailwind
import { TbBrandNextjs } from "react-icons/tb"; //nextjs
import { BiLogoTypescript } from "react-icons/bi"; //typescript

const SideSubscribtions = () => {
  return (
    <div className='flex flex-col align-middle justify-center space-y-1 p-2 mx-4 w-56'>
      <div className='flex flex-row items-center justify-start p-2 rounded-full font-bold'>
        <h6>Subscriptions</h6>
      </div>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <IoLogoCss3 className='h-6 w-6'/>
        <h6>ThatCssGuy</h6>
      </button>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <IoLogoHtml5 className='h-6 w-6'/>
        <h6>MrHtml</h6>
      </button>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <SiTailwindcss className='h-6 w-6'/>
        <h6>HowToTailwind</h6>
      </button>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <TbBrandNextjs className='h-6 w-6'/>
        <h6>MissNextJS</h6>
      </button>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <BiLogoTypescript className='h-6 w-6'/>
        <h6>TheTypeScriptGuy</h6>
      </button>
      <button className='flex flex-row items-center justify-start space-x-5 hover:bg-slate-500 p-2 rounded-full'>
        <IoIosArrowDown className='h-6 w-6'/>
        <h6>Show more</h6>
      </button>
    </div>
  )
}

export default SideSubscribtions