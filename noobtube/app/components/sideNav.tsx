
import React from 'react'
import SideHome from './sideNav/side_homeNav'
import SideYou from './sideNav/side_youNav'
import SideSubscribtions from './sideNav/side_subscribtionNav'
import SideExplore from './sideNav/side_exploreNav'
import SideSettings from './sideNav/side_settingsNav'

const SideNav = () => {
  return (
    <div className='flex flex-col w-64 h-screen left-0 right-0'>
      <div className=' flex flex-col mt-16 overflow-x-hidden overflow-y-scroll'>
        <SideHome />
        <SideYou/>
        <SideSubscribtions/>
        <SideExplore/>
        {/*More from youtube*/}
        <SideSettings/>
        {/*Guidelines*/}
      </div>
    </div>
  )
}

export default SideNav