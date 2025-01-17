import React from 'react'
import { Search, Settings } from "lucide-react"
import Link from 'next/link'
import { useAppDispatch, useAppSelector } from '@/app/redux'
const Navbar = () => {
  const dispatch = useAppDispatch()
  const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed)
  const isdarkMode = useAppSelector(state => state.global.isdarkMode)


  return (
    <div className='flex items-center justify-between bg-white px-4 py-3 dark:bg-black '>
      {/* search bar */}
      <div className='flex items-center gap-8'>
        <div className='relative flex h-min w-[200px]'>
          <Search className='absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointe text-blue-800 dark:text-red-900' />
          <input className='w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:border-transparent focus:outline-none '
            type='seach'
            placeholder='Searh...' />
        </div>
      </div>

      {/* Icons */}
      <div className='flex items-center'>
        <Link
          href='/settings'
          className='h-min w-min rounded p-2 hover:bg-gray-100'
        >
          <Settings className="h-6 w-6 cursor-pointer dark:text-white" />
        </Link>
        <div className='ml-2 mr-5 hidden min-h-[2em] w-[0.1em] bg-gray-200 md:inline-block'>
         
        </div>
      </div>

    </div>
  )
}
export default Navbar