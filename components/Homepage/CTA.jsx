import Image from 'next/image';
import Link from 'next/link';

export default function CTA() {
  return (
    <div>
      <div className="flex justify-center item-center w-full py-12 px-4 md:px-6 xl:px-20">
        <div className="flex md:flex-row flex-col justify-between items-center w-full md:space-x-8 lg:space-x-12 xl:space-x-60">
          <div className="flex md:w-5/12 lg:w-5/12 xl:w-5/12 sm:jusitfy-start items-center md:items-start flex-col">
            <p className="md:w-60 lg:w-full text-xl lg:text-4xl  md:text-left font-semibold leading-6 md:leading-7 lg:leading-10 text-gray-800">
              Have you considered switching over to a gas geyser?
            </p>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg leading-5 md:leading-6 text-gray-600">
              Gas geysers are a great alternative to the more traditional
              electric geyser. One of the advantages of installing a gas geyser
              is that it provides hot water on-demand without your family ever
              having to experience a cold shower.
            </p>
            <p className="mt-4 text-center md:text-left text-sm md:text-base lg:text-lg leading-5 md:leading-6 text-gray-600">
              Another great advantage of having a gas geyser is that it saves
              you money on your monthly electricity bill.
            </p>

            <Link href="/savings" passHref>
              <button className="focus:bg-gray-900 rounded-full shadow-lg hover:shadow mt-6 py-4 px-8 text-base font-medium leading-none text-white bg-gray-800 hover:bg-gray-700 uppercase">
                Calculate Your Saving
              </button>
            </Link>
          </div>
          <div className="aspect-video lg:w-1/2">
            <Image
              width={1920}
              height={1280}
              src="/images/white-bathroom.jpg"
              alt="white-bathroom"
              className="aspect-video rounded lg:w-1/2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
