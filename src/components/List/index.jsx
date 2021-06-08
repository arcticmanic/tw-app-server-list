import React from 'react';
import ListItem from '../ListItem'

const List = () => {
  return (
    <section className="flex flex-col pt-3 w-1/3 bg-gray-50 overflow-y-scroll">
      <label className="px-3">
        <input className="rounded-lg p-4 bg-gray-100 transition duration-200 focus:outline-none focus:ring-2 w-full"
          placeholder="Search..." />
      </label>

      <ul className="mt-6">
        <ListItem />
      </ul>
    </section>
  )
};

export default List;