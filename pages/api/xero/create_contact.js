import xero from "../../../utils/xero";
import { encode, decode } from "js-base64";
import { Contact, Contacts, Phone } from "xero-node";
import cookie from 'cookie'
import { supabaseService } from "../../../utils/supabaseService";


export default async function handler(req, res) {

  await xero.initialize()
  let { data, error } = await supabaseService
    .from("xero")
    .select("*")
    .eq("id", 1)
    .single();

  const auth = await fetch("https://api.xero.com/connections", {
    headers: {
      Authorization: `Bearer ${data.access_token}`,
    },
  });

  const authResponse = await auth.json()

  console.log(authResponse)



    const request = await fetch("https://api.xero.com/api.xro/2.0/Contacts", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${data.access_token}`,
        "Xero-Tenant-Id": "10e6325f-99de-4953-84c7-9f6457003154",
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Contacts: [
          {
            ContactStatus: "ACTIVE",
            Name: "Philani Now",
            EmailAddress: "te32476@blah.com",
            BankAccountDetails: "",
            Addresses: [
              {
                AddressType: "STREET",
                City: "Port Elizabeth",
                Region: "Eastern Cape",
                PostalCode: "6001",
                Country: "South Africa",
              },
            ],
            Phones: [
              {
                "PhoneType": "DEFAULT",
                "PhoneNumber": "27817551279",
                "PhoneAreaCode": "",
                "PhoneCountryCode": "",
              },
            ],
            "IsSupplier": false,
            "IsCustomer": true,
          },
        ],
      }),
    });

    const result = await request.json()


    res.send({result, authResponse})

  //  const token =  await xero.initialize();

  //  console.log(token)

  //   const xeroTenantId = "10e6325f-99de-4953-84c7-9f6457003154";
  //   const summarizeErrors = true;

  //   const phone = {
  //     phoneNumber: "+27817551279",
  //     phoneType: Phone.PhoneTypeEnum.MOBILE,
  //   };

  //   const phones = [];
  //   phones.push(phone);

  //   const contact = {
  //     name: "Philani Ncube Test",
  //     emailAddress: "test@example.com",
  //     phones: phones,
  //   };

  //   const contacts = {
  //     contacts: [contact],
  //   };

  //   try {
  //     const response = await xero.accountingApi.createContacts(
  //       xeroTenantId,
  //       contacts,
  //       summarizeErrors
  //     );
  //     console.log(response.body || response.response.statusCode);
  //     res.send({body: response.body , statusCode: response.response.statusCode, token});
  //     return
  //   } catch (err) {
  //     const error = JSON.stringify(err.response.body, null, 2);
  //     console.log(`Status Code: ${err.response.statusCode} => ${error}`);

  //     res.send(`Status Code: ${err.response.statusCode} => ${error}`);
  //   }


}
