import { fetchJson } from '../../lib/requests';

const { CMS_URL } = process.env;

async function handleUser(req, res) {
  const { jwt } = req.cookies;

  if (!jwt) {
    res.status(401).end();
    return;
  }

  try {
    const user = await fetchJson(`${CMS_URL}/users/me`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    res
      .status(200)
      .json({ id: user.id, name: user.username, email: user.email });
  } catch (error) {
    res.status(401).end();
  }
}

export default handleUser;
