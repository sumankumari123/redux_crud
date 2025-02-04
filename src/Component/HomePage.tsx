import React from 'react'
import NavBar from './NavBar'
import ShowAllData from './ShowAllData'

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div className='text-center font-semibold text-green-600 w-full h-auto  bg-white dark:bg-black'>
      <ShowAllData/>
    </div>

    </>

  )
}

export default HomePage;
