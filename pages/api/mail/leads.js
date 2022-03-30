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
    html: `<div class="parent">
            <div class="child child_1">
            <h2>${firstName} ${lastName}</h2>
            <p>${email}</p>
            <hr />
            <h2>Calculated Flow Rate</h2>
            <h1>${flowRate}</h1>

            <p class="stats"><span>Bathtubs</span> <span>${bathtub}</span></p>
            <p class="stats"><span>Dishwashers</span> <span>${dishwasher}</span></p>
            <p class="stats"><span>Rain Showers</span> <span>${rainShower}</span></p>
            <p class="stats"><span>Sinks</span> <span>${sink}</span></p>
            <p class="stats"><span>Standard Showers</span> <span>${standardShower}</span></p>
            <p class="stats"><span>Washing Machine</span> <span>${washingmachine}</span></p>
            </div>
            <div class="child child_2">
             <h2>Address:</h2>
             <p>${streetAddress}</p>
             <p>${city}</p>
             <p>${postalCode}</p>
             <p>Phone Number ${telephoneNumber}</p>
             
             <div class="inner_card">
             <p>Home Ownership: ${ownership ? 'Owner' : 'Renter'}</p>
             <p>Property Type: ${houseType}</p>
             <p>Current Gas Supply: ${gasSupply}</p>
             <p>Off-Grid-Solution: ${offGrid ? 'Yes' : 'No'}</p>
             <p>Geyser on outside wall: ${locateOutside ? 'Yes' : 'No'}</p>
             <p>Request Installation: ${installation ? 'Yes' : 'No'}</p>
             </div>
            </div>
            <div class="child child_3">
            <h2>Household Size</h2>
            <div class="inner_grid">
              <div>
                <h3>Children</h3>
                <p>${children}</p>
              </div>
              <div>
                <h3>Teenagers</h3>
                <p>${teenagers}</p>
              </div>
              <div>
                <h3>Adults</h3>
                <p>${adults}</p>
              </div>
            
            </div>


            <h2>Intended Gas Use</h2>
            <div class="inner_grid">
              <div>
                <h3>Cooking</h3>
                <p>${gasStove ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3>Water</h3>
                <p>${gasWaterHeating ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3>Heating</h3>
                <p>${gasHeating ? 'Yes' : 'No'}</p>
              </div>
            
            </div>


             <h2>Current Geyser</h2>
            <div class="inner_grid_4">
              <div>
                <h3>Electric</h3>
                <p>${electricGeyser ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3>Gas</h3>
                <p>${gasGeyser ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3>Solar</h3>
                <p>${solarGeyser ? 'Yes' : 'No'}</p>
              </div>
              <div>
                <h3>Other</h3>
                <p>${otherGeyser ? 'Yes' : 'No'}</p>
              </div>
            
            </div>


            </div>
           </div >
           <style>
           .parent {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: 1fr;
                    grid-column-gap: 0px;
                    grid-row-gap: 0px;
                    background-color: gray;
           }

           .inner_grid {
             display: grid;
               grid-template-columns: repeat(3, 1fr);
                    grid-template-rows: 1fr;
                    grid-column-gap: 0px;
                    grid-row-gap: 0px;
                    background-color: gray;
           }

           .inner_grid_4 {
             display: grid;
               grid-template-columns: repeat(4, 1fr);
                    grid-template-rows: 1fr;
                    grid-column-gap: 0px;
                    grid-row-gap: 0px;
                    background-color: gray;
           }

           .child {
             background-color:white;
           }

           .stats {
             display: flex;
             font-size: 1rem;
             justify-content: space-between;
           }

           .child_1 h1 {
             padding: 5px;
           }

           .child_1 h2, .child_2 h2, .child_3 h2 {
             font-weight: bold;
             font-size: 1.5em;
           }

           .child_1 p, .child_2 p {
               font-weight: normal;
                font-size: 14px;
           }

           .child hr {
              margin: 5px;
           }

           .inner_card {
             margin: 5px;
             background-color: #F3F4F6;
           }




           @media only screen and (max-width: 600px) {
             .parent {
                    display: grid;
                    grid-template-columns: 1fr;
                    grid-template-rows: 3fr;
                    grid-column-gap: 0px;
                    grid-row-gap: 10px;
                    background-color: gray;
             }
           }
           
           </style>
           `,
  };

  const message = await sgMail.send(msg);

  console.log({ message });

  res.json({ data: { message } });
}
