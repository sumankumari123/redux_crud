import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../apps/hooks'
import { fetchProducts } from '../../features/CardReducer'

const Cards = () => {
  const {value,productList  } = useAppSelector((state) => state.cardData)
  const dispatch = useAppDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  console.log(productList)
  return (
<>
</>
  )
}

export default Cards
