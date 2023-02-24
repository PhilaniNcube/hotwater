import React, { useRef, useState } from "react";
import { supabase } from "../../utils/supabase";
import formatter from "../../lib/format";

const Invoice = ({ invoice }) => {

  const formRef = useRef();

   const [chec, setChc] = useState("");
   const [payId, setPayId] = useState("");

     const submit = () => {
       console.log("submit", chec, payId);

       formRef.current.submit();
     };

  const handleSubmit = async () => {
    const res = await fetch(`/api/invoice/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        first_name: invoice.first_name,
        last_name: invoice.last_name,
        email: invoice.email,
        amount: invoice.amount,
        reference: invoice.reference,
        id: invoice.id,
      }),
    });

    const data = await res.json();



    const { paygateId, reqId, ref, checksum } = data;


        setChc(checksum);
        setPayId(reqId);

    console.log({})

          submit({chec, payId});
  };

  return (
    <main>
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-2xl font-bold text-slate-700">
          Payment Link: {invoice.first_name} {invoice.last_name}
        </h1>
        <p className="text-lg font-bold text-slate-700">
          Reference: {invoice.reference}
        </p>

        <h1 className="text-2xl font-bold text-slate-700">
          Payment Amount: R&nsbp;{invoice.amount}
        </h1>

        <p className="text-md font-medium leading-7 text-slate-700">
          Thank you for choosing our Hotwater24 for your needs. We would like to
          inform you that in order to proceed with the payment, you need to
          click on the link provided. This link will redirect you to our secure
          payment gateway, where you can safely and easily make your payment for
          the installation service.
        </p>
        <p className="text-md font-medium leading-7 text-slate-700 mt-3">
          Our payment gateway is designed to ensure that your financial
          information is kept confidential and secure throughout the payment
          process. You will be prompted to provide your payment details,
          including credit card information or other preferred payment methods.
          Once you have completed the payment process, you will receive a
          confirmation email with details of your payment.
        </p>
        <p className="text-md font-medium leading-7 text-slate-700 mt-3">
          We appreciate your business and look forward to providing you with
          excellent service. Please do not hesitate to contact us if you have
          any questions or concerns regarding the payment process. Thank you for
          your trust in us.
        </p>

        <button
          onClick={handleSubmit}
          className="bg-blue-600 rounded-md px-6 py-2 text-white text-xl font-medium"
        >
          Pay Now
        </button>
      </div>

      <form
        action="https://secure.paygate.co.za/payweb3/process.trans"
        method="POST"
        onSubmit={submit}
        ref={formRef}
      >
        <input type="hidden" name="PAY_REQUEST_ID" value={payId} />
        <input type="hidden" name="CHECKSUM" value={chec} />
        <input type="submit" name="sumbit" className="hidden" />
      </form>
    </main>
  );
};
export default Invoice;

export async function getServerSideProps({params: {id}}) {


  const { data: invoice, error } = await supabase
    .from("invoice")
    .select("*")
    .eq("id", id)
    .single();

  return {
    props: {
      invoice,
    },
  };
}
