import xero from "../../../utils/xero";
import { encode, decode } from "js-base64";
import { Contact, Contacts, Phone } from "xero-node";
import cookie from 'cookie'


export default async function handler(req, res) {

  await xero.initialize()

  await xero.buildConsentUrl()


const request = await xero.accountingApi.createContacts(
  "10e6325f-99de-4953-84c7-9f6457003154",
  {
    name: "Philani Ncube Test",
    FirstName: "TestFirstName",
    LastName: "TestLastName",
    EmailAddress: "test@example.com",
    Phones: ["+27817551279"],
    IsCustomer: true,
  }
);

console.log(request)

res.send({ request });

}
