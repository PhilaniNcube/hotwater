import Image from 'next/image';
import { supabase } from '../../utils/supabase';

/* eslint-disable @next/next/no-img-element */
export default function RecommendedProducts({ products, quote }) {
  const addToQuote = async (productId) => {
    console.log(productId);

    const { data, error } = await supabase
      .from('quotes')
      .update({ product_id: productId })
      .eq('id', quote.id);

    console.log({ data, error });
  };

  return (
    <div className>
      <div className="flex justify-center items-start px-4 md:px-6 xl:px-20 py-12 flex-col">
        <h1 className="text-xl md:text-2xl xl:text-4xl font-semibold leading-5 md:leading-6 lg:leading-9 text-gray-800">
          Add One of these recommended geysers to your quote
        </h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-start items-start flex-col space-y-5"
            >
              <div className=" cursor-pointer relative group flex justify-center items-center">
                <Image
                  src={product.image}
                  width={400}
                  height={400}
                  alt={product.name}
                />
                <button
                  onClick={() => addToQuote(product.id)}
                  className="z-10 transition duration-300 opacity-100 xl:opacity-0 group-hover:opacity-100 ease-in-out absolute bg-white xl:bg-gray-800 bottom-0 shadow-md xl:shadow-none  xl:bottom-6 w-full py-3 text-sm font-medium leading-none text-gray-800  xl:text-white"
                >
                  Add To Quote
                </button>
                <div className="bg-black transition duration-300 ease-in-out group-hover:bg-opacity-30 bg-opacity-0 h-full w-full absolute">
                  {' '}
                </div>
              </div>
              <div className="flex w-full flex-col justify-start items-start">
                <div className="w-full flex justify-between items-center">
                  <p className="text-base font-medium leading-none text-gray-800">
                    {product.name}
                  </p>
                </div>
                <p className="mt-4 text-xl font-medium leading-5 text-gray-600">
                  R {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
