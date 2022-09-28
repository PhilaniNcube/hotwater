import React from 'react';
import Link from 'next/link';
import { RiWhatsappLine } from 'react-icons/ri';

const Whatsapp = () => {
  return (
    <div className="h-8 w-8 text-md bg-green-600 text-white flex justify-center items-center rounded-full cursor-pointer">
      <a
        href="https://wa.me/27793414075?text=I'm%20interested%20in%20your%20products"
        target="_blank"
        rel="noreferrer"
      >
        <RiWhatsappLine className="text-2xl" />
      </a>
    </div>
  );
};

export default Whatsapp;
