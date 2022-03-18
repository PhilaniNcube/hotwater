import React from 'react';
import Link from 'next/link';
import { RiWhatsappLine } from 'react-icons/ri';

const Whatsapp = () => {
  return (
    <div className="h-10 w-10 p-1 text-md bg-green-600 text-white flex justify-center items-center rounded-full cursor-pointer">
      <Link
        href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
        passHref
      >
        <RiWhatsappLine className="text-2xl" />
      </Link>
    </div>
  );
};

export default Whatsapp;
