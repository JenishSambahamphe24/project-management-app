import React, {useEffect} from 'react'
import Navbar from '@/app/(components)/Navbar'
import Sidebar from '@/app/(components)/Sidebar'
import StoreProvider, { useAppSelector } from './redux'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
    const isDarkMode = useAppSelector(state => state.global.isDarkMode)
    const isSidebarCollapsed = useAppSelector(state => state.global.isSidebarCollapsed)

  useEffect(() => {
  if(isDarkMode){
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  })
  

    return (
        <div className='flex min-h-screen w-full bg-gray-50 text-gray-900'>
            {/* sidebar */}
            <Sidebar />
            <main className={`lex flex-col w-full bg-gray-50 ${isSidebarCollapsed ? "" :"md:p-64"}`}>
                {/* navbar */}
                <Navbar />
                {children}
            </main>
        </div>
    )
}
const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
      <StoreProvider>
        {children}
      </StoreProvider>
    )
}

export default DashboardWrapper