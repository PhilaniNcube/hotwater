import { useRouter } from "next/router";
import { useEffect } from "react";
import { setCookie } from "cookies-next";

const Callback = () => {

  const router = useRouter()

  console.log(router)

useEffect(() => {
  const authorize = async () => {
   const response = await fetch(`http://localhost:3000/api/xero/api_callback`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      code: router.query.code,
      url: `http://localhost:3000/${router.asPath}`
    })
   })

   let result = await response.json()

   localStorage.setItem('access_token', result.access_token)
   localStorage.setItem('id_token', result.id_token)
   localStorage.setItem('refresh_token', result.refresh_token)

   console.log(result)



   return result

  }

  authorize()


},[])



  return <div>Callback</div>;
};
export default Callback;
