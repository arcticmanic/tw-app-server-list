import React from 'react';
import List from '../List';
import Form from '../Form';

const Main = () => {
  return (
    <main className="flex w-full h-full shadow-lg rounded-3xl justify-center mt-2 mb-2 p-8">
      <List />
      <section className="w-2/3 m-auto px-4 pt-3 flex flex-col items-center bg-white rounded-r-3xl">
        <h1 className="font-bold text-2xl mb-2">Server name</h1>
        <Form />
      </section>
    </main>
  )
};

export default Main;