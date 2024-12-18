import React from 'react'
import NavBar from './NavBar'
import Cards from './cardComponent/Cards'

const HomePage = () => {
  return (
    <>
    <NavBar/>
    <div className='text-center font-semibold text-green-600 w-full h-[100vh] bg-white dark:bg-black'>
      <div>itS Home Page</div>
      <Cards/>
    </div>
    </>

  )
}

export default HomePage
