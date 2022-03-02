import { useRouter } from 'next/router';
import React from 'react';
import CatalogueGrid from '../../../components/Catalogue/CatalogueGrid';
import ProfileNav from '../../../components/Profile/ProfileSidebar';
import { useUser } from '../../../Context/AuthContext';
import { useProducts } from '../../../hooks/products';
import { useQuote } from '../../../hooks/quotes';

const Quote = () => {
  const router = useRouter();

  const { user } = useUser();

  const { quote, quoteIsLoading, quoteFetching, quoteError } = useQuote(
    router.query.id,
  );

  console.log({ quote, quoteIsLoading, quoteFetching, quoteError });

  const arr = [];

  const {
    products,
    productsIsLoading,
    productsFetching,
    productsError,
  } = useProducts(Math.ceil(quote?.quote[0].flowRate), arr);

  console.log(products);

  return (
    <ProfileNav>
      <div className="md:p-6">
        {quoteIsLoading && (
          <div className="flex w-full min-h-[60vh] h-full justify-center items-center">
            <p className="font-bold text-2xl">Loading...</p>
          </div>
        )}

        {quote?.quote.map((quote) => {
          return (
            <div key={quote.id} className="text-gray-600">
              <h2 className="font-bold text-2xl text-gray-600">
                {quote.streetAddress}
              </h2>
              <p className="text-xl font-medium">
                {quote.firstName} {quote.lastName} {quote.telephoneNumber}
              </p>
              <hr className="" />
              <div className="mt-4">
                <p className="text-xl underline">Household Details</p>
                <div className="flex flex-col space-y-1 py-1">
                  <p className="text-md">Adults: {quote.adults}</p>
                  <p className="text-md">Teenagers: {quote.teenagers}</p>
                  <p className="text-md">Children: {quote.children}</p>
                </div>
                <hr className="" />
                <div className="flex flex-col space-y-1 mt-1 ">
                  <p className="text-md">
                    Type Of Property:{' '}
                    <span className="font-bold capitalize">
                      {quote.houseType}
                    </span>
                  </p>
                  <p className="text-md">
                    Property Ownership:{' '}
                    <span className="font-bold">
                      {quote.ownership ? 'Owner' : 'Renter'}
                    </span>
                  </p>
                  <p className="text-md">
                    Type Of Gas Supply:{' '}
                    <span className="font-bold capitalize">
                      {quote.gasSupply}
                    </span>
                  </p>
                  <p className="text-md flex ">
                    Intended Gas Use:{' '}
                    <span className="font-bold pl-2">
                      <p>{quote.gasStove && 'Cooking'}</p>
                      <p>{quote.gasHeating && 'Heating'}</p>
                      <p>{quote.gasWaterHeating && 'Water Heating'}</p>
                      <p>{quote.noGasUse && 'None'}</p>
                    </span>
                  </p>
                  <p className="text-md">
                    Standard Showers:{' '}
                    <span className="font-bold capitalize">
                      {quote.standardShower}
                    </span>
                  </p>
                  <p className="text-md">
                    Rain Showers:{' '}
                    <span className="font-bold capitalize">
                      {quote.rainShower}
                    </span>
                  </p>
                  <p className="text-md">
                    Bathroom/Kitchen Sinks:{' '}
                    <span className="font-bold capitalize">{quote.sink}</span>
                  </p>
                  <p className="text-md">
                    Bathtubs:{' '}
                    <span className="font-bold capitalize">
                      {quote.bathtub}
                    </span>
                  </p>
                  <p className="text-md">
                    Washing Machines:{' '}
                    <span className="font-bold capitalize">
                      {quote.washingmachine}
                    </span>
                  </p>
                  <p className="text-md">
                    Dishwashers:{' '}
                    <span className="font-bold capitalize">
                      {quote.dishwasher}
                    </span>
                  </p>
                  <p className="text-md">
                    Total Flow Rate:{' '}
                    <span className="font-bold capitalize">
                      {quote.flowRate} Litres/min
                    </span>
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {products?.products?.length > 0 && (
          <CatalogueGrid products={products.products} />
        )}
      </div>
    </ProfileNav>
  );
};

export default Quote;
