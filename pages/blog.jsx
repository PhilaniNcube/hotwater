/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Image from 'next/future/image';
import Link from 'next/link';
import { getPosts } from '../lib/getPosts';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const blog = ({ blogs }) => {
  console.log(blogs);

  return (
    <Fragment>
      <Head>
        <title>Hotwater24 | Blog</title>

        <meta
          name="description"
          content="The Hotwater24 Blog. Atricles on the the right gas geysers for your home as well as the benefits of switching to a gas geyser"
        />
        <meta
          name="image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        />
        <meta itemProp="name" content="Blog" />

        <meta
          itemProp="image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        ></meta>

        <meta name="og:title" content="Blog" />
        <meta
          name="og:description"
          content="The Hotwater24 Blog. Atricles on the the right gas geysers for your home as well as the benefits of switching to a gas geyser"
        />
        <meta
          name="og:image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        />
        <meta name="og:url" content={`https://www.hotwater24.com/blog`} />
        <meta name="og:site_name" content="Hotwater24" />
        <meta name="og:locale" content="en_ZA" />
        <meta name="og:type" content="blog"></meta>

        <meta name="product:price:currency" content="ZAR" />
        <link rel="canonical" href={`https://www.hotwater24.com/blog`} />
      </Head>
      <div className="mx-auto py-8 px-4 sm:py-16 sm:px-6 max-w-7xl lg:px-8">
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-gray-700 mb-6">
          Hotwater24 Blog
        </h1>
        <div className="w-full grid grid-cols-1 mb-8 md:grid-cols-2 gap-8">
          <Link href="/blog/faq" passHref>
            <Image
              src="/images/faq.jpg"
              alt="FAQ Blog"
              className="rounded-lg object-cover aspect-video cursor-pointer"
              width={1920}
              height={1280}
            />
          </Link>

          <div className="flex flex-col w-full">
            <h2 className="text-lg md:text-4xl text-gray-700">
              Frequently Asked Questions
            </h2>
            <p className="text-base text-gray-600 font-medium">
              Read our comprehensive blog post on the ins and outs of
              installaing, owning and maintaining a gas geyser.
            </p>
            <p className="text-gray-800 font-medium">Author: Ronald</p>
            <div className="mt-6">
              <Link href="/blog/faq" passHref>
                <button className="bg-sky-500 rounded-full text-white font-medium text-lg py-2 px-6 ">
                  Read more
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {blogs.map((post) => (
            <BlurImage key={post.sys.id} post={post} />
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export function BlurImage({ post }) {
  const [isLoading, setLoading] = useState(true);

  return (
    <Link href={`/blog/${post.fields.slug}`} passHref>
      <a className="group">
        <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-gray-200 shadow">
          <Image
            height={1080}
            width={1920}
            src={`http:${post.fields.featuredImage.fields.file.url}`}
            className={cn(
              'group-hover:opacity-75 ease-in-out object-cover',
              isLoading
                ? 'grayscale blur-2xl scale-110'
                : 'grayscale-0 blur-0 scale-100',
            )}
            alt="blog image"
            onLoadingComplete={() => setLoading(false)}
          />
        </div>
        <h3 className="mt-4 text-md text-gray-700">{post.fields.title}</h3>
        <p className="mt-1 text-sm font-medium text-gray-900">
          Author: {post.fields.author.fields.name}
        </p>
      </a>
    </Link>
  );
}

export default blog;

export async function getStaticProps() {
  const blogs = await getPosts();

  return {
    props: {
      blogs,
      revalidate: 60,
    },
  };
}
