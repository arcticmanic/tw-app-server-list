import React from 'react';

const Header = () => {
  return (
    <header className="text-gray-100 bg-gray-900 body-font shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center lg:items-center lg:justify-center mb-4 md:mb-0" href="/">
          <span className="ml-3 text-xl">Servers</span>
        </a>
      </div>
    </header>
  )
};

export default Header;