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
    html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
      <!--[if !mso]><!-->
      <meta http-equiv="X-UA-Compatible" content="IE=Edge">
      <!--<![endif]-->
      <!--[if (gte mso 9)|(IE)]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
      <!--[if (gte mso 9)|(IE)]>
  <style type="text/css">
    body {width: 600px;margin: 0 auto;}
    table {border-collapse: collapse;}
    table, td {mso-table-lspace: 0pt;mso-table-rspace: 0pt;}
    img {-ms-interpolation-mode: bicubic;}
  </style>
<![endif]-->
      <style type="text/css">
    body, p, div {
      font-family: arial,helvetica,sans-serif;
      font-size: 14px;
    }
    body {
      color: #000000;
    }
    body a {
      color: #1188E6;
      text-decoration: none;
    }
    p { margin: 0; padding: 0; }
    table.wrapper {
      width:100% !important;
      table-layout: fixed;
      -webkit-font-smoothing: antialiased;
      -webkit-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
    img.max-width {
      max-width: 100% !important;
    }
    .column.of-2 {
      width: 50%;
    }
    .column.of-3 {
      width: 33.333%;
    }
    .column.of-4 {
      width: 25%;
    }
    ul ul ul ul  {
      list-style-type: disc !important;
    }
    ol ol {
      list-style-type: lower-roman !important;
    }
    ol ol ol {
      list-style-type: lower-latin !important;
    }
    ol ol ol ol {
      list-style-type: decimal !important;
    }
    @media screen and (max-width:480px) {
      .preheader .rightColumnContent,
      .footer .rightColumnContent {
        text-align: left !important;
      }
      .preheader .rightColumnContent div,
      .preheader .rightColumnContent span,
      .footer .rightColumnContent div,
      .footer .rightColumnContent span {
        text-align: left !important;
      }
      .preheader .rightColumnContent,
      .preheader .leftColumnContent {
        font-size: 80% !important;
        padding: 5px 0;
      }
      table.wrapper-mobile {
        width: 100% !important;
        table-layout: fixed;
      }
      img.max-width {
        height: auto !important;
        max-width: 100% !important;
      }
      a.bulletproof-button {
        display: block !important;
        width: auto !important;
        font-size: 80%;
        padding-left: 0 !important;
        padding-right: 0 !important;
      }
      .columns {
        width: 100% !important;
      }
      .column {
        display: block !important;
        width: 100% !important;
        padding-left: 0 !important;
        padding-right: 0 !important;
        margin-left: 0 !important;
        margin-right: 0 !important;
      }
      .social-icon-column {
        display: inline-block !important;
      }
    }
  </style>
      <!--user entered Head Start--><!--End Head user entered-->
    </head>
    <body>
      <center class="wrapper" data-link-color="#1188E6" data-body-style="font-size:14px; font-family:arial,helvetica,sans-serif; color:#000000; background-color:#FFFFFF;">
        <div class="webkit">
          <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#FFFFFF">
            <tr>
              <td valign="top" bgcolor="#FFFFFF" width="100%">
                <table width="100%" role="content-container" class="outer" align="center" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="100%">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0">
                        <tr>
                          <td>
                            <!--[if mso]>
    <center>
    <table><tr><td width="600">
  <![endif]-->
                                    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="width:100%; max-width:600px;" align="center">
                                      <tr>
                                        <td role="modules-container" style="padding:0px 0px 0px 0px; color:#000000; text-align:left;" bgcolor="#FFFFFF" width="100%" align="left"><table class="module preheader preheader-hide" role="module" data-type="preheader" border="0" cellpadding="0" cellspacing="0" width="100%" style="display: none !important; mso-hide: all; visibility: hidden; opacity: 0; color: transparent; height: 0; width: 0;">
    <tr>
      <td role="module-content">
        <p></p>
      </td>
    </tr>
  </table><table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" role="module" data-type="columns" style="padding:0px 0px 0px 0px;" bgcolor="#f4efef" data-distribution="1,1,1">
    <tbody>
      <tr role="module-content">
        <td height="100%" valign="top"><table width="186" style="width:186px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 0px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-0">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="5798940c-7079-441d-9bd1-01b894d209d6" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:10px 0px 10px 0px; line-height:5px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style="text-align: inherit">${firstName} ${lastName}</h3><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="1135d040-6623-4e0d-9f58-ddb7b7d80984" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:18px 0px 18px 0px; line-height:7px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit"><span style="font-size: 11px">${email}</span></div><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="92179a92-e0e2-4fef-bab5-9d17ebc6103c" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:10px 0px 10px 0px; line-height:7px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style="text-align: inherit"><span style="font-size: 14px">Calculated Flow Rate</span></h3>
<h3 style="text-align: inherit"><span style="font-size: 14px">${flowRate} L/Min</span></h3><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="divider" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="22b38dce-1d11-40a1-aff7-6f8790e82d78">
    <tbody>
      <tr>
        <td style="padding:0px 0px 0px 0px;" role="module-content" height="100%" valign="top" bgcolor="">
          <table border="0" cellpadding="0" cellspacing="0" align="center" width="100%" height="2px" style="line-height:2px; font-size:2px;">
            <tbody>
              <tr>
                <td style="padding:0px 0px 2px 0px;" bgcolor="#000000"></td>
              </tr>
            </tbody>
          </table>
        </td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="b06fed81-68ad-41f9-88d6-3679c8a5fc14" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:10px 0px 10px 0px; line-height:16px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Bathtubs ${bathtub}</div>
<div style="font-family: inherit; text-align: inherit">Dishwashers ${dishwasher}</div>
<div style="font-family: inherit; text-align: inherit">Rain Showers ${rainShower}</div>
<div style="font-family: inherit; text-align: inherit">Sinks ${sink}</div>
<div style="font-family: inherit; text-align: inherit">Standard Showers ${standardShower}</div>
<div style="font-family: inherit; text-align: inherit">Washing Machines ${washingmachine}</div><div></div></div></td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table><table width="186" style="width:186px; border-spacing:0; border-collapse:collapse; margin:0px 10px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-1">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="0cef9281-39d0-4b0a-b2fa-79fb31d425cf" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:10px 0px 10px 0px; line-height:18px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style="text-align: inherit">Address</h3>
<div style="font-family: inherit; text-align: inherit">Street Address:&nbsp;</div>
<div style="font-family: inherit; text-align: inherit">${streetAddress}<br>
City: ${city}<br>
Phone Number: ${telephoneNumber}<br>
Postal Code: ${postalCode}</div><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7b4cb110-30c6-4b73-98fc-8209c4c47519" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:10px 5px 10px 5px; line-height:22px; text-align:inherit; background-color:#ddd0d0;" height="100%" valign="top" bgcolor="#ddd0d0" role="module-content"><div><div style="font-family: inherit; text-align: inherit">Home Ownership: ${
          ownership ? 'Owner' : 'Renter'
        }</div>
<div style="font-family: inherit; text-align: inherit">Property Type: ${houseType}</div>
<div style="font-family: inherit; text-align: inherit">Current Gas Supply: ${gasSupply}</div>
<div style="font-family: inherit; text-align: inherit">Off Grid Solution: ${
      completeSolution ? 'Yes' : 'No'
    }</div>
<div style="font-family: inherit; text-align: inherit">Geyser on outside wall:</div><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7befbb98-3151-4495-b824-8b3f4fe31655.1.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:5px 0px 5px 0px; line-height:3px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style="text-align: inherit">Current Geyser</h3><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="61404e9a-f3fc-48ea-9977-3f429fd30b04.1.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:5px 0px 5px 0px; line-height:7px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h5 style="text-align: inherit">Electric: ${
          electricGeyser ? 'Yes' : 'No'
        }</h5>
<h5 style="text-align: inherit">Solar: ${solarGeyser ? 'Yes' : 'No'}</h5>
<h5 style="text-align: inherit">Gas: ${gasGeyser ? 'Yes' : 'No'}</h5>
<h5 style="text-align: inherit">Other: ${
      otherGeyser ? 'Yes' : 'No'
    }</h5><div></div></div></td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table><table width="186" style="width:186px; border-spacing:0; border-collapse:collapse; margin:0px 0px 0px 10px;" cellpadding="0" cellspacing="0" align="left" border="0" bgcolor="" class="column column-2">
      <tbody>
        <tr>
          <td style="padding:0px;margin:0px;border-spacing:0;"><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7befbb98-3151-4495-b824-8b3f4fe31655" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:6px 0px 18px 0px; line-height:3px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style="text-align: inherit">Household Size</h3><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="61404e9a-f3fc-48ea-9977-3f429fd30b04" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:0px 0px 5px 0px; line-height:7px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h5 style="text-align: inherit">Children: ${children}</h5>
<h5 style="text-align: inherit">Teenagers: ${teenagers}</h5>
<h5 style="text-align: inherit">Adults: ${adults}</h5><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="7befbb98-3151-4495-b824-8b3f4fe31655.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:5px 0px 5px 0px; line-height:3px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h3 style="text-align: inherit">Intended Gas Use</h3><div></div></div></td>
      </tr>
    </tbody>
  </table><table class="module" role="module" data-type="text" border="0" cellpadding="0" cellspacing="0" width="100%" style="table-layout: fixed;" data-muid="61404e9a-f3fc-48ea-9977-3f429fd30b04.1" data-mc-module-version="2019-10-22">
    <tbody>
      <tr>
        <td style="padding:5px 0px 5px 0px; line-height:7px; text-align:inherit;" height="100%" valign="top" bgcolor="" role="module-content"><div><h5 style="text-align: inherit">Cooking: ${
          gasStove ? 'Yes' : 'No'
        }</h5>
<h5 style="text-align: inherit">Water: ${gasWaterHeating ? 'Yes' : 'No'}</h5>
<h5 style="text-align: inherit">Heating: ${
      gasHeating ? 'Yes' : 'No'
    }</h5><div></div></div></td>
      </tr>
    </tbody>
  </table></td>
        </tr>
      </tbody>
    </table></td>
      </tr>
    </tbody>
  </table><div data-role="module-unsubscribe" class="module" role="module" data-type="unsubscribe" style="color:#444444; font-size:12px; line-height:20px; padding:16px 16px 16px 16px; text-align:Center;" data-muid="4e838cf3-9892-4a6d-94d6-170e474d21e5"><div class="Unsubscribe--addressLine"></div></div></td>
                                      </tr>
                                    </table>
                                    <!--[if mso]>
                                  </td>
                                </tr>
                              </table>
                            </center>
                            <![endif]-->
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </div>
      </center>
    </body>
  </html>
           `,
  };

  const message = await sgMail.send(msg);

  console.log({ message });

  res.json({ data: { message } });
}
