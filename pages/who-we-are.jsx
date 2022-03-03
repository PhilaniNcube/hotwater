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
      <section className="max-w-6xl mx-auto py-10 px-4 lg:px-0 grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="text-center">
          <h2 className="text-gray-600 font-light text-3xl lg:text-5xl">
            Our <span className="font-bold">Mission</span>
          </h2>
          <p className="text-sm max-w-[55ch] text-gray-600 pb-2">
            Fugiandam, ulluptas dit late et volliquas et, quae vendelent quiate
            sunt labore pratur am dolendunda volorep repudae qui rem.
            Cessuscimpos et alibus destem et, nisquo ommo eseque nus, iuntio.
            Tatur senim aliande modionsenem si berum aut fugitatas accupta que
            preped eaque prore dolorru ndent, est, antur, venim non parchic
            ipicipsant. Ecerferum rem aut qui des volorum rem re suscima num
            commollicia quam venis se et velesti onsenem
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-gray-600 font-light text-3xl lg:text-5xl">
            Our <span className="font-bold">Vision</span>
          </h2>
          <p className="text-sm max-w-[55ch] text-gray-600 pb-2">
            Fugiandam, ulluptas dit late et volliquas et, quae vendelent quiate
            sunt labore pratur am dolendunda volorep repudae qui rem.
            Cessuscimpos et alibus destem et, nisquo ommo eseque nus, iuntio.
            Tatur senim aliande modionsenem si berum aut fugitatas accupta que
            preped
          </p>
        </div>
        <div className="text-center">
          <h2 className="text-gray-600 font-light text-3xl lg:text-5xl">
            Our <span className="font-bold">Values</span>
          </h2>
          <p className="text-sm max-w-[55ch] text-gray-600 pb-2">
            Fugiandam, ulluptas dit late et volliquas et, quae vendelent quiate
            sunt labore pratur am dolendunda volorep repudae qui rem.
            Cessuscimpos et alibus destem et, nisquo ommo eseque nus, iuntio.
            Tatur senim aliande modionsenem si berum aut fugitatas accupta que
            preped eaque prore dolorru ndent, est, antur, venim non parchic
            ipicipsant. Ecerferum rem aut qui des volorum rem re suscima num
            commollicia quam venis se et velesti onsenem
          </p>
        </div>
      </section>
    </Fragment>
  );
};

export default WhoWeAre;
