import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../../apps/hooks'
import { fetchProducts } from '../../features/CardReducer'

const ProductList = () => {
  const { value, productList } = useAppSelector((state) => state.cardData)
  const dispatch = useAppDispatch()

  console.log(productList)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])
  return (
    <main className=' container mx-auto my-3 '>
      <h1 className='text-center pt-[4rem] pb-2 font-lexend text-black dark:text-white text-2xl'>Top Offer</h1>
      <div className='grid grid-cols-3 gap-4 md:grid-cols-2 sm:grid-cols-2'>
        {productList.map((items, index) => {
          return (
            <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
           dark:bg-gray-800 dark:border-gray-700  my-2" key={index}>
              <img src={items.image} className="w-full h-[250px] object-contain" alt={items.title} />
              <p>{items.title}</p>
              <p>{items.price}</p>

            </div>
      )
      }
      )}
     </div>

    </main>


  )
}

export default ProductList
