import React from 'react'
import Conversations from './Conservations'
import SearchInput from './SearchInput'
import LogoutButton from './LogoutButton' 

const SideBar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput></SearchInput>
      <div className="divider px-3"></div>
      <Conversations></Conversations>
      <LogoutButton></LogoutButton>
    </div>
  )
}

export default SideBar;
