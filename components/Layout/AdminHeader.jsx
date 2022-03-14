import React from 'react';
import Link from 'next/link';

const AdminHeader = () => {
  return (
    <div>
      <div className="bg-gray-600 py-6 lg:py-8">
        <div className="container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <h4 className="text-2xl font-bold leading-tight text-white">
              Dashboard
            </h4>
          </div>
          <div className="mt-6 md:mt-0">
            <Link href="/" passHref>
              <button className="mr-3 bg-transparent focus:outline-none transition duration-150 ease-in-out rounded hover:bg-gray-700 text-white px-5 py-2 text-sm border border-white">
                Home
              </button>
            </Link>
            <Link href="/admin/orders" passHref>
              <button className="transition focus:outline-none duration-150 ease-in-out hover:bg-gray-200 bg-white rounded text-indigo-700 px-8 py-2 text-sm">
                Orders
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHeader;
