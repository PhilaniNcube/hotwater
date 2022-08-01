import Head from "next/head";
import Image from "next/future/image";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { Transition } from "react-transition-group";
import { Fragment } from "react";
import Link from "next/link";

const faq = () => {
  return (
    <>
      <Head>
        <title>FAQs | Hotwater24</title>
      </Head>
      <main>
        <section className="max-w-7xl mx-auto mt-4 px-4 lg:px-2">
          <div className="grid grid-cols-8 gap-2">
            <section className="col-span-8 md:col-span-6 min-h-screen my-3">
              <Image
                src="/images/faq.jpg"
                alt="faq"
                className="w-4/6 object-cover rounded-md"
                width={1920}
                height={1080}
              />
              <div className="mt-4">
                <h1 className="text-2xl md:text-4xl text-slate-800 mb-4">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  What is a gas geyser?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  A Gas Geyser, also known as a Gas Water Heater, is a water
                  heating system that runs on gas. The traditional gas geyser
                  does not have a reservoir to store hot water. Instead, it
                  heats the water instantly/ on-demand. If someone opens the hot
                  tap, the gas geyser will activate and send hot water to the
                  tap. The gas geyser will deactivate when the tap is closed and
                  stop producing hot water.
                </article>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  How does a gas geyser work?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  As soon as a hot water tap is opened, water flows through the
                  pipes at a sufficient flow. That flow triggers a sensor inside
                  the gas geyser, igniting the gas burner. The water flows
                  through the pipes absorbing the maximum heat emitting from the
                  heat exchanger. Once the tap is turned off, the sensor again
                  is triggered, and the burner switches off.
                </article>
                <Disclosure as="div" className="mt-4">
                  {({ open }) => (
                    <Fragment>
                      <Disclosure.Button>
                        <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                          <span className="text-md font-medium text-gray-700">
                            More Info
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-6 w-6 text-gray-800`}
                          />
                        </div>
                      </Disclosure.Button>

                      <Disclosure.Panel
                        as="div"
                        className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                      >
                        <article>
                          A particular flow rate is required to activate the gas
                          ignition. Flow rate is the volume of water moving
                          through a pipe every minute. Gas geysers typically
                          operate within a certain flow rate range. For example,
                          a 12L gas geyser can heat up to 12L of water every
                          minute.
                        </article>
                        <p className="text-sm font-medium">
                          Below are steps of how a gas geyser works:
                        </p>
                        <ol className="mt-4">
                          <li>
                            <h3 className="text-lg">Step 1 - Demand</h3>
                            <p>
                              The hot water tap is open. Once the hot water tap
                              is opened, the gas geyser will detect that there
                              is water flowing through the gas geyser. The water
                              flow is detected via a dynamo (electronically) or
                              a diaphragm (mechanically).
                            </p>
                          </li>
                          <li>
                            <h3 className="text-lg">Step 2 - Ignition</h3>
                            <p>
                              Once the gas geyser detects the water flow, it
                              will try to ignite the gas. The gas geyser will
                              allow a small amount of gas to flow into the
                              combustion chamber. It will ignite a small amount
                              of gas with a continuous pulsating electric spark.
                              Then the small amount of gas is lit.
                            </p>
                          </li>
                          <li>
                            <h3 className="text-lg">Step 3 - Combustion</h3>
                            <p>
                              Now the gas geyser knows there is ignition, it
                              will allow gas to flow to the rest of the burners.
                              At this point, the fan will activate to assist
                              combustion if it is a force-driven gas geyser. The
                              gas will ignite on the rest of the burners, and
                              the heat produced will pass through the heat
                              exchanger.
                            </p>
                          </li>
                          <li>
                            <h3 className="text-lg">Step 4 - Heating</h3>
                            <p>
                              Finally, the water passing through the heat
                              exchanger will get heated by the hot combustion
                              gases, and this heated water will ultimately reach
                              your tap to enjoy.
                            </p>
                          </li>
                          <li>
                            <h3 className="text-lg">Step 5 - Demand Ceases</h3>
                            <p>
                              You will close the tap when you finish using the
                              hot water. Once that happens, the gas geyser will
                              detect no more flow and deactivate the gas geyser.
                            </p>
                          </li>
                        </ol>
                      </Disclosure.Panel>
                    </Fragment>
                  )}
                </Disclosure>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  What type of gas do your gas geysers use?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  Gas geysers use Liquefied Petroleum Gas (LPG), a combination
                  of butane, propane, or a mix. LPG is a clean burning and
                  efficient hydrocarbon gas produced by-product of oil refining
                  or natural gas extraction. When compressed in a tank or
                  cylinder, it becomes a liquid released as a gas.
                </article>

                <Disclosure as="div" className="mt-4">
                  {({ open }) => (
                    <Fragment>
                      <Disclosure.Button>
                        <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                          <span className="text-md font-medium text-gray-700">
                            More Info
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-6 w-6 text-gray-800`}
                          />
                        </div>
                      </Disclosure.Button>

                      <Disclosure.Panel
                        as="div"
                        className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                      >
                        <article>
                          A litre of LPG expands to approximately 270 times its
                          volume as a gas. This means lots of energy can be
                          stored in a relatively small container. LPG is easily
                          transported and a popular energy source for cooking,
                          heating, water heating, refrigeration, and lighting on
                          boats, in caravans, campervans and when camping.
                        </article>
                      </Disclosure.Panel>
                    </Fragment>
                  )}
                </Disclosure>

                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  What is LPG used for?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  Hundreds of millions of people currently use LPG and depend on
                  it for thousands of applications in commercial business,
                  industry, transportation, farming, power generation, cooking,
                  heating, and recreational purposes.
                </article>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  Is LPG safe to use?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  <strong>YES</strong>, LPG is very safe to use for your
                  property. However, ensure that all the necessary guidelines
                  are followed during installation, including the issue of CoC
                  (Certificate of Compliance) and have regular - a least once a
                  year - repairs and maintenance.
                </article>
                <Disclosure as="div" className="mt-4">
                  {({ open }) => (
                    <Fragment>
                      <Disclosure.Button>
                        <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                          <span className="text-md font-medium text-gray-700">
                            More Info
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-6 w-6 text-gray-800`}
                          />
                        </div>
                      </Disclosure.Button>

                      <Disclosure.Panel
                        as="div"
                        className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                      >
                        <article>
                          Familiarise yourself with some of the safety aspects
                          of using gas and always use a certified and registered
                          installer/company.
                        </article>
                        <p className="text-sm font-medium">
                          Here are a few safety tips when using LPG in your
                          home.
                        </p>
                        <ul className="list-disc pl-6 text-xs">
                          <li>
                            Never leave your gas stove unattended when cooking.
                          </li>
                          <li>
                            Leave the LPG cylinder in an upright position in a
                            safe space for storage (gas cage).
                          </li>
                          <li>
                            Ensure all your gas-related equipment is serviced
                            and maintained regularly (once a year).
                          </li>
                          <li>Buy gas cylinders from authorised dealers.</li>
                        </ul>
                      </Disclosure.Panel>
                    </Fragment>
                  )}
                </Disclosure>

                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  Why use LPG?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  Please click on this link so you can read all about why using
                  LPG is a very sensible thing to do:
                  <Link href="/why-us">
                    <a className="text-sky-500 text-xs">
                      {" "}
                      https://www.hotwater24.com/why-us
                    </a>
                  </Link>
                </article>

                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  Do I need a Certificate of Compliance/Conformity (CoC) for my
                  gas installation?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  A CoC is proof that your gas installation is safe and complies
                  with the rules and regulations laid out in the South African
                  National Standards (SANS) 10087-1.
                </article>
                <article className="text-base text-gray-600 font-medium">
                  The law requires that you be always in possession of a CoC for
                  gas installations, as does your insurance company. If your
                  property suffers damage from a gas fault, your insurance
                  company will expect you to produce a valid certificate. Not
                  being able to produce one may invalidate your claim.
                </article>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  When must a CoC be issued?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  A Certificate of Conformity (CoC) must be issued for a
                  PERMANENT installation:
                </article>
                <ul className="pl-6 text-sm text-gray-600 list-disc">
                  <li>On completion of a new gas installation,</li>
                  <li>
                    After any modification, alteration, or maintenance of an
                    existing gas installation
                  </li>
                  <li>
                    On change of ownership of a property housing an existing gas
                    installation. (When you sell your property).
                  </li>
                </ul>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  What is a permanent gas installation?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  Legislation deems a permanent gas installation to be a gas
                  installation that is a fixture in a building, immovable and
                  not of a temporary nature. This would include all built-in gas
                  equipment – Gas fires, Heaters, Gas Braais, Stoves, Ovens, and
                  Hot water systems. Movable gas heaters and gas braais on
                  wheels are seen as temporary and do not require a CoC.
                </article>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  How long is a CoC valid for?
                </p>
                <ul className="pl-6 text-sm text-gray-600 list-disc">
                  <li>
                    A CoC is valid for five years, provided the installation has
                    not been altered.
                  </li>
                  <li>
                    Any maintenance or alterations done to your gas installation
                    requires issuing a new CoC for the ENTIRE system.
                  </li>
                  <li>
                    An installation must be inspected, and a CoC issued when a
                    property is sold.
                  </li>
                </ul>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  How regularly must an LPG installation be serviced?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  According to legislation, the manifold system (which includes
                  the regulator/s) should be inspected and serviced at intervals
                  not exceeding five years.
                </article>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  Am I allowed to have a gas cylinder inside my house?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  Yes, according to the SA National Standards (SANS).
                </article>
                <ul className="pl-6 text-sm text-gray-600 list-disc">
                  <li>
                    If you live in a flat, you may have a maximum of 9kg gas
                    either stored or permanently installed inside.
                  </li>
                  <li>
                    If you live in either a free-standing house, cluster house
                    or in-group housing (not exceeding two storeys), you are
                    entitled to a maximum of 19kg. There are, however, strict
                    regulations regarding the positioning of gas cylinders
                    inside a flat or house and necessary ventilation.
                  </li>
                </ul>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  What makes gas geysers different?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  Gas geysers are the most energy-efficient geysers available.
                  Unlike the traditional electric geyser that acts as a
                  reservoir for your water, heating it constantly over time -
                  gas geysers don&apos;t store copious amounts of water
                  internally. Instead, gas geysers heat water on demand. Meaning
                  they only heat water when your hot water tap is turned on.
                </article>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  Why should I choose a gas geyser over an electric geyser?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  Well, for starters, gas geysers supply endless hot water as
                  long as you have gas
                </article>
                <Disclosure as="div" className="mt-4">
                  {({ open }) => (
                    <Fragment>
                      <Disclosure.Button>
                        <div className="flex flex-row items-center bg-slate-100 px-4 py-2 rounded-lg space-x-4 shadow">
                          <span className="text-md font-medium text-gray-700">
                            More Info
                          </span>
                          <ChevronUpIcon
                            className={`${
                              open ? "rotate-180 transform" : ""
                            } h-6 w-6 text-gray-800`}
                          />
                        </div>
                      </Disclosure.Button>

                      <Disclosure.Panel
                        as="div"
                        className="text-sm text-gray-600 mt-2 pl-3 max-w-2xl"
                      >
                        <ul className="list-disc pl-6 text-xs">
                          <li>
                            Fact, gas is A LOT cheaper than electricity. This is
                            because gas is a much cheaper resource than
                            electricity and is only used when needed. You can
                            save an average of 20% on your monthly electricity
                            bill by switching from an electric geyser to a gas
                            geyser.
                          </li>
                          <li>
                            Gas geysers heat water INSTANTLY. With electric
                            geysers, hot water is stored in a tank, but once one
                            or two family members have taken a bath or shower,
                            hot water will be depleted. You&apos;ll have to wait
                            another hour to take your morning or post-workout
                            shower, which consumes more electricity.
                          </li>
                          <li>
                            Gas geysers are perfect for families because gas
                            geysers consume less energy and are power efficient
                            with a quicker recovery rate making them ideal for
                            family homes.
                          </li>
                          <li>
                            Gas geysers are far &apos;greener&apos; than
                            electric ones as they produce about a third of the
                            greenhouse gas emissions of electric storage hot
                            water systems.{" "}
                          </li>
                        </ul>
                        <div className="grid grid-cols-2 mt-4 border-4 border-gray-700">
                          <span className="border-b border-r  border-gray-400 px-4 py-1">
                            <h4 className="font-bold">Gas</h4>
                          </span>
                          <span className="border-b  border-l border-gray-400 px-4 py-1">
                            <h4 className="font-bold">Electric</h4>
                          </span>
                          <span className="border-b border-r  border-gray-400 px-4 py-1">
                            <p>Heats water instantly/ on-demand</p>
                          </span>
                          <span className="border-b  border-l border-gray-400 px-4 py-1">
                            <p>Slower to heat water than gas models</p>
                          </span>
                          <span className="border-b border-r  border-gray-400 px-4 py-1">
                            <p>
                              Lower operating costs than with electric models
                              (Saving 20%!)
                            </p>
                          </span>
                          <span className="border-b  border-l border-gray-400 px-4 py-1">
                            <p>Higher operating costs</p>
                          </span>
                          <span className="border-b border-r  border-gray-400 px-4 py-1">
                            <p>Operates during power failures</p>
                          </span>
                          <span className="border-b  border-l border-gray-400 px-4 py-1">
                            <p>Will not heat up water during power failure</p>
                          </span>
                          <span className="border-b border-r  border-gray-400 px-4 py-1">
                            <p>Energy-efficient</p>
                          </span>
                          <span className="border-b  border-l border-gray-400 px-4 py-1">
                            <p>Longer recovery times</p>
                          </span>
                        </div>
                      </Disclosure.Panel>
                    </Fragment>
                  )}
                </Disclosure>
                <p className="text-xl md:text-2xl font-medium text-slate-700 py-2">
                  Are gas geysers safe for home use?
                </p>
                <article className="text-base text-gray-600 font-medium">
                  @Hotwater24 safety comes first, which is why all installers we
                  work with are certified and registered with the LPGas
                  Association of South Africa (LPGSA - http://www.lpgas.co.za/).
                  For safety and quality purposes of the installation work
                  performed, the installation must be checked to comply with
                  current rules and regulations. Therefore, a CoC (Certificate
                  of Compliance) will be signed off after every installation
                  between the installer and you as our client.
                </article>
                <article className="text-base text-gray-600 font-medium">
                  Please do not hesitate to contact us at any time for advice.
                  Please also check the following link of one of our blogs
                  highlighting the safety aspect:
                </article>
                <article className="text-base text-gray-600 font-medium">
                  <Link href="/blog/are-gas-geysers-safe-yes-absolutely">
                    <a className="text-sky-500">
                      https://www.hotwater24.com/blog/are-gas-geysers-safe-yes-absolutely
                    </a>
                  </Link>
                </article>
              </div>
            </section>
            <section className="hidden md:col-span-2 bg-slate-500 ">
              hello
            </section>
          </div>
        </section>
      </main>
    </>
  );
};
export default faq;
