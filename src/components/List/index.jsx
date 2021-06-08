import React from 'react';
import { useSelector } from 'react-redux';
import ListItem from '../ListItem';

const List = () => {
  const { servers } = useSelector((state) => state.DATA);

  return (
    <section className="flex flex-col pt-3 w-1/3 bg-gray-50 overflow-y-scroll">
      <ul>
        {servers.map((server, id) => (
          <ListItem key={id} server={server} />
        ))}
      </ul>
    </section>
  );
};

export default List;