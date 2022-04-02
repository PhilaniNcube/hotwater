import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <div>
      <div className="flex justify-center item-center w-full py-12 px-4 md:px-6 xl:px-20">
        <div className="flex md:flex-row flex-col justify-between items-center w-full md:space-x-8 lg:space-x-12 xl:space-x-60">
          <div className="flex md:w-5/12 lg:w-5/12 xl:w-5/12 sm:jusitfy-start items-center md:items-start flex-col">
            <p className="md:w-60 lg:w-auto text-xl md:text-2xl lg:text-4xl text-center md:text-left font-semibold leading-6 md:leading-7 lg:leading-10 text-gray-800">
              Have You Considered Switching A Gas Geyser?
            </p>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg leading-5 md:leading-6 text-gray-600">
              Gas geysers are a great alternative to to the more traditional
              electric geyser. One of the advantages of installing a gas geyser
              is that it can provide instant hot water without the need to heat
              up a water reservoir of about 100 - 200 litres over a minimum of
              30 minutes. But the the greatest advantage of the gas geyser is
              that it can save you money on your electricity bill.
            </p>
            <Link href="/quote/start" passHref>
              <button className="hidden focus:bg-gray-900 md:block rounded-full shadow-lg hover:shadow mt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700">
                Get Some Advice
              </button>
            </Link>
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="mt-8 sm:mt-0 object-cover w-80 md:w-96 xl:w-96 2xl:w-auto"
              src="/images/paloma.jpg"
              alt="Paloma Geyser"
            />
          </div>
          <Link href="/quote/start" passHref>
            <button className="w-full focus:bg-gray-900 md:hidden shadow-lg hover:shadow mt-6 py-4 px-8 text-base font-medium leading-none rounded-full text-white bg-gray-800 hover:bg-gray-700">
              Get Some Advice
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
