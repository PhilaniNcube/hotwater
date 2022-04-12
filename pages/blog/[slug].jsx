import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import client from '../../utils/contentful';
import styles from '../../styles/Content.module.css';

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Post = ({ post }) => {
  const [isLoading, setLoading] = useState(true);

  if (!post)
    return (
      <div className="max-w-2xl mx-auto lg:max-w-6xl px-4 md:px-6 lg:px-0 py-8">
        <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-gray-200 shadow">
          <Image
            src="/images/bathroom.jpg"
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
        <h1 className="text-lg md:text-2xl lg:text-4xl mt-4">Loading....</h1>
      </div>
    );

  return (
    <Fragment>
      <Head>
        <title>Blog | {post.fields.title}</title>

        <meta
          name="image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        />
        <meta name="description" content={post.fields.snippet} />
        <meta itemProp="title" content={post.fields.title} />

        <meta
          itemProp="image"
          content="https://www.hotwater24.com/images/hw24-logo.svg"
        ></meta>

        <meta name="og:title" content={post.fields.title} />
        <meta name="og:description" content={post.fields.snippet} />

        <meta
          name="og:image"
          content={`http:${post.fields.featuredImage.fields.file.url}`}
        />
        <meta
          name="og:url"
          content={`https://www.hotwater24.com/blog/${post.fields.slug}`}
        />
        <meta name="og:site_name" content="Hotwater24" />
        <meta name="og:locale" content="en_ZA" />
        <meta name="og:type" content="blog"></meta>
        <link
          rel="canonical"
          href={`https://www.hotwater24.com/blog/${post.fields.slug}`}
        />
      </Head>

      <div className="max-w-2xl mx-auto lg:max-w-6xl px-4 md:px-6 lg:px-0 py-8">
        <div className="aspect-w-3 aspect-h-2 w-full overflow-hidden rounded-lg bg-gray-200 shadow">
          <Image
            width={600}
            height={450}
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
        <h1 className="text-lg md:text-2xl lg:text-4xl mt-4">
          {post.fields.title}
        </h1>
        <p className="text-sm text-gray-700">
          Written By: {post.fields.author.fields.name}
        </p>
        <div className={styles.content}>
          {documentToReactComponents(post.fields.content)}
        </div>
      </div>
    </Fragment>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await client.getEntries({ content_type: 'blog' });

  const paths = res.items.map((item) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { items } = await client.getEntries({
    content_type: 'blog',
    'fields.slug': params.slug,
  });

  return {
    props: {
      post: items[0],
      revalidate: 60,
    },
  };
}
