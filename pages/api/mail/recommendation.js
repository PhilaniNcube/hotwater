import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.send('Unauthorized');
    return;
  }

  console.log(req.body);

  const msg = {
    to: 'webdev@hotwater24.com', // Change to your recipient
    cc: 'ncbphi001@gmail.com',
    from: 'webdev@hotwater24.com', // Change to your verified sender
    subject: 'New recommendation wizard submission',
    text: `Body: ${req.body}`,
    html: `<div>
                    <div style="dislpay:flex; justify-content:center;">
                        <h2>Contact Form Submission</div>
                            <h3>Name: ${req.body}</h3>
                        
                    </div>
                </div >`,
  };

  const message = await sgMail.send(msg);

  res.json({ message: 'Email Sent' });
}
