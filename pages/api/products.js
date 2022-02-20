import { fetchJson } from '../../lib/requests';
const { CMS_URL } = process.env;

async function handleProducts(req, res) {
  try {
    const { data } = await fetchJson(
      `${CMS_URL}/products?populate=%2A&filters[flowRate][$gte]=${req.query.flowRate}&sort[0]=flowRate%3Adesc`,
    );

    res.status(200).json({ data });
  } catch (error) {
    res.status(401).end();
  }
}

export default handleProducts;
