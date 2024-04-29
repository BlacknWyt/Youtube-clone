'use client';

import React, { ChangeEvent, useState } from 'react'
import { PiYoutubeLogoBold } from "react-icons/pi"; //youtube logo
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from "react-icons/ci"; //menuBurger
import { MdMic } from "react-icons/md"; //mic
import { AiOutlineVideoCameraAdd } from "react-icons/ai"; //camera
import { IoMdNotificationsOutline } from "react-icons/io"; //notifications
import { GrDocumentMissing } from "react-icons/gr"; //missing
const Search = () => {
  let [text, setText]= useState<string>('');

  let search = () => {
    setText('');
  }

  function change(e: ChangeEvent<HTMLInputElement>){
    e.preventDefault();
    setText(e.target.value);
  }

  return (
    <nav className="flex justify-between bg-white px-6 py-2 fixed left-0 right-0 top-0">
        <div className='flex items-center justify-between space-x-5'>
          <button className='flex items-center justify-between hover:bg-slate-500 p-2 rounded-full'>
            <CiMenuBurger className='h-6 w-6'/>
          </button>
          <button className='flex items-center justify-between '>
            <PiYoutubeLogoBold className='h-9 w-9'/>
            <h6 className=' font-bold text-xl'>NoobTube</h6>
          </button>
        </div>
        <div className='flex items-center justify-between px-5 space-x-5'>
          <div className='flex items-center justify-between rounded-full border border-black w-full px-4 space-x-5'>
            <CiSearch className='h-6 w-6'/>
            <input type='text' value={text} className='w-128 outline-none border-none px-2 ' placeholder='search' onChange={change}/>
            <button onClick={search} className='hover:bg-slate-500 p-2 rounded-full'>
              <CiSearch className='h-8 w-8'/>
            </button>
          </div>
          <button className='flex p-3 border border-black hover:bg-slate-500 rounded-full'>
            <MdMic className='h-6 w-6'/>
          </button>
        </div>
        <div className='flex items-center justify-between space-x-4 px-5'>
          <button className='flex items-center justify-between hover:bg-slate-500 p-2 rounded-full'>
            <AiOutlineVideoCameraAdd className='h-6 w-6'/>
          </button>
          <button className='flex items-center justify-between hover:bg-slate-500 p-2 rounded-full'>
            <IoMdNotificationsOutline className='h-6 w-6'/>
          </button>
          <button className='flex items-center justify-between'>
            <GrDocumentMissing className='h-6 w-6'/>
          </button>
        </div>
    </nav>
  )
}

export default Search