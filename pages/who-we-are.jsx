import React, { Fragment } from 'react';

const WhoWeAre = () => {
  return (
    <Fragment>
      <header
        className="bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url(/images/hot-shower.jpg)' }}
      >
        <div className="max-w-6xl mx-auto my-auto py-10 px-4 lg:px-0">
          <h1 className="text-white font-light text-3xl lg:text-5xl">
            About <span className="font-bold">Us</span>
          </h1>

          <p className="text-sm max-w-[55ch] text-white pb-2">
            We are Hotwater24, the online platform to assist and advise you on
            the most cost-effective and efficient gas water heating solution for
            your household. We do not only offer the best A brands geysers, we
            also offer you with the installation and maintenance service.
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            Basically a one-stop-shop for all your water heating solutions!
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            We can offer you the full service through our platform of
            independent and certified installers who daily ensure reliable and
            safe installation.
          </p>
          <p className="text-sm max-w-[55ch] text-white pb-2">
            With over 40years of experience in the Dutch gas installation
            business, we understand your need and can therefore help you make
            the best choice! And all that for a competitive price!
          </p>
        </div>
      </header>
    </Fragment>
  );
};

export default WhoWeAre;
