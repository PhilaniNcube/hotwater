import client from '../utils/contentful';

const getPosts = async () => {
  const res = await client.getEntries({ content_type: 'blog' });

  console.log(res.items);

  return res.items;
};

export { getPosts };
