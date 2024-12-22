import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../apps/hooks";
import { fetchProducts } from "../../features/CardReducer";

const ProductList = () => {
  const { value, productList, selectCategory } = useAppSelector(
    (state) => state.cardData
  );
  const dispatch = useAppDispatch();

  const productListByselectedCategory = productList.filter((product) => {
    if (product.category === selectCategory) {
      return product;
    } else if (!selectCategory || selectCategory === "all") {
      return product;
    }
  });
  console.log(productListByselectedCategory);
  console.log(selectCategory);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <main className=" container mx-auto my-3 ">
      <h1 className="text-center pt-[4rem] pb-2 font-lexend text-black dark:text-white text-2xl">
        Top Offer
      </h1>
      <div className="grid md:grid-cols-3 gap-4  grid-cols-1">
        {productListByselectedCategory.map((items, index) => {
          return (
            <div
              className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow
           dark:bg-gray-800 dark:border-gray-700  my-2"
              key={index}
            >
              <img
                src={items.image}
                className="w-full h-[250px] object-contain"
                alt={items.title}
              />
              <p className="text-sm text-black dark:text-green-600 font-nunito font-light">
                {items.title}
              </p>
              <p className="text-lg text-black dark:text-green-600 font-nunito font-bold">
                {items.price}
              </p>
              <button className=" dark:bg-green-400 font-semibold
               text-white  bg-blue-500 hover:bg-blue-600
              py-1 px-4  text-sm  rounded ">
                ADD TO CART
              </button>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default ProductList;
