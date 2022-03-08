import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const Slides = [
  {
    image: '/images/slide1.jpg',
    color: 'black',
    heading: 'Start saving up to 20% on your monthly electricity bill',
    subheading:
      'Through the power of gas geyser heating solutions for your home',
    link: '/quote/start',
    linkText: 'Find your fit',
  },
  {
    image: '/images/slide2.jpeg',
    color: 'white',
    heading: '24 hours supply of hot water in your home',
    subheading:
      'Through the power of gas geyser heating solutions for your home',
    link: '/quote/start',
    linkText: 'Find your fit',
  },
  {
    image: '/images/slide3.jpg',
    color: 'black',
    heading: 'Safe and reliable installation by accredited professionals',
    subheading:
      'Through the power of gas geyser heating solutions for your home',
    link: '/quote/start',
    linkText: 'Find your fit',
  },
];

const Slider = () => {
  return (
    <Fragment>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
      >
        {Slides.map((slide, i) => {
          return (
            <SwiperSlide key={i}>
              <div
                className="max-w-[100%] mx-auto min-h-[70vh] bg-cover bg-right md:bg-center  bg-no-repeat px-4 lg:px-24 2xl:px-[360px] py-6 flex flex-col justify-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <h1
                  className={`text-2xl mt-12 max-w-[25ch] text-${slide.color} lg:text-4xl font-sans font-bold mb-3`}
                >
                  {slide.heading}
                </h1>

                <Link href={slide.link} passHref>
                  <button className="bg-gray-800 text-white flex space-x-2 py-2 px-4 shadow-lg hover:shadow-sm focus:focus-ring-sky-400 items-center mt-4 rounded-full w-fit">
                    {slide.linkText}
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 pl-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                  </button>
                </Link>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Fragment>
  );
};

export default Slider;
