import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.send('Unauthorized');
    return;
  }

  const {
    children,
    teenagers,
    adults,
    houseType,
    ownership,
    gasSupply,
    gasStove,
    gasWaterHeating,
    gasHeating,
    otherGasUse,
    locateOutside,
    gasGeyser,
    electricGeyser,
    solarGeyser,
    otherGeyser,
    standardShower,
    rainShower,
    bathtub,
    sink,
    dishwasher,
    washingmachine,
    flowRate,
    offGrid,
    firstName,
    lastName,
    email,
    streetAddress,
    city,
    telephoneNumber,
    postalCode,
    completeSolution,
    product_id,
    installation,
  } = req.body;

  console.log(req.body.email);

  const msg = {
    to: 'info@hotwater24.com', // Change to your recipient
    from: 'info@hotwater24.com', // Change to your verified sender
    cc: req.body.email,
    subject: 'Hotwater24 | Lead',
    text: `Thank you for answering questions about your property and gas geyser needs. We will be in touch shortly`,
    html: `<div>
               <h2>Thank You ${firstName} ${lastName}</h2>
               <p>email: ${email}</p>  
               <p>address: ${streetAddress}</p>  
               <p>city: ${city}</p>  
               <p>postalCode: ${postalCode}</p>  
               <p>telephone: ${telephoneNumber}</p>  
               <h2>Flow Rate: ${flowRate}</h2>  
               <p>Selected Geyser:'https://hotwater24.com/catalogue/${product_id}</p>  
               <p>Off-Grid-Solution: ${completeSolution ? 'Yes' : 'No'}</p>  
               <p>Require Installation: ${installation ? 'Yes' : 'No'}</p>  
               <p>Geyser Location: ${
                 locateOutside ? 'Outside Wall' : 'Not On Outside Wall'
               }</p>  
               <p>Property Ownership: ${ownership ? 'Owner' : 'Renter'}</p>  
               <p>Property Type: ${houseType}</p>  
           </div >`,
  };

  const message = await sgMail.send(msg);

  console.log({ message });

  res.json({ data: { message } });
}
