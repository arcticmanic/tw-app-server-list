import React from 'react';
import List from '../List';
import Form from '../Form';

const Main = () => {
  return (
    <main className="flex justify-center mt-2 mb-2 p-8">
      <div className="container flex flex-wrap justify-center">
        <List />
        <section className="w-full md:w-2/3 p-4 flex flex-col items-center">
          <h1 className="font-bold text-2xl mb-2">Server name</h1>
          <Form />
        </section>
      </div>
    </main>
  );
};

export default Main;