import { fetchJson } from '../../lib/requests';
import cookie from 'cookie';

const { CMS_URL } = process.env;

async function handleRegister(req, res) {
  if (req.method !== 'POST') {
    res.status(405).end();
    return;
  }

  const { email, password, username } = req.body;

  try {
    const { jwt, user } = await fetchJson(
      `${CMS_URL}/auth/local/register

`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, username }),
      },
    );

    res
      .status(200)
      .setHeader(
        'Set-Cookie',
        cookie.serialize('jwt', jwt, {
          path: '/api',
          httpOnly: true,
        }),
      )
      .json({
        id: user.id,
        name: user.username,
        email: user.email,
      });
  } catch (error) {
    console.log(error);
    res.status(401).end();
  }
}

export default handleRegister;
