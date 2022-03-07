import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.send('Unauthorized');
    return;
  }

  const msg = {
    to: 'webdev@htowater24.com', // Change to your recipient
    from: 'webdev@htowater24.com', // Change to your verified sender
    subject: 'Website Contact Form',
    text: `Name: ${req.body.name},
             Email: ${req.body.email},
             Message: ${req.body.message}
      `,
    html: `<div>
                    <div style="dislpay:flex; justify-content:center;">
                        <h2>Contact Form Submission</div>
                            <h3>Name: ${req.body.name}</h3>
                          <h3>Name: ${req.body.email}</h3>
                          <p>Name: ${req.body.message}</p>
                    </div>
                </div >`,
  };

  try {
    const message = await sgMail.send(msg);
    res.send('Email Sent');
  } catch (error) {
    res.json({ message: 'Email not sent', error: error });
  }
}
