import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import { setCookie } from "cookies-next";
import Head from "next/head";

const Callback = () => {

  const router = useRouter()

  console.log(router)

useEffect(() => {
  const authorize = async () => {
   const response = await fetch(`http://hotwater24.com/api/xero/api_callback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: router.query.code,
      url: `http://hotwater24.com/${router.asPath}`
    })
   })

   let result = await response.json()

   console.log(result)
   return result
  }
  authorize()
},[router.asPath, router.query.code])



  return <Fragment><Head><title>Callback</title></Head><div /></Fragment>;
};
export default Callback;
