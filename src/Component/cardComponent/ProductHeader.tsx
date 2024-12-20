import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../apps/hooks'
import { fetchProducts } from '../../features/CardReducer'

const ProductHeader = () => {
  const {value,productList  } = useAppSelector((state) => state.cardData)
  const dispatch = useAppDispatch()

  let uniqueCategories  = [...new Set(productList.map((product)=>product.category))]
  uniqueCategories.splice(0 ,0,'All');

  useEffect(()=>{
    dispatch(fetchProducts());
  },[])
  return (
<header className=' mx-auto shadow-xl	h-[2.2rem]'>
<ul className='flex justify-center  '>
  {uniqueCategories.map((category,index)=>{
    return(
  <li key={index} className='px-3 mx-6 mt-1 capitalize font-outfit font-bold 
  cursor-pointer hover: border-green-500 hover:border-b-2'>{category}</li>
  )}
)}
  </ul>
</header>


  )
}

export default ProductHeader;
