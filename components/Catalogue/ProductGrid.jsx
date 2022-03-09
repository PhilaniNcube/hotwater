import Image from 'next/image';
/* eslint-disable @next/next/no-img-element */
export default function ProductGrid({ products }) {
  return (
    <div>
      <div className="py-12 flex justify-center items-center flex-col px-4 md:px-6 xl:px-20">
        <h1 className="text-xl w-full text-left xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">
          Search Results: {products.length} Results
        </h1>
        <div className="mt-6 flex justify-center flex-col xl:flex-row space-y-6 md:space-y-3 xl:space-y-0 xl:space-x-8 items-stretch">
          <div className="w-full">
            <Image
              width={1920}
              height={1080}
              className="w-full object-cover h-24 sm:h-52 xl:h-auto"
              src="/images/shower.jpg"
              alt="mobile"
            />
          </div>
          <div className="w-full flex justify-center items-stretch md:flex-row flex-col  space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8">
            {products.map((product) => {
              return (
                <div
                  key={product.id}
                  className="bg-white shadow hover:shadow-xl transition duration-500 ease-in-out cursor-pointer w-full flex space-y-8 justify-start items-stretch flex-col p-5 xl:p-4"
                >
                  <Image
                    width={400}
                    height={400}
                    className="w-full"
                    src={product.image}
                    alt="mobile 1"
                  />
                  <div className="w-full flex-col flex justify-start">
                    <p className="text-base leading-none text-gray-600">
                      {product.name}
                    </p>
                    <p className="text-base mt-3 leading-none text-gray-600">
                      R{product.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
