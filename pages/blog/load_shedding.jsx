import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { Fragment } from "react";

const LoadShedding = () => {
  return (
    <Fragment>
      <Head>
        <title>
          Load Shedding: How To Survive The Power Outages In Stage 6 |
          Hotwater24.com
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="You don't have to be an expert on electricity to survive a power outage. Read our tips on how to prepare yourself for load shedding."
        />{" "}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "How can I prepare myself for Load Shedding?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "<p>You can prepare by making sure you have alternative forms of lighting your during the evenings in Load Shedding</p>",
                  },
                },
                {
                  "@type": "Question",
                  name: "What are the options for heating water during load shedding?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "<p>A gas geyser is a great option to heat your water. Not only can it provide almost instant hot water, but it can also save you money on electricity when the power is actually there.</p>",
                  },
                },
              ],
            }),
          }}
        />
      </Head>
      <main>
        <section className="max-w-6xl mx-auto px-4 pt-6 pb-12">
          <div className="relative flex items-center justify-center isolate">
            <Image
              src="/images/light.jpg"
              alt="load_shedding"
              width={1500}
              height={1000}
              className="w-full aspect-video rounded-lg -z-10"
            />
            <div className="w-full absolute inset-0 flex p-10 justify-center items-center">
              <h1 className="text-3xl text-white md:text-5xl">
                How To Survive The Power Outages In Stage 6
              </h1>
            </div>
          </div>

          <h2 className="text-xl md:text-3xl mt-5 font-bold text-gray-700">
            The load shedding stages keep going up.
          </h2>
          <p className="mt-3 text-md md:text-lg text-slate-700">
            Here are some practical steps to survive <strong>Stage 6 Load Shedding?</strong>{" "}
          </p>

          <p className="text-md text-gray-600 font-medium mt-4 pr-6">You can make sure that you have a way of providing light in your house during the evenings in the load shedding hours. Rechargable lamps are a good option. They do not take too much electricity to charge while you still have power. Be careful not to purchase low quality lights because they may fail while being recharged. A faulty lithium ion battery can be dangerous if the battery internals get in contact with oxygen.</p>
          <p className="text-md text-gray-600 font-medium mt-4 pr-6">If you are one of the lucky that are able to work from home, you may have to be prepared to find alternative ways of providing electricity during work hours. You should consider purchasing a UPS. A moderate setup should be enough to keep your laptop and internet powered up. A more robust option could be looking into installing a solar power solution or large battery backup setup. This could provide electricity for 6 to 8 hours at a time. Just make sure that you do not drain the batteries before the evening when you will need more of that power.</p>
          <p className="text-md text-gray-600 font-medium mt-4 pr-6">Heating and cooking is more of a challenge during load shedding. Gas appliances are perfect for these uses. Heating and cooking are the main drains on electricity and can make up almost 50% of your electricity usage. If you can take this load of your battery backup it just means that it will last much longer. Consider installing one of our <Link href="quote"><a className="font-bold cursor-pointer text-blue-500">Gas Geyser</a></Link> solutions. This can provide instant hot water and will ensure you do not never need to take a cold shower because you woke up with no power in the morning.</p>
        </section>
      </main>
    </Fragment>
  );
};
export default LoadShedding;
