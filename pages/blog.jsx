/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { Fragment, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
      <div className="max-w-2xl mx-auto py-8 px-4 sm:py-16 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 className="text-2xl md:text-4xl lg:text-7xl text-gray-700 mb-6">
          Hotwater24 Blog
        </h1>
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
            layout="fill"
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
